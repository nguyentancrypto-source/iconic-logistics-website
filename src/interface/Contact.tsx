import { Button, Card } from './ui';

export default function Contact() {
  return (
    <div className="p-4 md:p-8 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2">
        Liên hệ với chúng tôi
      </h1>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
          alt="Bản đồ kho Iconic Logistics"
          className="rounded-xl shadow-md w-full max-w-xs object-cover border-4 border-orange-100"
          loading="lazy"
        />
        <Card className="flex-1 bg-gradient-to-br from-white to-blue-50 border-l-4 border-blue-400 animate-fadein">
          <div className="text-gray-700 text-lg space-y-1">
            <div>
              <b>Địa chỉ:</b> 123 Đường Logistics, Quận 7, TP.HCM
            </div>
            <div>
              <b>Email:</b> contact@iconiclogistics.vn
            </div>
            <div>
              <b>Hotline:</b> 0900 000 000
            </div>
            <div>
              <b>Giờ làm việc:</b> 8:00 - 18:00 (T2-T7)
            </div>
          </div>
        </Card>
      </div>
      <Card className="mt-4 animate-fadein">
        <h2 className="text-lg font-bold text-blue-700 mb-2">Gửi yêu cầu tư vấn</h2>
        <form className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Họ tên" />
          <input className="w-full border rounded px-3 py-2" placeholder="Email" />
          <textarea className="w-full border rounded px-3 py-2" placeholder="Nội dung" rows={4} />
          <Button className="bg-orange-500 text-white hover:bg-orange-600">Gửi</Button>
        </form>
        <div className="text-xs text-gray-500 mt-2">* Chúng tôi sẽ phản hồi trong vòng 24h.</div>
      </Card>
    </div>
  );
}
