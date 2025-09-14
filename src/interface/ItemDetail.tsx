import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Item {
  id: string;
  name: string;
  code: string;
  category: string;
  description?: string;
  available: boolean;
  imageUrl?: string;
}

export default function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    fetch(`${import.meta.env.VITE_API_BASE || 'http://localhost:4000'}/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Không tìm thấy hàng hóa');
        return res.json();
      })
      .then(setItem)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-8 text-center">Đang tải...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;
  if (!item) return null;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-8">
      <h1 className="text-2xl font-bold mb-2">{item.name}</h1>
      <div className="mb-2 text-gray-600">
        Mã hàng: <span className="font-mono">{item.code}</span>
      </div>
      <div className="mb-2">
        Loại: <span className="font-semibold">{item.category}</span>
      </div>
      <div className="mb-2">
        Trạng thái:{' '}
        <span className={item.available ? 'text-green-600' : 'text-gray-400'}>
          {item.available ? 'Còn hàng' : 'Hết hàng'}
        </span>
      </div>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full max-h-64 object-contain rounded mb-4"
        />
      )}
      <div className="mb-4">
        {item.description || <span className="italic text-gray-400">Chưa có mô tả</span>}
      </div>
      <div className="flex gap-3">
        <Link to="/items" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
          ← Quay lại danh sách
        </Link>
        <a
          href="mailto:contact@iconiclogistics.vn?subject=Tư vấn hàng hóa: {item.name}"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Liên hệ tư vấn
        </a>
      </div>
    </div>
  );
}
