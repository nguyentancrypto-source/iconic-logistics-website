export default function Services() {
  const services = [
    { title: 'Quản lý kho bãi', desc: 'Tồn kho minh bạch, nhập/xuất nhanh chóng.' },
    { title: 'Vận chuyển', desc: 'Đa kênh, tối ưu lộ trình và chi phí.' },
    { title: 'Theo dõi đơn hàng', desc: 'Cập nhật real-time, thông tin rõ ràng.' },
  ];
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dịch vụ</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((s) => (
          <div key={s.title} className="border rounded p-4 hover:shadow-sm">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
