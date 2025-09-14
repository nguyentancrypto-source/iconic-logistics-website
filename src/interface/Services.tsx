import { Card, Button } from './ui';

const services = [
  {
    title: 'Quản lý kho bãi',
    desc: 'Tồn kho minh bạch, nhập/xuất nhanh chóng, kiểm soát realtime.',
    icon: '📦',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Vận chuyển',
    desc: 'Đa kênh, tối ưu lộ trình, chi phí, giao nhận tận nơi toàn quốc.',
    icon: '🚚',
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Theo dõi đơn hàng',
    desc: 'Cập nhật trạng thái real-time, thông tin minh bạch, cảnh báo tự động.',
    icon: '📲',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Tư vấn & hỗ trợ',
    desc: 'Đội ngũ chuyên gia logistics sẵn sàng tư vấn 24/7 cho mọi nhu cầu.',
    icon: '🤝',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Services() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6 text-center">
        Dịch vụ nổi bật
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <Card
            key={s.title}
            className="flex flex-col items-center text-center gap-3 border-t-4 border-blue-400 hover:scale-105 transition-transform duration-200 animate-fadein"
          >
            <span className="text-5xl mb-2">{s.icon}</span>
            <img
              src={s.img}
              alt={s.title}
              className="rounded-lg w-full h-28 object-cover border border-gray-100"
              loading="lazy"
            />
            <h2 className="text-lg font-bold text-blue-700">{s.title}</h2>
            <p className="text-gray-700 text-sm">{s.desc}</p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 mt-2">Tìm hiểu thêm</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
