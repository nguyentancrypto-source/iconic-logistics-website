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

export interface ItemRepository {
  list(query: ItemQuery): Promise<PagedResult<Item>>;
  findById(id: string): Promise<Item | null>;
}
