import { Card, Button } from './ui';

export default function About() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Về Iconic Logistics
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          15 năm kinh nghiệm xây dựng hệ sinh thái logistics hàng đầu Việt Nam, 
          phục vụ hơn 2,500 doanh nghiệp với cam kết chất lượng và minh bạch tuyệt đối.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
            alt="Trụ sở chính Iconic Logistics tại TP.HCM"
            className="rounded-xl shadow-lg w-full object-cover border-4 border-primary-light"
            loading="lazy"
          />
        </div>
        <div className="space-y-4 text-neutral-700 text-lg">
          <h2 className="text-3xl font-bold text-primary mb-6">Câu chuyện của chúng tôi</h2>
          <p>
            <b>Iconic Logistics</b> được thành lập năm 2009 bởi đội ngũ chuyên gia logistics 
            có nhiều năm kinh nghiệm tại các tập đoàn đa quốc gia. Chúng tôi khởi đầu với 
            sứ mệnh revolutionize ngành logistics Việt Nam bằng công nghệ và dịch vụ chuẩn quốc tế.
          </p>
          <p>
            Từ một kho hàng 2,000m² tại TP.HCM, chúng tôi đã phát triển thành mạng lưới 
            <b> 15 trung tâm phân phối</b> trên toàn quốc với tổng diện tích <b>50,000m²</b>, 
            phục vụ mọi nhu cầu từ B2B đến B2C.
          </p>
          <div className="pt-4">
            <Button variant="primary" size="lg">
              <a href="/contact" className="flex items-center gap-2">
                📞 Tư vấn cho doanh nghiệp của bạn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid md:grid-cols-3 gap-6 mt-16">
        <Card className="text-center p-8 border-t-4 border-primary hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-primary mb-3">Sứ mệnh</h3>
          <p className="text-neutral-600">
            Tối ưu chuỗi cung ứng cho doanh nghiệp Việt Nam bằng giải pháp logistics 
            thông minh, bền vững và chuẩn quốc tế.
          </p>
        </Card>
        <Card className="text-center p-8 border-t-4 border-accent hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold text-primary mb-3">Tầm nhìn</h3>
          <p className="text-neutral-600">
            Trở thành nền tảng logistics số 1 Đông Nam Á, kết nối doanh nghiệp Việt 
            với thị trường toàn cầu.
          </p>
        </Card>
        <Card className="text-center p-8 border-t-4 border-neutral hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-bold text-primary mb-3">Giá trị cốt lõi</h3>
          <p className="text-neutral-600">
            Minh bạch - Chuyên nghiệp - Đổi mới - Bền vững. 
            Đặt khách hàng làm trung tâm trong mọi quyết định.
          </p>
        </Card>
      </div>

      {/* Core Values Detail */}
      <Card className="bg-gradient-to-br from-white to-blue-50 border-l-4 border-primary p-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Cam kết chất lượng</h2>
        <div className="grid md:grid-cols-2 gap-6 text-neutral-700">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="font-semibold mb-1">Chuyên nghiệp tuyệt đối</h3>
                <p className="text-sm">Đội ngũ 500+ nhân viên được đào tạo bài bản, chứng chỉ quốc tế</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🔒</span>
              <div>
                <h3 className="font-semibold mb-1">Minh bạch hoàn toàn</h3>
                <p className="text-sm">Báo cáo chi tiết realtime, không phí phát sinh, giá cố định</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌱</span>
              <div>
                <h3 className="font-semibold mb-1">Phát triển bền vững</h3>
                <p className="text-sm">Green logistics, carbon neutral, hỗ trợ cộng đồng địa phương</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🚀</span>
              <div>
                <h3 className="font-semibold mb-1">Đổi mới không ngừng</h3>
                <p className="text-sm">Đầu tư 15% doanh thu vào R&D, AI, IoT, blockchain</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">❤️</span>
              <div>
                <h3 className="font-semibold mb-1">Khách hàng là trung tâm</h3>
                <p className="text-sm">99.2% khách hàng hài lòng, NPS score 85+, hỗ trợ 24/7</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🤝</span>
              <div>
                <h3 className="font-semibold mb-1">Đối tác tin cậy</h3>
                <p className="text-sm">Hợp tác dài hạn, cùng phát triển, chia sẻ thành công</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Leadership Team */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Đội ngũ lãnh đạo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Nguyễn Minh Tuấn",
              role: "Tổng Giám đốc & Founder",
              experience: "20+ năm kinh nghiệm tại DHL, FedEx",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
              description: "MBA Supply Chain tại NUS Singapore"
            },
            {
              name: "Trần Thị Minh Châu", 
              role: "Giám đốc Vận hành",
              experience: "15+ năm tại Maersk, COSCO",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?auto=format&fit=crop&w=300&q=80",
              description: "Chuyên gia logistics quốc tế"
            },
            {
              name: "Lê Văn Đức",
              role: "Giám đốc Công nghệ",
              experience: "Cựu Software Architect tại Shopee",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80", 
              description: "Chuyên gia AI và Digital Transformation"
            }
          ].map((leader, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary-light"
                loading="lazy"
              />
              <h3 className="font-bold text-lg text-primary">{leader.name}</h3>
              <p className="text-sm font-semibold text-neutral-600 mb-2">{leader.role}</p>
              <p className="text-sm text-neutral-500 mb-2">{leader.experience}</p>
              <p className="text-xs text-neutral-400">{leader.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements & Certifications */}
      <div className="grid lg:grid-cols-2 gap-8 mt-16">
        <Card className="p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🏅 Giải thương & Chứng nhận
          </h2>
          <div className="space-y-4 text-neutral-700">
            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
              <span className="text-2xl">🥇</span>
              <div>
                <p className="font-semibold">Top 10 Logistics Vietnam 2023</p>
                <p className="text-sm text-neutral-500">Vietnam Logistics Association</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-2xl">📜</span>
              <div>
                <p className="font-semibold">ISO 9001:2015 Quality Management</p>
                <p className="text-sm text-neutral-500">Bureau Veritas International</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <span className="text-2xl">🌿</span>
              <div>
                <p className="font-semibold">Green Logistics Certification</p>
                <p className="text-sm text-neutral-500">Ministry of Transport Vietnam</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-semibold">HACCP Food Safety Standard</p>
                <p className="text-sm text-neutral-500">Global Food Safety Initiative</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            🤝 Đối tác chiến lược
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Samsung", logo: "📱", partnership: "Logistics toàn cầu" },
              { name: "Vinamilk", logo: "🥛", partnership: "Cold chain distribution" },
              { name: "Honda", logo: "🏍️", partnership: "Parts distribution" },
              { name: "AEON Mall", logo: "🏢", partnership: "Retail logistics" },
              { name: "Shopee", logo: "🛒", partnership: "E-commerce fulfillment" },
              { name: "VinFast", logo: "🚗", partnership: "Automotive logistics" }
            ].map((partner, index) => (
              <div key={index} className="text-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-2xl mb-1">{partner.logo}</div>
                <p className="font-semibold text-sm">{partner.name}</p>
                <p className="text-xs text-neutral-500">{partner.partnership}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Company Photos */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Iconic Logistics trong thực tế</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
              alt: "Kho bãi hiện đại tự động hóa"
            },
            {
              src: "https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80", 
              alt: "Đội xe tải vận chuyển"
            },
            {
              src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
              alt: "Nhân viên logistics chuyên nghiệp"
            },
            {
              src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
              alt: "Trung tâm điều hành thông minh"
            }
          ].map((photo, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <Card className="mt-16 bg-gradient-to-r from-primary to-primary-light text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Sẵn sàng hợp tác với Iconic Logistics?</h2>
        <p className="text-lg mb-8 opacity-90">
          Hãy để chúng tôi trở thành đối tác tin cậy trong hành trình phát triển của doanh nghiệp bạn
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <a href="/contact" className="flex items-center gap-2">
              📞 Liên hệ tư vấn
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
            <a href="/services" className="flex items-center gap-2">
              🚀 Xem dịch vụ chi tiết
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
            <a href="/careers" className="flex items-center gap-2">
              👥 Cơ hội nghề nghiệp
            </a>
          </Button>
        </div>
        <div className="mt-8 text-sm opacity-75">
          <p>📧 partnership@iconiclogistics.vn | 📞 Hotline: 1900 5555 99</p>
        </div>
      </Card>
    </div>
  );
}
