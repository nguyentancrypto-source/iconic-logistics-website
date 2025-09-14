import type { Item } from '../../core/entities/Item.ts';
import type { ItemQuery, ItemRepository, PagedResult } from '../../core/ports/ItemRepository.ts';

export function createListItems(repo: ItemRepository) {
  return async function listItems(query: ItemQuery): Promise<PagedResult<Item>> {
    const page = Math.max(1, query.page ?? 1);
    const pageSize = Math.min(100, Math.max(1, query.pageSize ?? 20));
    return repo.list({ ...query, page, pageSize });
  };
}
