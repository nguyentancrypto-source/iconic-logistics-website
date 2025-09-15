import { Container } from '../components';

const contactInfo = [
  {
    icon: '🏢',
    title: 'Trụ sở chính',
    details: ['123 Đường Logistics, Quận 7', 'TP. Hồ Chí Minh, Việt Nam'],
  },
  {
    icon: '📞',
    title: 'Hotline 24/7',
    details: ['1900-ICONIC (1900-426642)', '028-3456-7890'],
  },
  {
    icon: '📧',
    title: 'Email',
    details: ['contact@iconiclogistics.vn', 'support@iconiclogistics.vn'],
  },
  {
    icon: '⏰',
    title: 'Giờ làm việc',
    details: ['Thứ 2 - Thứ 6: 8:00 - 18:00', 'Thứ 7: 8:00 - 12:00'],
  },
];

const offices = [
  {
    city: 'TP. Hồ Chí Minh',
    address: '123 Đường Logistics, Quận 7',
    phone: '028-3456-7890',
    email: 'hcm@iconiclogistics.vn',
  },
  {
    city: 'Hà Nội',
    address: '456 Phố Vận Tải, Quận Cầu Giấy',
    phone: '024-3654-0987',
    email: 'hn@iconiclogistics.vn',
  },
  {
    city: 'Đà Nẵng',
    address: '789 Đường Hàng Hải, Quận Hải Châu',
    phone: '0236-3789-0123',
    email: 'dn@iconiclogistics.vn',
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Liên Hệ
              <span className="block text-orange-200 text-4xl md:text-5xl mt-2">Với Chúng Tôi</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Đội ngũ chuyên gia Iconic Logistics sẵn sàng tư vấn giải pháp logistics tối ưu cho
              doanh nghiệp của bạn
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-logistics-card hover:shadow-logistics-card border border-gray-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-logistics-card">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Gửi yêu cầu tư vấn</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Họ và tên *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Số điện thoại *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Công ty / Tổ chức"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors">
                  <option>Chọn dịch vụ quan tâm</option>
                  <option>Vận chuyển hàng hóa</option>
                  <option>Quản lý kho bãi</option>
                  <option>Express Delivery</option>
                  <option>Cold Chain</option>
                  <option>Logistics Consulting</option>
                </select>
                <textarea
                  placeholder="Mô tả chi tiết yêu cầu *"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                ></textarea>
                <button className="btn-primary w-full">📤 Gửi yêu cầu tư vấn</button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                * Chúng tôi sẽ liên hệ lại trong vòng 2 giờ làm việc
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-logistics-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Vị trí trụ sở</h3>
                <div className="aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Google Maps</p>
                    <p className="text-sm">123 Đường Logistics, Quận 7, TP.HCM</p>
                  </div>
                </div>
                <button className="btn-secondary w-full">🧭 Xem chỉ đường</button>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-logistics-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Văn phòng đại diện</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <p className="text-sm text-gray-600">📞 {office.phone}</p>
                      <p className="text-sm text-gray-600">📧 {office.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Cần hỗ trợ khẩn cấp?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Hotline 24/7 của chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:1900426642" className="btn-primary">
                📞 Gọi ngay: 1900-ICONIC
              </a>
              <a
                href="mailto:contact@iconiclogistics.vn"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                📧 Gửi email
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
