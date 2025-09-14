import { Card, Button } from './ui';

const services = [
  {
    title: 'Quản lý kho bãi thông minh',
    desc: 'Kho bãi tự động hóa 50,000m² với WMS hiện đại, barcode/RFID tracking, kiểm soát nhiệt độ cho hàng lạnh.',
    icon: '📦',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    features: ['99.9% chính xác tồn kho', 'Báo cáo realtime 24/7', 'Cold chain -25°C đến +25°C', 'Bảo hiểm đầy đủ'],
    pricing: 'Từ 15,000đ/m³/tháng',
    caseStudy: 'Vinamilk: Giảm 40% thời gian xuất nhập kho'
  },
  {
    title: 'Vận chuyển đa phương thức',
    desc: 'Mạng lưới 63 tỉnh thành với đội xe 500+ phương tiện, từ xe tải nhỏ đến container 40ft, đường bộ - đường biển - đường hàng không.',
    icon: '🚚',
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
    features: ['Giao hàng trong ngày HCM/HN', 'Tracking GPS realtime', 'Bảo hiểm 100% giá trị', 'Same-day/Next-day delivery'],
    pricing: 'Từ 5,000đ/kg nội thành',
    caseStudy: 'Honda: 99.8% đúng hẹn giao phụ tùng'
  },
  {
    title: 'Tracking & Quản lý đơn hàng',
    desc: 'Nền tảng số hóa với AI/ML tối ưu lộ trình, dự báo nhu cầu, tích hợp ERP/CRM, mobile app cho khách hàng.',
    icon: '📲',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    features: ['API tích hợp đầy đủ', 'Mobile app iOS/Android', 'Báo cáo BI chi tiết', 'Cảnh báo proactive'],
    pricing: 'Free với gói dịch vụ',
    caseStudy: 'Samsung: Tối ưu 35% chi phí vận chuyển'
  },
  {
    title: 'Tư vấn & Logistics tổng thể',
    desc: 'Đội ngũ 50+ chuyên gia logistics với kinh nghiệm quốc tế, tư vấn thiết kế chuỗi cung ứng, đào tạo nhân sự.',
    icon: '🤝',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
    features: ['Tư vấn miễn phí 30 phút', 'Đào tạo đội ngũ SCM', 'Audit quy trình hiện tại', 'Hỗ trợ 24/7/365'],
    pricing: 'Liên hệ để báo giá',
    caseStudy: 'Shopee: Setup fulfillment center từ 0'
  },
];

export default function Services() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Dịch vụ Logistics toàn diện
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
          Từ kho bãi thông minh đến vận chuyển đa phương thức, chúng tôi cung cấp giải pháp 
          logistics end-to-end giúp doanh nghiệp tối ưu chi phí và nâng cao hiệu quả.
        </p>
        
        {/* Top CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
            <a href="/contact" className="flex items-center gap-2">
              🎯 Nhận báo giá ngay
            </a>
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
            <a href="/items" className="flex items-center gap-2">
              📋 Xem bảng giá chi tiết
            </a>
          </Button>
        </div>
      </div>

      {/* Main Services */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card
            key={service.title}
            className="p-8 hover:shadow-2xl transition-all duration-300 border-t-4 border-primary group"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform">{service.icon}</span>
                <img
                  src={service.img}
                  alt={service.title}
                  className="rounded-lg w-24 h-24 object-cover border border-neutral-200 group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-3">{service.title}</h2>
                <p className="text-neutral-700 mb-4 leading-relaxed">{service.desc}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h3 className="font-semibold text-neutral-800 mb-2">✅ Tính năng nổi bật:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-neutral-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Case Study */}
                <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <span className="font-semibold text-green-700">💰 Giá từ:</span>
                    <p className="text-green-600">{service.pricing}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <span className="font-semibold text-blue-700">📈 Case Study:</span>
                    <p className="text-blue-600">{service.caseStudy}</p>
                  </div>
                </div>

                {/* Service CTA */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="primary" size="md" className="flex-1">
                    <a href="/contact" className="flex items-center justify-center gap-2">
                      📞 Tư vấn ngay
                    </a>
                  </Button>
                  <Button variant="outline" size="md" className="flex-1">
                    <a href="/items" className="flex items-center justify-center gap-2">
                      📊 Xem báo giá
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 text-white text-center py-12">
        <h2 className="text-4xl font-bold mb-4">Sẵn sàng tối ưu logistics cho doanh nghiệp?</h2>
        <p className="text-xl mb-8 opacity-90">
          Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button variant="primary" size="lg" className="px-10 py-5 text-xl font-bold">
            <a href="/contact" className="flex items-center gap-3">
              📞 Gọi ngay: 1900 5555 99
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-800 px-10 py-5 text-xl font-bold">
            <a href="/items" className="flex items-center gap-3">
              📊 Download bảng giá
            </a>
          </Button>
        </div>
        <div className="mt-8 text-sm opacity-75">
          <p>📧 sales@iconiclogistics.vn | 🏢 Tầng 15, Iconic Tower, 4 Tôn Đức Thắng, Q.1, TP.HCM</p>
          <p>⏰ Hỗ trợ 24/7 | 🚀 Tư vấn miễn phí trong 30 phút</p>
        </div>
      </Card>
    </div>
  );
}