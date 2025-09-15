import { Container } from '../components';
import { useState } from 'react';
import { Modal } from './Modal';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="min-h-screen">
      {/* Stunning Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 border border-orange-400/30 rounded-full animate-spin-slow"></div>
            <div className="absolute top-40 right-20 w-72 h-72 border-2 border-blue-400/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-2xl animate-float"></div>
          </div>
          
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur-2xl opacity-30 animate-float-slow"></div>
          <div className="absolute top-1/3 right-10 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-float-reverse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-2xl opacity-25 animate-bounce-gentle"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>
        
        {/* Main content */}
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-center lg:text-left space-y-8">
              {/* Subtitle badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-orange-300 font-medium animate-fadeInUp">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                Logistics Technology Leader
              </div>
              
              {/* Main heading */}
              <h1 className="text-6xl lg:text-8xl font-black leading-tight animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                <span className="block text-white mb-2">Future of</span>
                <span className="block bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent animate-gradient-x">
                  Logistics
                </span>
                <span className="block text-blue-300 text-5xl lg:text-6xl mt-4">Made Simple</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                Revolutionize your supply chain with AI-powered logistics solutions. 
                <span className="text-orange-300 font-medium"> Real-time tracking</span>, 
                <span className="text-blue-300 font-medium"> smart warehousing</span>, and 
                <span className="text-yellow-300 font-medium"> predictive analytics</span> - all in one platform.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    <span className="text-xl">🚀</span>
                    Start Your Journey
                  </span>
                </button>
                <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <span className="text-xl">💬</span>
                    Free Consultation
                  </span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">1000+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
            
            {/* Right side - Hero visual */}
            <div className="relative animate-fadeInRight" style={{animationDelay: '0.4s'}}>
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                {/* Dashboard mockup */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg">Live Dashboard</h3>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Active Shipments</span>
                      <span className="text-orange-400 font-bold">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">On-time Delivery</span>
                      <span className="text-green-400 font-bold">98.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Cost Saved</span>
                      <span className="text-blue-400 font-bold">$2.4M</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4">
                    <div className="text-white font-semibold mb-2">🚛 Live Tracking</div>
                    <div className="text-gray-300 text-sm">15 vehicles in transit</div>
                    <div className="mt-2 flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-2 h-8 bg-orange-400 rounded animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl blur-xl opacity-60 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-40 animate-float-reverse"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-orange-500">Iconic</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced technology meets logistics expertise to deliver unparalleled results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl shadow-logistics-card p-8">
              <div className="text-2xl font-bold text-orange-500">500+</div>
              <div className="text-sm text-gray-600">Khách hàng</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-logistics-card p-8">
              <div className="text-2xl font-bold text-orange-500">24/7</div>
              <div className="text-sm text-gray-600">Hỗ trợ</div>
            </div>
            <div className="text-center bg-white rounded-2xl shadow-logistics-card p-8">
              <div className="text-2xl font-bold text-orange-500">99%</div>
              <div className="text-sm text-gray-600">Hài lòng</div>
            </div>
          </div>

          <div className="mt-16 animate-fadeInUp">
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
