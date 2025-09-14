import { Button, Card } from './ui';
import { useState } from 'react';
import { Modal } from './Modal';
import { Table, TableHead, TableRow, TableCell } from './Table';

export default function Home() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-blue-50 to-orange-50 min-h-[80vh]">
      <section className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow-sm animate-fadein">
          Nâng Tầm Chuỗi Cung Ứng Việt Nam
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Iconic Logistics cung cấp giải pháp vận chuyển, kho bãi, quản lý đơn hàng và tracking hiện
          đại, giúp doanh nghiệp tối ưu chi phí, minh bạch quy trình và nâng cao trải nghiệm khách
          hàng.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Kho bãi logistics thực tế"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm object-cover border-4 border-orange-200 animate-fadein"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Xe tải vận chuyển hàng hóa"
            className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm object-cover border-4 border-blue-200 animate-fadein"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <Button variant="primary" onClick={() => setModal(true)} leftIcon={<span>🚀</span>}>
            Mở Modal demo
          </Button>
          <Button
            variant="accent"
            loading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1200);
            }}
            rightIcon={<span>→</span>}
          >
            Nút loading
          </Button>
          <Button variant="outline">
            <a href="/services" className="block w-full h-full">Khám phá dịch vụ</a>
          </Button>
          <Button variant="danger">
            <a href="/items" className="block w-full h-full">Xem hàng hóa</a>
          </Button>
        </div>
        <Modal open={modal} onClose={() => setModal(false)} title="Demo Modal">
          <div className="space-y-2">
            <p>Đây là modal demo chuẩn hóa UI logistics.</p>
            <Button variant="primary" onClick={() => setModal(false)}>
              Đóng
            </Button>
          </div>
        </Modal>
        <Card className="mt-8 text-left bg-gradient-to-br from-white to-orange-50 border-l-4 border-blue-400 animate-fadein">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Tại sao chọn Iconic Logistics?</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Đội ngũ chuyên nghiệp, tận tâm, am hiểu thị trường Việt Nam.</li>
            <li>Hệ thống quản lý kho bãi, vận chuyển hiện đại, realtime tracking.</li>
            <li>Giá cả cạnh tranh, minh bạch, tối ưu cho từng loại hình doanh nghiệp.</li>
            <li>Hỗ trợ tư vấn 24/7, cam kết bảo mật và an toàn hàng hóa.</li>
            <li>Đối tác tin cậy của nhiều doanh nghiệp lớn trong và ngoài nước.</li>
          </ul>
        </Card>
        <Card className="mt-8 text-left">
          <h2 className="text-lg font-bold mb-2 text-primary">Demo Table chuẩn hóa</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Kho HCM</TableCell>
                <TableCell>
                  <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs">Hoạt động</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Kho HN</TableCell>
                <TableCell>
                  <span className="inline-block px-2 py-1 rounded bg-gray-200 text-gray-600 text-xs">Bảo trì</span>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </Card>
      </section>
    </div>
  );
}
