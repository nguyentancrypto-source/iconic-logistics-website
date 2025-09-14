import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

type Item = {
  id: string;
  name: string;
  sku: string;
  category: string;
  weightKg: number;
  location: string;
  available: boolean;
  updatedAt: string;
};

type Paged<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export default function Items() {
  const [q, setQ] = useState('');
  const [debouncedQ, setDebouncedQ] = useState('');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Paged<Item>>({ items: [], total: 0, page: 1, pageSize });
  const [hasMore, setHasMore] = useState(true);

  // Debounce search input
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedQ(q), 350);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [q]);

  // Reset items khi search mới
  useEffect(() => {
    setPage(1);
    setData({ items: [], total: 0, page: 1, pageSize });
    setHasMore(true);
  }, [debouncedQ]);

  const query = useMemo(
    () => new URLSearchParams({ q: debouncedQ, page: String(page), pageSize: String(pageSize) }).toString(),
    [debouncedQ, page, pageSize],
  );

  // Infinite scroll fetch
  useEffect(() => {
    let cancelled = false;
    async function fetchItems() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/items?${query}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const body = (await res.json()) as Paged<Item>;
        if (!cancelled) {
          setData((prev) => {
            // Nếu page = 1 thì reset, nếu >1 thì nối
            return page === 1
              ? body
              : {
                  ...body,
                  items: [...prev.items, ...body.items],
                };
          });
          setHasMore(body.items.length > 0 && page * pageSize < body.total);
        }
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : 'Failed to load';
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchItems();
    return () => {
      cancelled = true;
    };
  }, [query, page]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (loading || error || !hasMore) return;
    const scrollY = window.scrollY;
    const viewport = window.innerHeight;
    const fullHeight = document.body.offsetHeight;
    if (fullHeight - (scrollY + viewport) < 200) {
      setPage((p) => p + 1);
    }
  }, [loading, error, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // const totalPages = Math.max(1, Math.ceil(data.total / data.pageSize));

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Items</h1>
      <div className="flex gap-2">
        <input
          className="border rounded px-3 py-2 w-full max-w-md"
          placeholder="Search by id, name, sku, location, category"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
        />
      </div>
      {loading && <div className="text-gray-600">Loading…</div>}
      {error && (
        <div className="text-red-600 flex items-center gap-2">
          Lỗi tải dữ liệu: {error}
          <button
            className="ml-2 px-2 py-1 border rounded text-xs hover:bg-red-50"
            onClick={() => setError(null)}
          >
            Thử lại
          </button>
        </div>
      )}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">SKU</th>
                <th className="text-left p-2">Category</th>
                <th className="text-left p-2">Weight (kg)</th>
                <th className="text-left p-2">Location</th>
                <th className="text-left p-2">Available</th>
                <th className="text-left p-2">Updated</th>
                <th className="text-left p-2">Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((it) => (
                <tr key={it.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-mono">{it.id}</td>
                  <td className="p-2">{it.name}</td>
                  <td className="p-2">{it.sku}</td>
                  <td className="p-2">{it.category}</td>
                  <td className="p-2">{it.weightKg}</td>
                  <td className="p-2">{it.location}</td>
                  <td className="p-2">{it.available ? 'Yes' : 'No'}</td>
                  <td className="p-2">{new Date(it.updatedAt).toLocaleString()}</td>
                  <td className="p-2">
                    <Link to={`/items/${it.id}`} className="text-blue-600 hover:underline">
                      Xem chi tiết
                    </Link>
                  </td>
                </tr>
              ))}
              {data.items.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {loading && <div className="text-gray-600 text-center">Đang tải thêm dữ liệu...</div>}
      {!hasMore && <div className="text-gray-400 text-center">Đã hiển thị toàn bộ hàng hóa.</div>}
    </div>
  );
}
