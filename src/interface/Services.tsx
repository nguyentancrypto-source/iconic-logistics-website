import { Container } from '../components';

const services = [
  {
    title: 'Vận chuyển hàng hóa',
    desc: 'Mạng lưới vận chuyển toàn quốc với đội ngũ driver chuyên nghiệp, đảm bảo giao hàng đúng hẹn với chi phí tối ưu.',
    icon: '🚛',
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
    features: ['Giao hàng toàn quốc', 'Theo dõi realtime', 'Bảo hiểm hàng hóa', 'Giao hàng COD'],
  },
  {
    title: 'Quản lý kho bãi',
    desc: 'Hệ thống kho bãi hiện đại với công nghệ WMS tiên tiến, đảm bảo an toàn và quản lý tồn kho hiệu quả.',
    icon: '🏭',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    features: ['WMS System', 'Kiểm soát nhiệt độ', 'Bảo mật 24/7', 'Báo cáo tự động'],
  },
  {
    title: 'Tracking & Tracing',
    desc: 'Theo dõi hành trình hàng hóa realtime qua ứng dụng di động và web portal với độ chính xác cao.',
    icon: '📱',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    features: ['GPS Tracking', 'Thông báo realtime', 'Mobile App', 'API Integration'],
  },
  {
    title: 'Express Delivery',
    desc: 'Dịch vụ giao hàng nhanh trong ngày với mức độ ưu tiên cao, phù hợp cho hàng hóa khẩn cấp.',
    icon: '⚡',
    img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80',
    features: ['Giao trong 4h', 'Ưu tiên cao', 'Đóng gói chuyên nghiệp', 'Hỗ trợ 24/7'],
  },
  {
    title: 'Logistics Consulting',
    desc: 'Tư vấn tối ưu hóa chuỗi cung ứng và quy trình logistics cho doanh nghiệp với đội ngũ chuyên gia.',
    icon: '🤝',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
    features: ['Phân tích chi phí', 'Tối ưu quy trình', 'Đào tạo nhân sự', 'Báo cáo chi tiết'],
  },
  {
    title: 'Cold Chain',
    desc: 'Vận chuyển hàng hóa lạnh với công nghệ kiểm soát nhiệt độ tiên tiến, đảm bảo chất lượng sản phẩm.',
    icon: '❄️',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
    features: ['Kiểm soát nhiệt độ', 'Giám sát 24/7', 'Báo cáo nhiệt độ', 'Chứng nhận chất lượng'],
  },
];

export function Services() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Dịch Vụ Logistics
              <span className="block text-orange-200 text-4xl md:text-5xl mt-2">Chuyên Nghiệp</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Giải pháp logistics toàn diện từ vận chuyển, kho bãi đến tư vấn tối ưu hóa chuỗi cung
              ứng
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Iconic Logistics cung cấp đầy đủ các dịch vụ logistics chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-logistics-card hover:shadow-logistics-card border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="btn-primary w-full group-hover:shadow-lg transition-shadow">
                    Tìm hiểu thêm
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Sẵn sàng hợp tác cùng chúng tôi?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất cho doanh nghiệp của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                📞 Gọi ngay: 1900-ICONIC
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                📧 Gửi yêu cầu tư vấn
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Services;
