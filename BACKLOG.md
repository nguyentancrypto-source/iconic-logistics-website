# 📋 BACKLOG - Iconic Logistics Website

## 🎯 Project Status Overview

- **Start Date:** September 14, 2025
- **Current Phase:** Foundation & Backend Implementation
- **Next Milestone:** MVP with full-stack functionality

---

## 📦 COMPLETED TASKS ✅

### Frontend Foundation

- ✅ React 18 + Vite + TypeScript setup
- ✅ Tailwind CSS v4 integration with PostCSS
- ✅ React Router with 6 pages (Home, About, Services, Contact, Careers, Items)
- ✅ Basic navigation layout
- ✅ Responsive design foundation

### Development Environment

- ✅ ESLint 9 flat config
- ✅ Vitest + jsdom + Testing Library setup
- ✅ TypeScript strict mode configuration
- ✅ npm scripts (dev, build, test, lint, typecheck)

### CI/CD & Deployment

- ✅ GitHub Actions CI workflow (Node 20)
- ✅ GitHub Pages auto-deploy from main branch
- ✅ Branch protection setup (dev → main PR workflow)
- ✅ Vite config for GitHub Pages deployment

---

## 🟡 IN PROGRESS

### Documentation

- 🟡 **BACKLOG.md** - This file (current task)
- 🟡 **REPORT_SUMMARY.md** - Project status with GMT+7 timezone

---

## ⏭️ TODO - HIGH PRIORITY

### Backend Infrastructure

- ✅ **Express Server Setup**
  - Create `infrastructure/` directory
  - Basic Express server with TypeScript
  - CORS, middleware setup
  - Environment configuration

- ✅ **API Endpoints**
  - `GET /search` - Search logistics items (in-memory)
  - `GET /items` - List all items (in-memory)
  - Mock data for logistics items
  - Basic error handling

### Clean Architecture Implementation

- ✅ **Core Layer** (`core/`)
  - Domain entities (Item, SearchResult)
  - Repository interfaces
  - Use case interfaces
  - Business logic types

- ✅ **Application Layer** (`app/`)
  - Use cases implementation
  - Service interfaces
  - Application-specific logic
  - Data transformation

### Tooling Enhancements

- ✅ **Prettier Configuration**
  - `.prettierrc` config file
  - Integration with ESLint
  - Format on save setup

- ✅ **EditorConfig**
  - `.editorconfig` for consistent formatting
  - Cross-platform development support

- ✅ **ESLint Improvements**
  - Add React-specific plugins
  - Remove `|| true` from CI lint step
  - Stricter linting rules

---

## ⏭️ TODO - MEDIUM PRIORITY

### Frontend Enhancement

#### 🟡 Page Content Development

- [x] Home: Hero section, CTA
  - Tiêu đề nổi bật, mô tả ngắn về dịch vụ logistics.
  - Thêm hình ảnh minh họa (banner, icon vận chuyển).
  - Nút kêu gọi hành động (CTA): “Xem dịch vụ”, “Xem hàng hóa”.

- [x] About: Company overview
  - Giới thiệu công ty, sứ mệnh, tầm nhìn, giá trị cốt lõi.
  - Hình ảnh đội ngũ, kho bãi, phương tiện vận chuyển.

- [x] Services: Services grid
  - Danh sách dịch vụ chính: vận chuyển, kho bãi, quản lý đơn hàng, tracking...
  - Mỗi dịch vụ có icon/hình ảnh, mô tả ngắn, nút “Tìm hiểu thêm”.

- [x] Contact: Contact info + form UI
  - Thông tin liên hệ: địa chỉ, hotline, email, bản đồ Google Maps.
  - Form liên hệ: tên, email, nội dung, nút gửi.
  - Thông báo gửi thành công/thất bại.

- [x] Careers: Openings list UI
  - Danh sách vị trí tuyển dụng, mô tả ngắn, nút “Ứng tuyển”.
  - Thêm hướng dẫn gửi CV qua email hoặc form.

- [x] Items: Integration with backend API
  - Hiển thị danh sách hàng hóa từ API, có tìm kiếm, phân trang.
  - Mỗi item có tên, mã, loại, trạng thái, nút “Xem chi tiết”.

- [ ] Thêm trang chi tiết hàng hóa (Item Detail)
  - Khi bấm “Xem chi tiết” sẽ chuyển sang trang /items/:id.
  - Hiển thị đầy đủ thông tin: tên, mã, loại, mô tả, trạng thái, hình ảnh (nếu có).
  - Nút quay lại danh sách, hoặc CTA liên hệ tư vấn.

- [ ] Bổ sung nội dung thực tế, hình ảnh minh họa, call-to-action rõ ràng
  - Viết lại nội dung các trang cho sát thực tế ngành logistics Việt Nam.
  - Sử dụng hình ảnh thực tế (ảnh kho, xe tải, nhân viên, bản đồ...)
  - Đặt các nút CTA nổi bật ở vị trí hợp lý (đầu trang, cuối trang, giữa section).

#### ⏭️ UI/UX Improvements

- [ ] Thiết kế theme logistics chuyên nghiệp
  - [ ] Sử dụng màu sắc: Primary #FF4500, Secondary #FE4B00, Accent #FFD2BF, Neutral #333, Background #f9f9f9
  - [ ] Áp dụng icon, hình ảnh thực tế ngành logistics
  - **Acceptance:** Giao diện đồng bộ màu sắc, nhận diện thương hiệu logistics

