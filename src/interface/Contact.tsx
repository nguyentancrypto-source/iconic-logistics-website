export default function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Liên hệ</h1>
      <p className="text-gray-600">
        Email: contact@iconic-logistics.example — Hotline: 0900 000 000
      </p>
      <form className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Họ tên" />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <textarea className="w-full border rounded px-3 py-2" placeholder="Nội dung" rows={4} />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          type="button"
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
