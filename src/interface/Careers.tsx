import { Container } from '../components';

const jobs = [
  {
    title: 'Manager Vận hành Logistics',
    location: 'TP. Hồ Chí Minh',
    type: 'Full-time',
    salary: '25-35 triệu',
    desc: 'Quản lý toàn bộ hoạt động vận hành, tối ưu quy trình, đảm bảo chất lượng dịch vụ và hiệu quả chi phí.',
    icon: '👨‍💼',
    requirements: ['Kinh nghiệm 3+ năm logistics', 'Kỹ năng lãnh đạo', 'Tiếng Anh giao tiếp'],
    benefits: ['Lương cạnh tranh', 'Thưởng KPI', 'Bảo hiểm cao cấp'],
  },
  {
    title: 'Chuyên viên Kho bãi',
    location: 'Hà Nội, TP.HCM, Đà Nẵng',
    type: 'Full-time',
    salary: '12-18 triệu',
    desc: 'Quản lý kho hàng, vận hành WMS, kiểm soát chất lượng, đảm bảo an toàn lao động.',
    icon: '📦',
    requirements: ['Tốt nghiệp Logistics/Kinh tế', 'Am hiểu WMS', 'Cẩn thận, chính xác'],
    benefits: ['Đào tạo chuyên nghiệp', 'Cơ hội thăng tiến', 'Môi trường năng động'],
  },
  {
    title: 'Điều phối viên Vận tải',
    location: 'Hà Nội',
    type: 'Full-time',
    salary: '15-22 triệu',
    desc: 'Lập kế hoạch vận chuyển, điều phối tài xế, theo dõi hành trình, xử lý sự cố.',
    icon: '🚚',
    requirements: ['Kinh nghiệm vận tải 2+ năm', 'Kỹ năng giao tiếp tốt', 'Làm việc ca đêm'],
    benefits: ['Thưởng hiệu suất', 'Hỗ trợ xăng xe', 'Team building định kỳ'],
  },
  {
    title: 'Customer Success Specialist',
    location: 'TP.HCM',
    type: 'Full-time',
    salary: '10-15 triệu',
    desc: 'Chăm sóc khách hàng, tư vấn dịch vụ, xử lý khiếu nại, duy trì mối quan hệ lâu dài.',
    icon: '🤝',
    requirements: ['Tiếng Anh tốt', 'Kỹ năng giao tiếp xuất sắc', 'Kinh nghiệm CSKH'],
    benefits: ['Hoa hồng hấp dẫn', 'Đào tạo kỹ năng', 'Phúc lợi toàn diện'],
  },
  {
    title: 'IT System Analyst',
    location: 'TP.HCM',
    type: 'Full-time',
    salary: '20-30 triệu',
    desc: 'Phát triển và duy trì hệ thống TMS, WMS, tích hợp API, tối ưu quy trình số.',
    icon: '💻',
    requirements: ['Kinh nghiệm .NET/Java 3+ năm', 'Hiểu biết về logistics', 'Database SQL'],
    benefits: ['Lương cao', 'Laptop và thiết bị', 'Học hỏi công nghệ mới'],
  },
  {
    title: 'Sales Executive',
    location: 'Hà Nội, TP.HCM',
    type: 'Full-time',
    salary: '8-12 triệu + Hoa hồng',
    desc: 'Tìm kiếm khách hàng mới, duy trì khách hàng cũ, đạt chỉ tiêu doanh số.',
    icon: '💼',
    requirements: ['Kinh nghiệm sales B2B', 'Kỹ năng thuyết phục', 'Làm việc áp lực cao'],
    benefits: ['Hoa hồng không giới hạn', 'Thưởng quý/năm', 'Du lịch công ty'],
  },
];

const benefits = [
  {
    icon: '💰',
    title: 'Lương thưởng hấp dẫn',
    desc: 'Mức lương cạnh tranh + thưởng KPI + thưởng lễ tết',
  },
  {
    icon: '🏥',
    title: 'Bảo hiểm toàn diện',
    desc: 'BHXH full + Bảo hiểm sức khỏe cao cấp cho nhân viên và gia đình',
  },
  {
    icon: '📚',
    title: 'Đào tạo phát triển',
    desc: 'Chương trình đào tạo chuyên nghiệp + Hỗ trợ học tập nâng cao',
  },
  {
    icon: '🌴',
    title: 'Work-Life Balance',
    desc: '5 ngày làm việc/tuần + Du lịch công ty hàng năm + Team building',
  },
  {
    icon: '🚀',
    title: 'Cơ hội thăng tiến',
    desc: 'Đường thăng tiến rõ ràng + Cơ hội làm việc quốc tế',
  },
  {
    icon: '🎯',
    title: 'Môi trường năng động',
    desc: 'Đội ngũ trẻ trung + Công nghệ hiện đại + Văn hóa học hỏi',
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Tuyển Dụng
              <span className="block text-accent-200 text-4xl md:text-5xl mt-2">Nhân Tài</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Gia nhập đội ngũ Iconic Logistics - Nơi tài năng được tỏa sáng và phát triển không
              giới hạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
                📧 Gửi CV ngay
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 transition-colors">
                📄 Xem tất cả vị trí
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Vị Trí Đang Tuyển</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Cơ hội nghề nghiệp hấp dẫn tại Iconic Logistics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-logistics-card hover:shadow-logistics-card border border-gray-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{job.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-500 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-neutral-600 mt-1">
                        <span>📍 {job.location}</span>
                        <span>⏰ {job.type}</span>
                        <span className="text-primary-500 font-semibold">💰 {job.salary}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-600 mb-4 leading-relaxed">{job.desc}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Yêu cầu:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">Quyền lợi:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit: string, idx: number) => (
                        <li key={idx} className="flex items-center text-sm text-neutral-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="btn-primary w-full group-hover:shadow-lg transition-shadow">
                  🚀 Ứng tuyển ngay
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Tại Sao Chọn Iconic Logistics?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Chúng tôi không chỉ cung cấp công việc, mà còn xây dựng sự nghiệp bền vững
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-primary-50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Sẵn sàng gia nhập đội ngũ?</h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Gửi CV của bạn ngay hôm nay và bắt đầu hành trình phát triển sự nghiệp cùng Iconic
              Logistics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-left">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">📧 Gửi CV qua Email</h3>
                <p className="text-neutral-300 text-sm mb-3">Gửi CV và thư xin việc tới</p>
                <p className="text-primary-400 font-semibold">hr@iconiclogistics.vn</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="font-bold mb-2">📞 Liên hệ trực tiếp</h3>
                <p className="text-neutral-300 text-sm mb-3">Hotline tuyển dụng</p>
                <p className="text-primary-400 font-semibold">1900-ICONIC</p>
              </div>
            </div>
            <div className="mt-8">
              <button className="btn-primary mr-4">📄 Ứng tuyển online</button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-neutral-900 transition-colors">
                📋 Tải mẫu CV
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
