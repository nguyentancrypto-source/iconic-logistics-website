import type { Item } from '../../core/entities/Item.ts';
import type { ItemQuery, ItemRepository, PagedResult } from '../../core/ports/ItemRepository.ts';
import { mockItems } from '../data/mockItems.ts';

export class InMemoryItemRepository implements ItemRepository {
  private readonly data: Item[];

  constructor(seed: Item[] = mockItems) {
    this.data = seed;
  }

  async list(query: ItemQuery): Promise<PagedResult<Item>> {
    const { q, category, available } = query;
    const page = Math.max(1, query.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, query.pageSize ?? 20));

    let filtered = this.data;

    if (q && q.trim()) {
      const s = q.trim().toLowerCase();
      filtered = filtered.filter(
        (i) =>
          i.id.toLowerCase().includes(s) ||
          i.name.toLowerCase().includes(s) ||
          i.sku.toLowerCase().includes(s) ||
          i.location.toLowerCase().includes(s) ||
          i.category.toLowerCase().includes(s),
      );
    }

    if (typeof category === 'string' && category.length > 0) {
      filtered = filtered.filter((i) => i.category.toLowerCase() === category.toLowerCase());
    }

    if (typeof available === 'boolean') {
      filtered = filtered.filter((i) => i.available === available);
    }

    const total = filtered.length;
    const start = (page - 1) * pageSize;
    const items = filtered.slice(start, start + pageSize);

    return { items, total, page, pageSize };
  }

  async findById(id: string): Promise<Item | null> {
    return this.data.find((i) => i.id === id) ?? null;
  }
}
