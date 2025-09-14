import { Button, Card } from './ui';

export default function Home() {
  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-orange-50 min-h-[80vh]">
      <section className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm animate-fadein">
          Nâng Tầm Chuỗi Cung Ứng Việt Nam
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Iconic Logistics cung cấp giải pháp vận chuyển, kho bãi, quản lý đơn hàng và tracking hiện
          đại, giúp doanh nghiệp tối ưu chi phí, minh bạch quy trình và nâng cao trải nghiệm khách
          hàng.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Kho bãi logistics thực tế"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm object-cover border-4 border-orange-200 animate-fadein"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Xe tải vận chuyển hàng hóa"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm object-cover border-4 border-blue-200 animate-fadein"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400">
            <a href="/services">Khám phá dịch vụ</a>
          </Button>
          <Button className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400">
            <a href="/items">Xem hàng hóa</a>
          </Button>
        </div>
        <Card className="mt-8 text-left bg-gradient-to-br from-white to-orange-50 border-l-4 border-blue-400 animate-fadein">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Tại sao chọn Iconic Logistics?</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Đội ngũ chuyên nghiệp, tận tâm, am hiểu thị trường Việt Nam.</li>
            <li>Hệ thống quản lý kho bãi, vận chuyển hiện đại, realtime tracking.</li>
            <li>Giá cả cạnh tranh, minh bạch, tối ưu cho từng loại hình doanh nghiệp.</li>
            <li>Hỗ trợ tư vấn 24/7, cam kết bảo mật và an toàn hàng hóa.</li>
            <li>Đối tác tin cậy của nhiều doanh nghiệp lớn trong và ngoài nước.</li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