- [ ] Cập nhật font chuyên nghiệp toàn site
  - [ ] Sử dụng Google Fonts: Inter hoặc Roboto cho heading/body
  - [ ] Heading đậm, body dễ đọc, spacing hợp lý
  - **Acceptance:** Font đồng bộ, dễ đọc trên mọi thiết bị

- [ ] Chuẩn hóa component library (Button, Card, Modal, Table)
  - [ ] Tạo các component UI chuẩn với Tailwind, props linh hoạt
  - [ ] Áp dụng vào Home, Services, Items, Modal
  - **Acceptance:** Component tái sử dụng, style đồng bộ, code clean

- [ ] Loading state cho từng trang
  - [ ] Thêm skeleton/loading spinner cho các trang fetch dữ liệu hoặc chuyển trang
  - **Acceptance:** Có hiệu ứng loading rõ ràng, UX mượt mà

- [ ] Error state rõ ràng, thân thiện
  - [ ] Hiển thị thông báo lỗi đẹp, dễ hiểu khi mất kết nối, không có dữ liệu, hoặc lỗi API
  - [ ] Có thể dùng component ErrorBoundary toàn app
  - **Acceptance:** Người dùng dễ nhận biết lỗi, không bị "trắng trang"

- [ ] Responsive: tối ưu mobile/tablet/desktop
  - [ ] Kiểm tra và chỉnh sửa layout, font, padding, grid... để giao diện đẹp trên mọi thiết bị
  - **Acceptance:** Giao diện không vỡ layout, dễ dùng trên mọi màn hình

- [ ] Thêm animation chuyển trang, hover, focus
  - [ ] Bổ sung hiệu ứng chuyển trang, hover, focus cho button, card, link... (Tailwind transition, animation hoặc Framer Motion)
  - **Acceptance:** UI sống động, hiện đại, không gây khó chịu

#### ⏭️ API Integration

- [x] Kết nối frontend với backend (Items page)
- [ ] Tích hợp tìm kiếm (search) realtime
- [ ] Phân trang nâng cao (infinite scroll hoặc load-more)
- [ ] Xử lý lỗi API, hiển thị thông báo
- [ ] Thêm ErrorBoundary cho toàn app

#### ⏭️ Testing & Polish

- [ ] Unit test cho component UI chính
- [ ] Integration test cho luồng fetch dữ liệu
- [ ] E2E test cho các luồng chính (Playwright/Cypress)
- [ ] Kiểm tra accessibility (a11y)
- [ ] Đánh giá hiệu năng giao diện (Lighthouse, bundle size)

### Testing Enhancement

- ⏭️ **Test Coverage**
  - Unit tests for components
  - Integration tests for API calls
  - E2E tests with Playwright
  - Coverage reporting improvement


- [ ] Thêm trang chi tiết hàng hóa (Item Detail)
  - [ ] Khi bấm “Xem chi tiết” sẽ chuyển sang trang /items/:id
  - [ ] Hiển thị đầy đủ thông tin: tên, mã, loại, mô tả, trạng thái, hình ảnh (nếu có)
  - [ ] Nút quay lại danh sách, hoặc CTA liên hệ tư vấn
  - **Acceptance:** Điều hướng đúng, hiển thị đủ thông tin, UX thân thiện

- [ ] Bổ sung nội dung thực tế, hình ảnh minh họa, call-to-action rõ ràng
  - [ ] Viết lại nội dung các trang cho sát thực tế ngành logistics Việt Nam
  - [ ] Sử dụng hình ảnh thực tế (ảnh kho, xe tải, nhân viên, bản đồ...)
  - [ ] Đặt các nút CTA nổi bật ở vị trí hợp lý (đầu trang, cuối trang, giữa section)
  - **Acceptance:** Nội dung thực tế, hình ảnh minh họa rõ ràng, CTA nổi bật
  - Lighthouse score optimization

- ⏭️ **SEO & Meta**
  - Meta tags optimization
  - Open Graph tags
  - Sitemap generation
  - Analytics integration

### Advanced Features

- ⏭️ **Advanced Logistics Features**
  - Real-time tracking simulation
  - Interactive maps integration
  - PDF report generation
  - Export functionality

---

## 🎯 NEXT ACTIONS (Immediate)

1. **Complete documentation** (REPORT_SUMMARY.md)
2. **Enhance frontend pages** with real content
3. **Connect frontend to backend** (extend beyond Items page)
4. **Add more tests** (API integration, components)
5. **Polish UI/UX**

---

## 📝 Update Log (GMT+7)

- 14/09/2025 16:32:14 — Backend Express server, Clean Architecture slices, `/items` + `/search` endpoints, Prettier + EditorConfig, ESLint + CI strict lint, Items page fetch UI, nodemon watch added.
- 14/09/2025 17:00:57 — Cập nhật nội dung các trang Home/About/Services/Contact/Careers (UI cơ bản), thêm badges CI/Pages vào README.
- 14/09/2025 17:10:36 — PR #6 (dev→main) merged, fixed failing test due to Home copy change, CI green, Pages deploy SUCCESS.

---

## 📊 Progress Metrics

**Completion Status:**

- ✅ Foundation: 85% complete
- 🟡 Backend: 0% complete
- ⏭️ Clean Architecture: 0% complete
- ⏭️ Frontend Polish: 20% complete
- ✅ DevOps: 90% complete

**Next Milestone:** Full-stack MVP with backend integration (Target: End of sprint)
