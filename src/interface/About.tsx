import { Card } from './ui';

export default function About() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
        Về Iconic Logistics
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80"
          alt="Đội ngũ Iconic Logistics"
          className="rounded-xl shadow-md w-full max-w-xs object-cover border-4 border-blue-100"
          loading="lazy"
        />
        <div className="space-y-3 text-gray-700 text-lg">
          <p>
            <b>Iconic Logistics</b> là đơn vị tiên phong trong lĩnh vực logistics tại Việt Nam, cung
            cấp giải pháp vận chuyển, kho bãi, quản lý đơn hàng và tracking hiện đại.
          </p>
          <p>
            <b>Sứ mệnh:</b> Tối ưu chuỗi cung ứng, nâng cao hiệu suất vận hành và trải nghiệm khách
            hàng cho doanh nghiệp Việt.
          </p>
          <p>
            <b>Tầm nhìn:</b> Trở thành đối tác logistics tin cậy hàng đầu khu vực Đông Nam Á.
          </p>
        </div>
      </div>
      <Card className="bg-gradient-to-br from-white to-blue-50 border-l-4 border-orange-400 animate-fadein">
        <h2 className="text-xl font-bold text-orange-600 mb-2">Giá trị cốt lõi</h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Chuyên nghiệp - Tận tâm - Minh bạch</li>
          <li>Đổi mới công nghệ, ứng dụng quản lý thông minh</li>
          <li>Đặt lợi ích khách hàng lên hàng đầu</li>
          <li>Phát triển bền vững cùng cộng đồng</li>
        </ul>
      </Card>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=300&q=80"
          alt="Kho bãi"
          className="rounded shadow w-40 h-28 object-cover"
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=300&q=80"
          alt="Xe tải vận chuyển"
          className="rounded shadow w-40 h-28 object-cover"
          loading="lazy"
        />
        <img
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=300&q=80"
          alt="Nhân viên logistics"
          className="rounded shadow w-40 h-28 object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}
