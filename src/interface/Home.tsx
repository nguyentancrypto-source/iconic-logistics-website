import { Container } from '../components';
import { useState } from 'react';
import { Modal } from './Modal';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce-gentle" style={{animationDelay: '4s'}}></div>
        </div>
        
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="text-center lg:text-left animate-fadeInLeft">
              <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-transparent bg-clip-text gradient-primary">Nâng Tầm</span>
                <br />
                <span className="text-gray-800">Chuỗi Cung Ứng</span>
                <br />
                <span className="text-orange-500">Việt Nam</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Iconic Logistics - Đối tác tin cậy với giải pháp <strong>vận chuyển thông minh</strong>, 
                <strong> kho bãi hiện đại</strong> và <strong>tracking realtime</strong> giúp doanh nghiệp tối ưu chi phí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn-primary text-lg px-8 py-4">
                  🚀 Bắt đầu ngay
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  📞 Tư vấn miễn phí
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-8 text-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">500+</div>
                  <div className="text-sm">Khách hàng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-sm">Hỗ trợ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">99%</div>
                  <div className="text-sm">Hài lòng</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInUp">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80"
                  alt="Kho logistics hiện đại"
                  className="w-full h-96 object-cover rounded-2xl shadow-logistics-card"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-logistics-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl">🚚</div>
                    <div>
                      <div className="font-bold text-gray-800">Live Tracking</div>
                      <div className="text-sm text-gray-600">Theo dõi realtime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Giải pháp logistics toàn diện cho mọi nhu cầu doanh nghiệp</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🚛</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vận chuyển hàng hóa</h3>
              <p className="text-gray-600 leading-relaxed">Mạng lưới vận chuyển toàn quốc với đội ngũ tài xế chuyên nghiệp và phương tiện hiện đại</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🏭</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quản lý kho bãi</h3>
              <p className="text-gray-600 leading-relaxed">Hệ thống kho bãi hiện đại với công nghệ WMS tiên tiến, đảm bảo an toàn hàng hóa</p>
            </div>
            
            <div className="card-professional text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Tracking Realtime</h3>
              <p className="text-gray-600 leading-relaxed">Theo dõi hành trình hàng hóa realtime qua ứng dụng di động và web portal</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Tại sao chọn Iconic Logistics?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Đội ngũ chuyên nghiệp</h3>
                    <p className="text-gray-600">Tận tâm, am hiểu thị trường Việt Nam với kinh nghiệm hơn 10 năm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Công nghệ hiện đại</h3>
                    <p className="text-gray-600">Hệ thống quản lý kho bãi, vận chuyển và tracking realtime</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Giá cả cạnh tranh</h3>
                    <p className="text-gray-600">Minh bạch, tối ưu cho từng loại hình doanh nghiệp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fadeInUp">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Kho bãi logistics hiện đại"
                className="w-full h-80 object-cover rounded-2xl shadow-logistics-card"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Demo Components Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Demo UI Components</h2>
            <p className="text-gray-600">Showcase các components đã chuẩn hóa</p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn-primary" onClick={() => setModal(true)}>
                🚀 Mở Modal demo
              </button>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}
                disabled={loading}
              >
                {loading ? '⏳ Đang tải...' : '⚡ Nút loading'}
              </button>
              <button className="btn-secondary">
                📋 Xem bảng giá
              </button>
            </div>
            
            <Modal open={modal} onClose={() => setModal(false)} title="Demo Modal Professional">
              <div className="space-y-4">
                <p className="text-gray-600">Đây là modal demo với thiết kế logistics chuyên nghiệp.</p>
                <div className="flex gap-3">
                  <button className="btn-primary" onClick={() => setModal(false)}>
                    Xác nhận
                  </button>
                  <button className="btn-secondary" onClick={() => setModal(false)}>
                    Hủy
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </Container>
      </section>
    </div>
  );
}
