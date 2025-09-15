import { Container } from '../components';

const jobs = [
	{
		title: 'Chuyên viên bán cước quốc tế',
		location: 'TP. Hồ Chí Minh / Hà Nội',
		description:
			'Tư vấn, báo giá dịch vụ vận chuyển quốc tế (sea/air), xây dựng mối quan hệ với khách hàng xuất nhập khẩu, phát triển thị trường.',
	},
	{
		title: 'Nhân viên chứng từ xuất nhập khẩu',
		location: 'TP. Hồ Chí Minh',
		description:
			'Chuẩn bị, kiểm tra bộ chứng từ vận chuyển, CO, FYTO, phối hợp với các bộ phận hải quan, hãng tàu, khách hàng.',
	},
	{
		title: 'Chuyên viên khai báo hải quan',
		location: 'TP. Hồ Chí Minh / Hà Nội',
		description:
			'Thực hiện khai báo hải quan điện tử, tư vấn thủ tục xuất nhập khẩu, xử lý các vấn đề phát sinh về thông quan.',
	},
	{
		title: 'Nhân viên chăm sóc khách hàng Forwarder',
		location: 'TP. Hồ Chí Minh',
		description:
			'Hỗ trợ khách hàng doanh nghiệp về dịch vụ vận chuyển, hải quan, CO, FYTO, giải đáp thắc mắc và xử lý sự cố.',
	},
	{
		title: 'Điều phối viên vận tải nội địa',
		location: 'TP. Hồ Chí Minh',
		description:
			'Điều phối xe tải, container, phối hợp giao nhận hàng hóa giữa các kho, cảng, khách hàng nội địa.',
	},
];

export default function Careers() {
	return (
		<div className="min-h-screen bg-neutral-50">
			<section className="py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white">
				<Container>
					<div className="text-center max-w-2xl mx-auto">
						<h1 className="text-5xl md:text-6xl font-black mb-6">
							Tuyển dụng ngành Forwarder
						</h1>
						<p className="text-xl md:text-2xl text-primary-100 mb-4">
							Gia nhập Iconic Logistics – môi trường chuyên nghiệp, năng động, cơ hội phát
							triển trong lĩnh vực giao nhận quốc tế, xuất nhập khẩu, logistics B2B.
						</p>
						<p className="text-lg text-primary-200">
							Chúng tôi tìm kiếm các ứng viên đam mê logistics, có tinh thần học hỏi và
							mong muốn đồng hành cùng doanh nghiệp xuất nhập khẩu Việt Nam vươn ra thế
							gới.
						</p>
					</div>
				</Container>
			</section>
			<section className="py-20">
				<Container>
					<h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">
						Vị trí đang tuyển dụng
					</h2>
					<div className="grid md:grid-cols-2 gap-10">
						{jobs.map((job, idx) => (
							<div
								key={idx}
								className="bg-white rounded-2xl shadow-logistics-card p-8 flex flex-col gap-3"
							>
								<h3 className="text-2xl font-bold text-primary-700 mb-1">
									{job.title}
								</h3>
								<p className="text-neutral-600 mb-1">
									Địa điểm: {job.location}
								</p>
								<p className="text-neutral-700">{job.description}</p>
								<button className="btn-primary mt-4 w-max self-end">
									Ứng tuyển
								</button>
							</div>
						))}
					</div>
				</Container>
			</section>
		</div>
	);
}
