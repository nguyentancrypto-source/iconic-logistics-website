export default function Home() {
  return (
    <div className="p-8">
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-extrabold">Giải pháp Logistics Hiệu Quả</h1>
        <p className="text-gray-600">
          Vận hành kho bãi, vận chuyển và theo dõi đơn hàng nhanh chóng, minh bạch và tối ưu chi
          phí.
        </p>
        <div className="flex justify-center gap-3">
          <a
            href="/services"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Dịch vụ
          </a>
          <a href="/items" className="px-4 py-2 border rounded hover:bg-gray-50">
            Xem hàng hóa
          </a>
        </div>
      </section>
    </div>
  );
}
