/*
  Telegram Tasks Bot
  - Polls Telegram for commands from a single chat
  - Supports:
    /help
    /backlog <title> | <optional description>
    /ci <branch|main>
    /status

  Env requirements (provided by GitHub Actions step env):
    - TELEGRAM_BOT_TOKEN
    - TELEGRAM_CHAT_ID
    - BOT_PAT (for pushes/PR automation)
    - GITHUB_TOKEN (fallback for GitHub API reads)
    - DRY_RUN = 'true'|'false'
*/

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const REPO = process.env.GITHUB_REPOSITORY || '';
const [OWNER, NAME] = REPO.split('/');
const WORKDIR = process.cwd();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = (process.env.TELEGRAM_CHAT_ID || '').trim();
const DRY_RUN = String(process.env.DRY_RUN || 'false').toLowerCase() === 'true';
const GITHUB_TOKEN = process.env.BOT_PAT || process.env.GITHUB_TOKEN || '';

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.log('Telegram bot token or chat id not configured; exiting.');
  process.exit(0);
}

// Node 20 has global fetch
async function tg(method, params) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${method}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(params || {}),
  });
  if (!res.ok) throw new Error(`Telegram API ${method} failed: ${res.status}`);
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram API error: ${JSON.stringify(data)}`);
  return data.result;
}

async function sendMessage(text, replyToMessageId) {
  try {
    await tg('sendMessage', {
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
      reply_parameters: replyToMessageId ? { message_id: replyToMessageId } : undefined,
    });
  } catch (e) {
    console.error('Failed to send Telegram message:', e.message);
  }
}

function run(cmd, opts = {}) {
  console.log(`$ ${cmd}`);
  if (DRY_RUN) return '';
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
}

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
    .substring(0, 40);
}

function prependBacklog(title, desc) {
  const file = path.join(WORKDIR, 'BACKLOG.md');
  let content = '';
  try {
    content = fs.readFileSync(file, 'utf8');
  } catch {
    content = '# Backlog\n\n';
  }
  const now = new Date();
  const stamp = now.toISOString().replace('T', ' ').replace('Z', ' UTC');
  const lines = [];
  lines.push(`- [ ] ${title} — via Telegram (${stamp})`);
  if (desc && desc.trim()) lines.push(`  - ${desc.trim()}`);
  lines.push('');
  const updated = content.replace(/^# Backlog\n?/, (m) => m) // keep header if present
    .replace(/\n*$/, '\n');
  const final = updated + lines.join('\n');
  fs.writeFileSync(file, final, 'utf8');
}

async function createTaskBranch(title, desc) {
  const branch = `ui-ux/task-${slugify(title)}`;
  // Configure git
  if (!DRY_RUN) {
    run('git config user.name "iconic-bot"');
    run('git config user.email "bot@users.noreply.github.com"');
    // Use BOT_PAT if provided for push
    if (process.env.BOT_PAT) {
      const originUrl = `https://${OWNER}:${process.env.BOT_PAT}@github.com/${OWNER}/${NAME}.git`;
      run(`git remote set-url origin ${originUrl}`);
    }
  }
  run('git fetch origin --prune');
  run('git checkout -B main origin/main');
  run(`git checkout -B ${branch} origin/main`);

  // Update backlog
  prependBacklog(title, desc);
  run('git add BACKLOG.md');
  run(`git commit -m ${JSON.stringify(`docs(backlog): add task ${title} via Telegram`)}`);
  run(`git push -u origin ${branch}`);

  return branch;
}

async function dispatchCI(ref) {
  const url = `https://api.github.com/repos/${OWNER}/${NAME}/actions/workflows/ci.yml/dispatches`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${GITHUB_TOKEN}`,
      'accept': 'application/vnd.github+json',
    },
    body: JSON.stringify({ ref }),
  });
  if (res.status >= 300) {
    const t = await res.text();
    throw new Error(`Failed to dispatch CI: ${res.status} ${t}`);
  }
}

async function listCI() {
  const url = `https://api.github.com/repos/${OWNER}/${NAME}/actions/runs?per_page=5`;
  const res = await fetch(url, {
    headers: { 'authorization': `Bearer ${GITHUB_TOKEN}` },
  });
  const data = await res.json();
  const items = (data.workflow_runs || []).slice(0, 5).map((r) => `#${r.run_number} ${r.name} — ${r.status}/${r.conclusion || 'n/a'} — ${r.head_branch}`);
  return items;
}

function parseCommand(text) {
  const trimmed = text.trim();
  if (!trimmed.startsWith('/')) return null;
  const space = trimmed.indexOf(' ');
  const cmd = (space === -1 ? trimmed : trimmed.slice(0, space)).toLowerCase();
  const rest = space === -1 ? '' : trimmed.slice(space + 1);
  return { cmd, rest };
}

async function main() {
  // Fetch updates; do not use offset to keep workflow stateless. Filter by recency.
  const updates = await tg('getUpdates', {});
  const nowSec = Math.floor(Date.now() / 1000);
  const recent = updates.filter((u) => u.message && String(u.message.chat.id) === TELEGRAM_CHAT_ID && (nowSec - (u.message.date || 0)) <= 600);

  if (!recent.length) {
    console.log('No recent commands.');
    return;
  }

  for (const u of recent) {
    const m = u.message;
    const parsed = parseCommand(m.text || '');
    if (!parsed) continue;
    const { cmd, rest } = parsed;
    try {
      if (cmd === '/help') {
        await sendMessage('Commands:\n- /backlog <title> | <desc> — create a task branch and open PR automatically\n- /ci <branch|main> — dispatch CI workflow for a ref\n- /status — show last CI runs', m.message_id);
      } else if (cmd === '/backlog') {
        if (!GITHUB_TOKEN) throw new Error('Missing GitHub token (BOT_PAT/GITHUB_TOKEN).');
        const [title, desc] = rest.split('|');
        if (!title || !title.trim()) throw new Error('Title required. Usage: /backlog <title> | <desc>');
        const branch = await createTaskBranch(title.trim(), (desc || '').trim());
        await sendMessage(`✅ Created branch \`${branch}\`. Auto PR workflow will open PR to \`main\` and auto-merge when CI is green.`, m.message_id);
      } else if (cmd === '/ci') {
        const ref = (rest && rest.trim()) || 'main';
        await dispatchCI(ref);
        await sendMessage(`🚀 CI dispatched for \`${ref}\`.`, m.message_id);
      } else if (cmd === '/status') {
        const items = await listCI();
        await sendMessage(`Recent CI runs:\n${items.map((s) => `• ${s}`).join('\n')}`, m.message_id);
      } else {
        await sendMessage('Unknown command. Try /help', m.message_id);
      }
    } catch (e) {
      console.error(e);
      await sendMessage(`❌ Error: ${e.message}`, m.message_id);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
