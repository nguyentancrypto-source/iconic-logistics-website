import { Container } from '../components';

const services = [
	{
		title: 'Bán cước vận tải quốc tế',
		desc: 'Cung cấp báo giá cước vận chuyển đường biển, đường hàng không đi toàn cầu. Đối tác hãng tàu, hãng bay lớn, giá cạnh tranh, lịch trình linh hoạt.',
		icon: '🌏',
		img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
		features: ['FCL/LCL, Air/Sea', 'Báo giá nhanh', 'Theo dõi lô hàng', 'Tư vấn tuyến tối ưu'],
	},
	{
		title: 'Thủ tục hải quan',
		desc: 'Dịch vụ khai báo hải quan xuất nhập khẩu, tư vấn HS code, chuẩn bị chứng từ, xử lý kiểm tra chuyên ngành, thông quan nhanh.',
		icon: '🛃',
		img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
		features: ['Khai báo điện tử', 'Tư vấn HS code', 'Thông quan nhanh', 'Xử lý kiểm tra chuyên ngành'],
	},
	{
		title: 'Vận tải nội địa',
		desc: 'Tổ chức vận chuyển hàng hóa nội địa bằng xe tải, container, đường sắt, giao nhận tận nơi, kết nối đa phương thức.',
		icon: '🚚',
		img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80',
		features: ['Xe tải, container', 'Giao nhận tận nơi', 'Kết nối đa phương thức', 'Theo dõi realtime'],
	},
	{
		title: 'Kiểm dịch (Fumigation)',
		desc: 'Cung cấp dịch vụ hun trùng, khử trùng, kiểm dịch thực vật/xuất khẩu, cấp chứng thư nhanh, hỗ trợ lấy mẫu tận nơi.',
		icon: '🦠',
		img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80',
		features: ['Hun trùng, khử trùng', 'Chứng thư kiểm dịch', 'Lấy mẫu tận nơi', 'Tư vấn miễn phí'],
	},
	{
		title: 'CO (Chứng nhận xuất xứ)',
		desc: 'Tư vấn, chuẩn bị hồ sơ và làm thủ tục xin cấp CO các loại (Form A, B, E, D, VK, CPTPP...) cho hàng xuất khẩu.',
		icon: '📄',
		img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80',
		features: ['Tư vấn hồ sơ', 'Xử lý nhanh', 'Đa dạng form CO', 'Hỗ trợ tận nơi'],
	},
	{
		title: 'FYTO (Phytosanitary)',
		desc: 'Dịch vụ xin giấy chứng nhận kiểm dịch thực vật (FYTO) cho hàng xuất khẩu, hỗ trợ lấy mẫu, xử lý hồ sơ nhanh.',
		icon: '🌱',
		img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
		features: ['Xin giấy FYTO', 'Lấy mẫu tận nơi', 'Tư vấn miễn phí', 'Xử lý hồ sơ nhanh'],
	},
];

export function Services() {
	return (
		<div className="min-h-screen">
			<section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white overflow-hidden">
				<div className="absolute inset-0 bg-black/20"></div>
				<Container>
					<div className="relative z-10 text-center">
						<h1 className="text-5xl md:text-6xl font-black mb-6 text-white">
							Dịch Vụ Forwarder
							<span className="block text-accent-200 text-4xl md:text-5xl mt-2">
								Chuyên Nghiệp - Nhanh Chóng
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
							Giải pháp xuất nhập khẩu trọn gói: bán cước quốc tế, hải quan, vận tải nội địa, kiểm dịch, CO, FYTO cho doanh
							nghiệp Việt Nam.
						</p>
					</div>
				</Container>
			</section>

			<section className="py-20 bg-neutral-50">
				<Container>
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-neutral-900 mb-4">Dịch Vụ Của Chúng Tôi</h2>
						<p className="text-xl text-neutral-600 max-w-2xl mx-auto">
							Iconic Logistics cung cấp đầy đủ dịch vụ forwarder chuyên nghiệp, hỗ trợ doanh nghiệp xuất nhập khẩu tối ưu
							chi phí và thời gian.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="group bg-white rounded-2xl shadow-logistics-card hover:shadow-logistics-card-hover border border-neutral-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
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
									<h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-500 transition-colors">
										{service.title}
									</h3>
									<p className="text-neutral-600 mb-4 leading-relaxed">{service.desc}</p>

									<div className="space-y-2 mb-6">
										{service.features.map((feature: string, idx: number) => (
											<div key={idx} className="flex items-center text-sm text-neutral-700">
												<div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
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

			<section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-600 text-white">
				<Container>
					<div className="text-center">
						<h2 className="text-4xl font-bold mb-6">Sẵn sàng hợp tác cùng chúng tôi?</h2>
						<p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
							Liên hệ ngay để được tư vấn miễn phí và nhận báo giá tốt nhất cho doanh nghiệp của bạn
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="bg-white text-primary-500 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
								📞 Gọi ngay: 1900-ICONIC
							</button>
							<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-500 transition-colors">
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
