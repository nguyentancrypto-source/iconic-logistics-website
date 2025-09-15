import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './interface/Home';
import About from './interface/About';
import Services from './interface/Services';
import Contact from './interface/Contact';
import Careers from './interface/Careers';
import { ErrorBoundary } from './interface/ErrorBoundary';
import { Container } from './components';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen">
          {/* Header Navigation */}
          <header className="bg-white/95 backdrop-blur-md shadow-logistics-card sticky top-0 z-50 border-b border-orange-100">
            <Container>
              <nav className="flex items-center justify-between py-6">
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">🚚</div>
                  <div>
                    <span className="text-2xl font-black text-transparent bg-clip-text gradient-primary">Iconic</span>
                    <span className="text-2xl font-bold text-gray-700 ml-1">Logistics</span>
                  </div>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="font-semibold text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                    Trang chủ
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link to="/about" className="font-semibold text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                    Về chúng tôi
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link to="/services" className="font-semibold text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                    Dịch vụ
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link to="/contact" className="font-semibold text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                    Liên hệ
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link to="/careers" className="font-semibold text-gray-700 hover:text-orange-500 transition-all duration-300 relative group">
                    Tuyển dụng
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <button className="btn-primary ml-4">
                    📞 Hotline
                  </button>
                </div>
                <div className="md:hidden">
                  <button className="text-gray-700 text-2xl hover:text-orange-500 transition-colors">☰</button>
                </div>
              </nav>
            </Container>
          </header>

          {/* Main Content */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/10"></div>
            <Container>
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-3xl">🚚</div>
                    <div>
                      <span className="text-2xl font-black text-orange-400">Iconic</span>
                      <span className="text-2xl font-bold text-white ml-1">Logistics</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">Đối tác tin cậy cho mọi nhu cầu vận chuyển và logistics tại Việt Nam. Chúng tôi cam kết mang đến dịch vụ chất lượng cao với công nghệ hiện đại.</p>
                  <div className="flex space-x-4">
                    <div className="bg-orange-500 p-2 rounded-lg">📱</div>
                    <div className="bg-orange-500 p-2 rounded-lg">📧</div>
                    <div className="bg-orange-500 p-2 rounded-lg">🌐</div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-orange-400">Dịch vụ</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li><Link to="/services" className="hover:text-orange-400 transition-colors flex items-center">🚛 Vận chuyển hàng hóa</Link></li>
                    <li><Link to="/services" className="hover:text-orange-400 transition-colors flex items-center">🏭 Quản lý kho bãi</Link></li>
                    <li><Link to="/services" className="hover:text-orange-400 transition-colors flex items-center">📍 Tracking & Tracing</Link></li>
                    <li><Link to="/services" className="hover:text-orange-400 transition-colors flex items-center">⚡ Express Delivery</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-6 text-orange-400">Liên hệ</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <div className="bg-orange-500/20 p-2 rounded-lg">📞</div>
                      <div>
                        <div className="font-semibold text-white">Hotline 24/7</div>
                        <div>1900-ICONIC</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-orange-500/20 p-2 rounded-lg">📧</div>
                      <div>
                        <div className="font-semibold text-white">Email</div>
                        <div>contact@iconic.vn</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="bg-orange-500/20 p-2 rounded-lg">📍</div>
                      <div>
                        <div className="font-semibold text-white">Địa chỉ</div>
                        <div>TP.HCM, Việt Nam</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-orange-500/20 mt-12 pt-8 text-center">
                <p className="text-gray-400 text-lg">&copy; 2025 <span className="text-orange-400 font-semibold">Iconic Logistics</span>. Tất cả quyền được bảo lưu.</p>
              </div>
            </Container>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
