import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components';

// Mock logistics articles data
const articles = [
  {
    id: 1,
    title: 'Xu hướng công nghệ Logistics 2025: AI và IoT thay đổi ngành vận chuyển',
    excerpt: 'Khám phá cách trí tuệ nhân tạo và Internet of Things đang cách mạng hóa ngành logistics tại Việt Nam, từ tối ưu tuyến đường đến quản lý kho thông minh.',
    category: 'Công nghệ',
    author: 'Nguyễn Minh Tân',
    date: '2025-09-15',
    readTime: '5 phút',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    tags: ['AI', 'IoT', 'Công nghệ', 'Tương lai']
  },
  {
    id: 2,
    title: 'Giải pháp kho bãi thông minh: Tối ưu chi phí và nâng cao hiệu quả',
    excerpt: 'Hướng dẫn chi tiết về hệ thống WMS, robot tự động, và các công nghệ hiện đại giúp doanh nghiệp quản lý kho bãi hiệu quả hơn.',
    category: 'Kho bãi',
    author: 'Trần Thị Hương',
    date: '2025-09-14',
    readTime: '7 phút',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    tags: ['WMS', 'Kho bãi', 'Tự động hóa']
  },
  {
    id: 3,
    title: 'Green Logistics: Xu hướng vận chuyển bền vững và thân thiện môi trường',
    excerpt: 'Tìm hiểu về các giải pháp logistics xanh, xe điện, năng lượng tái tạo và cách giảm thiểu tác động môi trường trong vận chuyển.',
    category: 'Môi trường',
    author: 'Lê Văn Hoàng',
    date: '2025-09-13',
    readTime: '6 phút',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tags: ['Green', 'Bền vững', 'Môi trường']
  },
  {
    id: 4,
    title: 'Last-mile Delivery: Thách thức và cơ hội trong giao hàng cuối cùng',
    excerpt: 'Phân tích những thách thức trong giao hàng tận nơi và các giải pháp sáng tạo từ drone, robot đến mạng lưới hub nhỏ.',
    category: 'Giao hàng',
    author: 'Phạm Thị Mai',
    date: '2025-09-12',
    readTime: '8 phút',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    tags: ['Last-mile', 'Giao hàng', 'Innovation']
  },
  {
    id: 5,
    title: 'Blockchain trong Logistics: Minh bạch hóa chuỗi cung ứng toàn cầu',
    excerpt: 'Ứng dụng công nghệ blockchain để tăng tính minh bạch, theo dõi xuất xứ hàng hóa và giảm thiểu rủi ro trong chuỗi cung ứng.',
    category: 'Công nghệ',
    author: 'Vũ Đức Nam',
    date: '2025-09-11',
    readTime: '6 phút',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
    tags: ['Blockchain', 'Minh bạch', 'Chuỗi cung ứng']
  },
  {
    id: 6,
    title: 'E-commerce Logistics: Đáp ứng kỳ vọng khách hàng trong thời đại số',
    excerpt: 'Chiến lược logistics cho thương mại điện tử, từ tối ưu thời gian giao hàng đến nâng cao trải nghiệm khách hàng.',
    category: 'E-commerce',
    author: 'Ngô Thị Lan',
    date: '2025-09-10',
    readTime: '5 phút',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tags: ['E-commerce', 'Digital', 'Customer Experience']
  }
];

const categories = [
  'Tất cả',
  'Xuất nhập khẩu',
  'Bán cước quốc tế',
  'Hải quan',
  'CO & FYTO',
  'Công nghệ logistics',
  'Tin ngành Forwarder',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'Tất cả' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Container>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Blog & Tin tức Forwarder
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 leading-relaxed">
              Cập nhật kiến thức, xu hướng và kinh nghiệm thực tiễn về xuất nhập khẩu, bán cước quốc tế, hải quan, CO, FYTO, công nghệ logistics và thị trường Forwarder Việt Nam.
            </p>
          </div>
        </Container>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-white shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-300 focus:border-primary-500 transition-colors"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.id}`}
                className="group bg-white rounded-2xl shadow-logistics-card hover:shadow-logistics-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Article Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <div className="flex items-center gap-4">
                      <span>👤 {article.author}</span>
                      <span>📅 {new Date(article.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                    <span className="text-primary-500 font-medium">⏱️ {article.readTime}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-100 text-primary-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-bold text-neutral-700 mb-2">Không tìm thấy bài viết</h3>
              <p className="text-neutral-500">Thử thay đổi từ khóa tìm kiếm hoặc danh mục</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}