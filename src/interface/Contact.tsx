import { Container } from '../components';

const contactInfo = [
	{
		icon: '🏢',
		title: 'Văn phòng chính',
		details: ['123 Đường Forwarder, Quận 7', 'TP. Hồ Chí Minh, Việt Nam'],
	},
	{
		icon: '📞',
		title: 'Hotline tư vấn cước',
		details: ['1900-ICONIC (1900-426642)', '028-3456-7890'],
	},
	{
		icon: '📧',
		title: 'Email hỗ trợ',
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
		address: '123 Đường Forwarder, Quận 7',
		phone: '028-3456-7890',
		email: 'hcm@iconiclogistics.vn',
	},
	{
		city: 'Hà Nội',
		address: '456 Phố Xuất Nhập Khẩu, Quận Cầu Giấy',
		phone: '024-3654-0987',
		email: 'hn@iconiclogistics.vn',
	},
	{
		city: 'Đà Nẵng',
		address: '789 Đường Hải Quan, Quận Hải Châu',
		phone: '0236-3789-0123',
		email: 'dn@iconiclogistics.vn',
	},
];

export default function Contact() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white overflow-hidden">
				<div className="absolute inset-0 bg-black/20"></div>
				<Container>
					<div className="relative z-10 text-center">
						<h1 className="text-5xl md:text-6xl font-black mb-6">
							Liên Hệ Tư Vấn Forwarder
							<span className="block text-accent-200 text-4xl md:text-5xl mt-2">
								Bán cước quốc tế, hải quan, CO, FYTO
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
							Đội ngũ chuyên gia Iconic Logistics sẵn sàng tư vấn, báo giá và hỗ trợ
							doanh nghiệp xuất nhập khẩu 24/7.
						</p>
					</div>
				</Container>
			</section>

			<section className="py-20 bg-neutral-50">
				<Container>
					<div className="grid md:grid-cols-2 gap-12 mb-16">
						<div>
							<h2 className="text-3xl font-bold text-neutral-900 mb-6">
								Thông tin liên hệ
							</h2>
							<div className="space-y-6">
								{contactInfo.map((info, idx) => (
									<div key={idx} className="flex items-start gap-4">
										<div className="text-3xl">{info.icon}</div>
										<div>
											<h3 className="text-xl font-bold text-neutral-900 mb-1">
												{info.title}
											</h3>
											{info.details.map((d, i) => (
												<p key={i} className="text-neutral-600">
													{d}
												</p>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
						<div>
							<h2 className="text-3xl font-bold text-neutral-900 mb-6">
								Gửi yêu cầu tư vấn
							</h2>
							<form className="space-y-4">
								<input
									type="text"
									placeholder="Họ tên doanh nghiệp"
									className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
								/>
								<input
									type="email"
									placeholder="Email liên hệ"
									className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
								/>
								<input
									type="text"
									placeholder="Số điện thoại"
									className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
								/>
								<textarea
									placeholder="Nội dung yêu cầu (ví dụ: báo giá cước, tư vấn hải quan, CO, FYTO...)"
									className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
									rows={4}
								></textarea>
								<button
									type="submit"
									className="btn-primary w-full"
								>
									Gửi yêu cầu
								</button>
							</form>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{offices.map((office, idx) => (
							<div
								key={idx}
								className="bg-white rounded-2xl shadow-logistics-card p-6"
							>
								<h3 className="text-xl font-bold text-neutral-900 mb-2">
									{office.city}
								</h3>
								<p className="text-neutral-600 mb-1">{office.address}</p>
								<p className="text-neutral-600 mb-1">📞 {office.phone}</p>
								<p className="text-neutral-600 mb-1">📧 {office.email}</p>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
}
