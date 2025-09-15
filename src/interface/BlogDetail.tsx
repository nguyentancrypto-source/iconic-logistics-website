import { useParams, Link } from 'react-router-dom';
import { Container } from '../components';

// Mock article data - in real app, fetch by ID
const getArticleById = (id: string) => {
  const articles = [
    {
      id: 1,
      title: 'Xu hướng công nghệ Logistics 2025: AI và IoT thay đổi ngành vận chuyển',
      content: `
# Xu hướng công nghệ Logistics 2025: AI và IoT thay đổi ngành vận chuyển

Ngành logistics Việt Nam đang trải qua một cuộc cách mạng công nghệ mạnh mẽ. Với sự phát triển của trí tuệ nhân tạo (AI) và Internet of Things (IoT), các doanh nghiệp logistics đang tìm cách tối ưu hóa quy trình và nâng cao hiệu quả hoạt động.

## 🤖 Trí tuệ nhân tạo trong Logistics

### Tối ưu tuyến đường thông minh
AI giúp phân tích dữ liệu giao thông real-time, dự đoán tắc nghẽn và tối ưu tuyến đường giao hàng. Các thuật toán machine learning có thể giảm thiểu thời gian vận chuyển lên đến 25%.

### Dự đoán nhu cầu
Hệ thống AI phân tích patterns mua sắm, thời tiết, sự kiện để dự đoán nhu cầu hàng hóa, giúp doanh nghiệp chuẩn bị inventory tối ưu.

### Chatbot và customer service
AI chatbot hỗ trợ khách hàng 24/7, trả lời câu hỏi về tracking, báo giá, và giải quyết các vấn đề cơ bản.

## 🌐 Internet of Things (IoT) 

### Tracking và monitoring
Cảm biến IoT gắn trên container, pallet, xe tải cung cấp thông tin real-time về:
- Vị trí GPS chính xác
- Nhiệt độ, độ ẩm (quan trọng với hàng lạnh)
- Tình trạng hàng hóa (va đập, rung lắc)
- Mức tiêu thụ nhiên liệu

### Smart warehouse
Kho thông minh sử dụng IoT để:
- Tự động kiểm đếm inventory
- Giám sát điều kiện bảo quản
- Tối ưu layout và flow hàng hóa
- Predictive maintenance cho thiết bị

## 📊 Tác động thực tế tại Việt Nam

### Case study: Shopee Express
Shopee đã triển khai AI để tối ưu 200,000+ đơn hàng/ngày, giảm 30% thời gian giao hàng ở TP.HCM và Hà Nội.

### Grab Express
Sử dụng IoT tracking cho 50,000+ xe delivery, tăng 40% độ chính xác thời gian giao hàng.

### Viettel Post
Triển khai robot sorting tự động, tăng 3x tốc độ xử lý bưu phẩm tại các hub lớn.

## 🚀 Xu hướng 2025-2030

### Autonomous vehicles
Xe tự lái cho delivery, đặc biệt trong khu công nghiệp và khu dân cư có quy hoạch tốt.

### Blockchain integration
Kết hợp blockchain với IoT để tạo supply chain minh bạch, chống giả mạo.

### Drone delivery
Giao hàng bằng drone cho khu vực khó tiếp cận, đặc biệt ở vùng sâu vùng xa.

### Green logistics
AI tối ưu để giảm carbon footprint, sử dụng xe điện và năng lượng tái tạo.

## 💡 Khuyến nghị cho doanh nghiệp

1. **Bắt đầu từ nhỏ**: Pilot với một khu vực hoặc sản phẩm cụ thể
2. **Đầu tư vào data**: Chất lượng dữ liệu quyết định thành công của AI
3. **Training nhân sự**: Đào tạo team để sử dụng công nghệ mới
4. **Collaboration**: Hợp tác với tech partners có kinh nghiệm
5. **ROI measurement**: Đo lường rõ ràng hiệu quả đầu tư

Cuộc cách mạng công nghệ trong logistics không chỉ là xu hướng mà là yêu cầu bắt buộc để doanh nghiệp Việt Nam cạnh tranh trên thị trường quốc tế.`,
      category: 'Công nghệ',
      author: 'Nguyễn Minh Tân',
      date: '2025-09-15',
      readTime: '5 phút',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      tags: ['AI', 'IoT', 'Công nghệ', 'Tương lai']
    }
    // Add more articles as needed
  ];

  return articles.find(article => article.id === parseInt(id)) || null;
};

const relatedArticles = [
  {
    id: 2,
    title: 'Giải pháp kho bãi thông minh: Tối ưu chi phí và nâng cao hiệu quả',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80',
    category: 'Kho bãi'
  },
  {
    id: 5,
    title: 'Blockchain trong Logistics: Minh bạch hóa chuỗi cung ứng toàn cầu', 
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=400&q=80',
    category: 'Công nghệ'
  }
];

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📰</div>
          <h2 className="text-2xl font-bold text-neutral-700 mb-2">Bài viết không tồn tại</h2>
          <Link to="/blog" className="text-primary-500 hover:text-primary-600 font-medium">
            ← Quay lại danh sách bài viết
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Image */}
      <div className="relative h-96 bg-neutral-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0">
          <Container>
            <nav className="text-white/80">
              <Link to="/" className="hover:text-white">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-white">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-accent-200">{article.category}</span>
            </nav>
          </Container>
        </div>

        {/* Article Meta */}
        <div className="absolute bottom-8 left-0 right-0">
          <Container>
            <div className="max-w-4xl">
              <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-6 text-white/90">
                <span>👤 {article.author}</span>
                <span>📅 {new Date(article.date).toLocaleDateString('vi-VN')}</span>
                <span>⏱️ {article.readTime}</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-logistics-card p-8 md:p-12">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-accent-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('# ')) {
                    return <h1 key={idx} className="text-3xl font-bold text-neutral-900 mt-8 mb-4">{paragraph.slice(2)}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={idx} className="text-2xl font-bold text-neutral-800 mt-6 mb-3">{paragraph.slice(3)}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="text-xl font-semibold text-neutral-700 mt-4 mb-2">{paragraph.slice(4)}</h3>;
                  } else if (paragraph.trim() === '') {
                    return <br key={idx} />;
                  } else {
                    return <p key={idx} className="text-neutral-600 leading-relaxed mb-4">{paragraph}</p>;
                  }
                })}
              </div>

              {/* Share & Actions */}
              <div className="flex items-center gap-4 mt-12 pt-8 border-t border-neutral-200">
                <span className="text-neutral-600 font-medium">Chia sẻ:</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  📘 Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                  🐦 Twitter
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                  💼 LinkedIn
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedArticles.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group bg-neutral-50 rounded-xl overflow-hidden hover:shadow-logistics-card transition-all duration-300"
              >
                <img
                  src={related.image}
                  alt={related.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-sm font-medium">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900 mt-2 group-hover:text-primary-600 transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}