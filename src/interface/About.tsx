import { Container } from '../components';

const stats = [
  { number: '500+', label: 'Khách hàng tin tưởng' },
  { number: '50+', label: 'Tỉnh thành phủ sóng' },
  { number: '10+', label: 'Năm kinh nghiệm' },
  { number: '99.8%', label: 'Độ hài lòng khách hàng' }
];

const values = [
  {
    icon: '🎯',
    title: 'Chuyên nghiệp',
    desc: 'Đội ngũ giàu kinh nghiệm, quy trình chuẩn hóa, cam kết chất lượng dịch vụ cao nhất'
  },
  {
    icon: '💡',
    title: 'Đổi mới',
    desc: 'Ứng dụng công nghệ tiên tiến, phát triển giải pháp logistics thông minh và hiệu quả'
  },
  {
    icon: '🤝',
    title: 'Tận tâm',
    desc: 'Đặt lợi ích khách hàng lên hàng đầu, hỗ trợ 24/7, tư vấn giải pháp tối ưu'
  },
  {
    icon: '🌱',
    title: 'Bền vững',
    desc: 'Phát triển bền vững, trách nhiệm với môi trường và cộng đồng xã hội'
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  Về Chúng Tôi
                  <span className="block text-orange-200 text-4xl md:text-5xl mt-2">
                    Iconic Logistics
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-8">
                  Đơn vị tiên phong trong lĩnh vực logistics tại Việt Nam với hơn 10 năm kinh nghiệm, 
                  cung cấp giải pháp toàn diện từ vận chuyển đến quản lý chuỗi cung ứng.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors">
                    🤝 Hợp tác cùng chúng tôi
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80"
                  alt="Đội ngũ Iconic Logistics"
                  className="rounded-2xl shadow-2xl w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">10+</div>
                    <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-logistics-card hover:shadow-logistics-card border border-gray-100">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
                <p className="text-gray-600 leading-relaxed">
                  Tối ưu hóa chuỗi cung ứng, nâng cao hiệu suất vận hành và trải nghiệm khách hàng 
                  cho doanh nghiệp Việt Nam thông qua các giải pháp logistics thông minh và đáng tin cậy.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-logistics-card hover:shadow-logistics-card border border-gray-100">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Trở thành đối tác logistics tin cậy hàng đầu khu vực Đông Nam Á, 
                  dẫn dắt xu hướng chuyển đổi số trong ngành logistics Việt Nam.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1553013442-a96fb2c64e48?auto=format&fit=crop&w=600&q=80"
                alt="Kho bãi hiện đại"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80"
                alt="Đội xe vận chuyển"
                className="rounded-2xl shadow-xl w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của Iconic Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Trở thành đối tác của chúng tôi</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Cùng Iconic Logistics xây dựng chuỗi cung ứng hiệu quả và phát triển bền vững
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                🤝 Hợp tác ngay
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                📋 Tải hồ sơ năng lực
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
