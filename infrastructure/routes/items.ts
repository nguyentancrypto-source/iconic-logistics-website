import type { Request, Response } from 'express';
import { Router } from 'express';
import { InMemoryItemRepository } from '../repositories/InMemoryItemRepository.ts';
import { createListItems } from '../../app/use-cases/listItems.ts';

const repo = new InMemoryItemRepository();
const listItems = createListItems(repo);

export const itemsRouter = Router();

itemsRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { q, category, available, page, pageSize } = req.query;
    const result = await listItems({
      q: typeof q === 'string' ? q : undefined,
      category: typeof category === 'string' ? category : undefined,
      available: typeof available === 'string' ? available === 'true' : undefined,
      page: typeof page === 'string' ? parseInt(page, 10) : undefined,
      pageSize: typeof pageSize === 'string' ? parseInt(pageSize, 10) : undefined,
    });
    res.json(result);
  } catch {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

itemsRouter.get('/:id', async (req: Request, res: Response) => {
  const item = await repo.findById(req.params.id);
  if (!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
});

// Compatibility alias for search
export const searchRouter = Router();
searchRouter.get('/', async (req: Request, res: Response) => {
  try {
    const { q, category, available, page, pageSize } = req.query;
    const result = await listItems({
      q: typeof q === 'string' ? q : undefined,
      category: typeof category === 'string' ? category : undefined,
      available: typeof available === 'string' ? available === 'true' : undefined,
      page: typeof page === 'string' ? parseInt(page, 10) : undefined,
      pageSize: typeof pageSize === 'string' ? parseInt(pageSize, 10) : undefined,
    });
    res.json(result);
  } catch {
    res.status(500).json({ error: 'Failed to search items' });
  }
});
