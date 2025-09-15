import { Card, Button } from './ui';

const jobs = [
  {
    title: 'Nhân viên kho',
    location: 'Hồ Chí Minh',
    type: 'Full-time',
    desc: 'Quản lý, sắp xếp, kiểm kê hàng hóa trong kho. Ưu tiên ứng viên có kinh nghiệm logistics.',
    icon: '📦',
  },
  {
    title: 'Điều phối vận tải',
    location: 'Hà Nội',
    type: 'Full-time',
    desc: 'Điều phối xe tải, lên kế hoạch giao nhận, xử lý sự cố vận chuyển.',
    icon: '🚚',
  },
  {
    title: 'Nhân viên chăm sóc khách hàng',
    location: 'TP.HCM',
    type: 'Part-time',
    desc: 'Tư vấn, hỗ trợ khách hàng về dịch vụ logistics, giải đáp thắc mắc.',
    icon: '🤝',
  },
];

export default function Careers() {
  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-6 text-center">
        Cơ hội nghề nghiệp
      </h1>
      <ul className="grid md:grid-cols-2 gap-6">
        {jobs.map((j) => (
          <Card
            key={j.title}
            className="flex flex-col gap-2 border-t-4 border-blue-400 animate-fadein"
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl">{j.icon}</span>
              <div>
                <div className="font-bold text-blue-700 text-lg">{j.title}</div>
                <div className="text-neutral-600 text-sm">
                  {j.location} • {j.type}
                </div>
              </div>
            </div>
            <div className="text-neutral-700 text-sm mb-2">{j.desc}</div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 w-max self-end">
              Ứng tuyển
            </Button>
          </Card>
        ))}
      </ul>
      <Card className="mt-8 text-center animate-fadein">
  <div className="text-neutral-700">
          Gửi CV về <b>hr@iconiclogistics.vn</b> hoặc liên hệ hotline <b>0900 000 000</b> để biết
          thêm chi tiết.
        </div>
      </Card>
    </div>
  );
}
