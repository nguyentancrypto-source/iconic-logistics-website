import { render, screen, fireEvent } from '@testing-library/react';
import Items from './Items';

// Mock fetch
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        items: [
          { id: '1', name: 'A', sku: 'SKU1', category: 'Cat', weightKg: 1, location: 'Loc', available: true, updatedAt: new Date().toISOString() },
        ],
        total: 1,
        page: 1,
        pageSize: 5,
      }),
    })
  ) as any;
});
afterEach(() => {
  (global.fetch as any).mockRestore?.();
});

describe('Items', () => {
  it('renders and fetches items', async () => {
    render(<Items />);
    expect(await screen.findByText('A')).toBeInTheDocument();
    expect(screen.getByText('Xem chi tiết')).toBeInTheDocument();
  });
  it('searches items', async () => {
    render(<Items />);
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'A' } });
    expect(await screen.findByText('A')).toBeInTheDocument();
  });
});
