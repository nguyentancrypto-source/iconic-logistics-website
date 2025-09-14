# Project Summary: Iconic Logistics Website

## Scaffolded Tech Stack

- React 18 + Vite + TypeScript
- Tailwind CSS (configured, index.css wired up)
- React Router (pages: Home, About, Services, Contact, Careers, Items in `src/interface/`)
- Vitest + jsdom + smoke test
- ESLint 9 (flat config, scripts in package.json)
- GitHub Actions CI workflow (Node 20: install, typecheck, lint | true, test, build)

## Key Files & Structure

- `src/interface/` — App pages: Home, About, Services, Contact, Careers, Items
- `tailwind.config.js`, `postcss.config.js`, `src/index.css` — Tailwind setup
- `.github/workflows/ci.yml` — GitHub Actions CI
- `vitest.config.ts`, `src/App.test.tsx`, `src/setupTests.ts` — Testing setup
- `eslint.config.js` — ESLint 9 flat config
- `package.json` — Scripts for dev, build, test, lint, typecheck
- `README.md` — Project info (overwritten)
- `LICENSE`, `.gitignore` — Preserved

## Todo Progress

- [x] Scaffold React 18 + Vite + TypeScript + Tailwind at repo root
- [x] Add React Router and pages under src/interface/
- [x] Set up Vitest, jsdom, and a smoke test
- [x] Configure ESLint 9 flat config and scripts
- [x] Add GitHub Actions CI workflow
- [ ] Overwrite README.md (keep LICENSE, .gitignore)
- [ ] Stage, commit, and push all changes to dev branch

## Notes

- All changes are committed locally. Push to `main` is blocked by repo rules (must use PR).
- Next: create a new branch (e.g., `dev`) and push, or open a pull request as required.
