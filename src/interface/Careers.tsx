export default function Careers() {
  const jobs = [
    { title: 'Nhân viên kho', location: 'HCM', type: 'Full-time' },
    { title: 'Điều phối vận tải', location: 'HN', type: 'Full-time' },
  ];
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tuyển dụng</h1>
      <ul className="space-y-3">
        {jobs.map((j) => (
          <li key={j.title} className="border rounded p-4 flex justify-between">
            <div>
              <div className="font-semibold">{j.title}</div>
              <div className="text-gray-600">
                {j.location} • {j.type}
              </div>
            </div>
            <button className="px-3 py-1 border rounded hover:bg-gray-50">Ứng tuyển</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
