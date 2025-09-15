import type { Item } from '../entities/Item';

export type ItemQuery = {
  q?: string;
  category?: string;
  available?: boolean;
  page?: number;
  pageSize?: number;
};

export type PagedResult<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface ItemRepository {
  list(query: ItemQuery): Promise<PagedResult<Item>>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findById(id: string): Promise<Item | null>;
}
