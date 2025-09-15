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
  // eslint-disable-next-line no-unused-vars
  list(query: ItemQuery): Promise<PagedResult<Item>>;
  // eslint-disable-next-line no-unused-vars
  findById(id: string): Promise<Item | null>;
}
