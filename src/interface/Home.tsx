import { Button, Card } from './ui';
import { useState } from 'react';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="p-4 md:p-8 min-h-[80vh] bg-gradient-to-br from-primary-light via-accent to-background-DEFAULT">
      <section className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow-sm animate-fadein tracking-tight">
          Nâng Tầm Chuỗi Cung Ứng Việt Nam
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto font-medium">
          Với hơn 15 năm kinh nghiệm, Iconic Logistics là đối tác tin cậy của 2,500+ doanh nghiệp 
          Việt Nam trong việc tối ưu hóa chuỗi cung ứng. Chúng tôi cung cấp giải pháp logistics 
          toàn diện từ kho bãi thông minh đến vận chuyển xuyên quốc gia.
        </p>
        
        {/* Primary CTA Section */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
          <Button variant="primary" size="lg" className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <a href="/contact" className="flex items-center gap-2">
              📞 Tư vấn miễn phí ngay
            </a>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 shadow-lg">
            <a href="/services" className="block w-full h-full">🚀 Khám phá dịch vụ</a>
          </Button>
        </div>
        {/* Hero Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80"
              alt="Kho bãi hiện đại với hệ thống tự động"
              className="rounded-xl shadow-lg w-full h-48 object-cover border-2 border-primary-light animate-fadein group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
              <p className="text-sm font-semibold text-primary">Kho bãi thông minh 50,000m²</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80"
              alt="Đội xe tải vận chuyển toàn quốc"
              className="rounded-xl shadow-lg w-full h-48 object-cover border-2 border-primary-light animate-fadein group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
              <p className="text-sm font-semibold text-primary">Đội xe 500+ phương tiện</p>
            </div>
          </div>
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
              alt="Trung tâm điều hành logistics 24/7"
              className="rounded-xl shadow-lg w-full h-48 object-cover border-2 border-primary-light animate-fadein group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg">
              <p className="text-sm font-semibold text-primary">Điều hành 24/7</p>
            </div>
          </div>
        </div>
        {/* Why Choose Us - Enhanced with Real Data */}
        <Card className="mt-16 text-left bg-gradient-to-br from-white to-orange-50 border-l-4 border-primary animate-fadein">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-primary mb-4">Tại sao 2,500+ doanh nghiệp tin tưởng Iconic Logistics?</h2>
              <div className="grid md:grid-cols-2 gap-4 text-neutral-700">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h3 className="font-semibold">15 năm kinh nghiệm</h3>
                      <p className="text-sm">Thấu hiểu thị trường logistics Việt Nam, đối tác tin cậy của Samsung, Honda, Vinamilk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-semibold">99.5% đúng hẹn giao hàng</h3>
                      <p className="text-sm">Hệ thống tracking real-time, AI tối ưu lộ trình, đảm bảo giao hàng đúng cam kết</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <h3 className="font-semibold">Giảm 30% chi phí logistics</h3>
                      <p className="text-sm">Tối ưu hóa quy trình, chia sẻ tải trọng, hợp tác đối tác chiến lược</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚛</span>
                    <div>
                      <h3 className="font-semibold">Mạng lưới toàn quốc</h3>
                      <p className="text-sm">63 tỉnh thành, 15 trung tâm phân phối, 500+ đối tác vận chuyển cuối dặm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <h3 className="font-semibold">Bảo hiểm 100% giá trị hàng</h3>
                      <p className="text-sm">Cam kết bồi thường, quy trình khiếu nại 24h, hỗ trợ khách hàng 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏅</span>
                    <div>
                      <h3 className="font-semibold">ISO 9001:2015 & HACCP</h3>
                      <p className="text-sm">Chứng nhận quốc tế, tuân thủ nghiêm ngặt tiêu chuẩn an toàn thực phẩm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-72">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80"
                alt="Đội ngũ chuyên gia logistics Iconic"
                className="rounded-lg shadow-md w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Card>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "2,500+", label: "Doanh nghiệp tin tưởng", icon: "🤝" },
            { number: "15+", label: "Năm kinh nghiệm", icon: "📅" },
            { number: "50,000m²", label: "Diện tích kho bãi", icon: "🏭" },
            { number: "99.5%", label: "Đúng hẹn giao hàng", icon: "⏰" }
          ].map((stat, index) => (
            <Card key={index} className="text-center py-6 bg-white border-t-4 border-primary hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-neutral-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mid-page CTA */}
        <Card className="mt-16 bg-gradient-to-r from-primary to-primary-light text-white text-center py-12">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng tối ưu hóa chuỗi cung ứng của bạn?</h2>
          <p className="text-lg mb-6 opacity-90">Nhận báo giá và tư vấn miễn phí trong 30 phút</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <a href="/contact" className="flex items-center gap-2">
                📞 Gọi ngay: 1900 5555 99
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
              <a href="/items" className="flex items-center gap-2">
                📋 Xem báo giá chi tiết
              </a>
            </Button>
          </div>
        </Card>
        {/* Customer Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">Khách hàng nói về chúng tôi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                company: "Vinamilk",
                person: "Nguyễn Văn Minh - Giám đốc SCM",
                content: "Iconic Logistics đã giúp chúng tôi giảm 25% chi phí vận chuyển và cải thiện đáng kể thời gian giao hàng. Đội ngũ chuyên nghiệp, hệ thống tracking minh bạch.",
                logo: "🥛"
              },
              {
                company: "Samsung Electronics",
                person: "Park Ji-hoon - Logistics Manager", 
                content: "Dịch vụ kho bãi chuyên nghiệp, an toàn tuyệt đối cho sản phẩm điện tử. Iconic hiểu rõ yêu cầu quốc tế và luôn đảm bảo compliance.",
                logo: "📱"
              },
              {
                company: "Honda Vietnam",
                person: "Trần Thị Lan - Supply Chain Director",
                content: "Mạng lưới phân phối rộng khắp, hỗ trợ tốt cho việc giao phụ tùng đến các đại lý. Team hỗ trợ 24/7 rất responsive và professional.",
                logo: "🏍️"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{testimonial.logo}</span>
                  <div>
                    <h3 className="font-bold text-primary">{testimonial.company}</h3>
                    <p className="text-sm text-neutral-600">{testimonial.person}</p>
                  </div>
                </div>
                <p className="text-neutral-700 italic">"{testimonial.content}"</p>
                <div className="flex text-yellow-500 mt-3">
                  {"⭐".repeat(5)}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <Card className="mt-16 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white text-center py-12">
          <h2 className="text-4xl font-bold mb-4">Bắt đầu hành trình tối ưu logistics ngay hôm nay!</h2>
          <p className="text-xl mb-8 opacity-90">Tham gia cùng 2,500+ doanh nghiệp đã tin tưởng Iconic Logistics</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="primary" size="lg" className="px-10 py-5 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
              <a href="/contact" className="flex items-center gap-3">
                🚀 Nhận tư vấn miễn phí
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-neutral-800 px-10 py-5 text-xl font-bold">
              <a href="/services" className="flex items-center gap-3">
                📋 Tìm hiểu dịch vụ
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-10 py-5 text-xl font-bold">
              <a href="/items" className="flex items-center gap-3">
                📊 Xem báo giá
              </a>
            </Button>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📞 Hotline: 1900 5555 99 | 📧 contact@iconiclogistics.vn</p>
            <p>🏢 Tầng 15, Tòa nhà Iconic Tower, 4 Tôn Đức Thắng, Q.1, TP.HCM</p>
          </div>
        </Card>
      </section>
    </div>
  );
}
