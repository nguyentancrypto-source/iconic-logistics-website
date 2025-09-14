import { Button, Card } from './ui';

export default function Contact() {
  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Liên hệ với chúng tôi
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ 24/7. 
          Chúng tôi cam kết phản hồi trong vòng 30 phút và cung cấp báo giá chi tiết trong 24h.
        </p>
      </div>

      {/* Quick Contact CTAs */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center p-6 border-t-4 border-primary hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="font-bold text-lg text-primary mb-2">Gọi ngay</h3>
          <p className="text-2xl font-bold text-primary mb-2">1900 5555 99</p>
          <p className="text-sm text-neutral-600 mb-4">Miễn phí từ điện thoại bàn</p>
          <Button variant="primary" className="w-full">
            <a href="tel:+84190055555599">Gọi ngay</a>
          </Button>
        </Card>
        
        <Card className="text-center p-6 border-t-4 border-accent hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="font-bold text-lg text-primary mb-2">Zalo/WhatsApp</h3>
          <p className="text-lg font-semibold text-primary mb-2">0935 123 456</p>
          <p className="text-sm text-neutral-600 mb-4">Tư vấn trực tuyến 24/7</p>
          <Button variant="outline" className="w-full">
            <a href="https://zalo.me/0935123456">Chat ngay</a>
          </Button>
        </Card>
        
        <Card className="text-center p-6 border-t-4 border-neutral hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="font-bold text-lg text-primary mb-2">Email</h3>
          <p className="text-sm font-semibold text-primary mb-2">sales@iconiclogistics.vn</p>
          <p className="text-sm text-neutral-600 mb-4">Phản hồi trong 30 phút</p>
          <Button variant="outline" className="w-full">
            <a href="mailto:sales@iconiclogistics.vn">Gửi email</a>
          </Button>
        </Card>
      </div>

      {/* Main Contact Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              🏢 Thông tin liên hệ
            </h2>
            
            <div className="space-y-6">
              {/* Head Office */}
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-bold text-lg mb-2">Trụ sở chính - TP. Hồ Chí Minh</h3>
                <div className="space-y-2 text-neutral-700">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>Tầng 15, Tòa nhà Iconic Tower, 4 Tôn Đức Thắng, Quận 1, TP.HCM</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>(028) 3910 5555</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span>hcm@iconiclogistics.vn</span>
                  </p>
                </div>
              </div>

              {/* Branch Office */}
              <div className="border-l-4 border-accent pl-4">
                <h3 className="font-bold text-lg mb-2">Chi nhánh Hà Nội</h3>
                <div className="space-y-2 text-neutral-700">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>Tầng 8, Tòa nhà Keangnam, Phạm Hùng, Nam Từ Liêm, Hà Nội</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>(024) 3568 7777</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span>hanoi@iconiclogistics.vn</span>
                  </p>
                </div>
              </div>

              {/* Branch Office 2 */}
              <div className="border-l-4 border-neutral pl-4">
                <h3 className="font-bold text-lg mb-2">Chi nhánh Đà Nẵng</h3>
                <div className="space-y-2 text-neutral-700">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    <span>Lô B1.1, Khu đô thị Đa Phước, Hải Châu, Đà Nẵng</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <span>(0236) 3750 888</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>📧</span>
                    <span>danang@iconiclogistics.vn</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Business Hours */}
          <Card className="p-6">
            <h3 className="font-bold text-lg text-primary mb-4 flex items-center gap-2">
              ⏰ Giờ làm việc
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Văn phòng</p>
                <p>T2 - T6: 8:00 - 18:00</p>
                <p>T7: 8:00 - 12:00</p>
                <p>CN: Nghỉ</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Hỗ trợ khẩn cấp</p>
                <p className="text-primary font-semibold">24/7 - Cả tuần</p>
                <p>Hotline: 1900 5555 99</p>
                <p>Emergency: 0935 123 456</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              📝 Gửi yêu cầu tư vấn
            </h2>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Họ và tên *
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                    placeholder="Nguyễn Văn A"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Công ty
                  </label>
                  <input 
                    type="text"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                    placeholder="Tên công ty"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                    placeholder="email@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    Số điện thoại *
                  </label>
                  <input 
                    type="tel"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                    placeholder="0935 123 456"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Dịch vụ quan tâm
                </label>
                <select className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                  <option value="">Chọn dịch vụ</option>
                  <option value="warehouse">Quản lý kho bãi</option>
                  <option value="transport">Vận chuyển</option>
                  <option value="tracking">Tracking đơn hàng</option>
                  <option value="consulting">Tư vấn logistics</option>
                  <option value="crossborder">Xuất nhập khẩu</option>
                  <option value="ecommerce">E-commerce fulfillment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Nội dung chi tiết *
                </label>
                <textarea 
                  className="w-full border border-neutral-300 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" 
                  placeholder="Mô tả chi tiết nhu cầu của bạn: loại hàng hóa, số lượng, tần suất, địa điểm..."
                  rows={5}
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="agree" className="rounded" />
                <label htmlFor="agree" className="text-sm text-neutral-600">
                  Tôi đồng ý với <a href="#" className="text-primary underline">điều khoản sử dụng</a> và <a href="#" className="text-primary underline">chính sách bảo mật</a>
                </label>
              </div>

              <Button variant="primary" size="lg" className="w-full text-lg font-semibold py-4">
                🚀 Gửi yêu cầu tư vấn ngay
              </Button>
            </form>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">
                <span className="font-semibold">💡 Cam kết:</span> Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút 
                và cung cấp báo giá chi tiết trong 24h làm việc.
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Map & Directions */}
      <Card className="p-8">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">
          📍 Bản đồ & Hướng dẫn đi lại
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
              alt="Bản đồ văn phòng Iconic Logistics"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg text-center">
                <h3 className="font-bold text-primary mb-2">Trụ sở chính HCM</h3>
                <p className="text-sm">Tòa nhà Iconic Tower</p>
                <p className="text-sm">4 Tôn Đức Thắng, Q.1</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    🗺️ Mở Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Directions */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">🚗 Hướng dẫn đi lại đến trụ sở chính</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">🚇</span>
                <div>
                  <p className="font-semibold">Tàu điện ngầm (Metro)</p>
                  <p className="text-neutral-600">Ga Bến Thành (Line 1) → Đi bộ 5 phút</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">🚌</span>
                <div>
                  <p className="font-semibold">Xe buýt</p>
                  <p className="text-neutral-600">Tuyến 03, 19, 42 → Dừng Bến Bạch Đằng</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">🚗</span>
                <div>
                  <p className="font-semibold">Ô tô riêng</p>
                  <p className="text-neutral-600">Bãi đỗ xe tại tầng hầm B1-B3 (miễn phí 2h đầu)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-primary font-semibold">🏍️</span>
                <div>
                  <p className="font-semibold">Xe máy/Grab Bike</p>
                  <p className="text-neutral-600">Bãi gửi xe tại tầng trệt (5,000đ/ngày)</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">📋 Lưu ý khi đến thăm</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Đăng ký tại quầy lễ tân tầng trệt</li>
                <li>• Mang theo CMND/CCCD hoặc passport</li>
                <li>• Liên hệ trước 30 phút: (028) 3910 5555</li>
                <li>• Văn phòng làm việc: T2-T6 (8:00-18:00)</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom CTA */}
      <Card className="bg-gradient-to-r from-primary to-primary-light text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">Cần hỗ trợ ngay lập tức?</h2>
        <p className="text-lg mb-8 opacity-90">
          Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            <a href="tel:+84190055555599" className="flex items-center gap-2">
              📞 Gọi Hotline: 1900 5555 99
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
            <a href="https://zalo.me/0935123456" className="flex items-center gap-2">
              💬 Chat Zalo: 0935 123 456
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
            <a href="mailto:sales@iconiclogistics.vn" className="flex items-center gap-2">
              📧 Email ngay
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}
