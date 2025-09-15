
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import Items from './Items';

// Mock fetch
beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve(
      new window.Response(
        JSON.stringify({
          items: [
            { id: '1', name: 'A', sku: 'SKU1', category: 'Cat', weightKg: 1, location: 'Loc', available: true, updatedAt: new Date().toISOString() },
          ],
          total: 1,
          page: 1,
          pageSize: 5,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      )
    )
  ) as unknown as typeof fetch;
});
afterEach(() => {
  (global.fetch as any).mockRestore?.();
});

describe('Items', () => {
  it('renders and fetches items', async () => {
    render(
      <MemoryRouter>
        <Items />
      </MemoryRouter>
    );
    expect(await screen.findByText('A')).toBeInTheDocument();
    expect(screen.getByText('Xem chi tiết')).toBeInTheDocument();
  });
  it('searches items', async () => {
    render(
      <MemoryRouter>
        <Items />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: 'A' } });
    expect(await screen.findByText('A')).toBeInTheDocument();
  });
});
