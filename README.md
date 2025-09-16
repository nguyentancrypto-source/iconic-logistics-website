# Iconic Logistics Website — Tổng Quan Dự Án (Freight Forwarder)

![CI](https://github.com/nguyentancrypto-source/iconic-logistics-website/actions/workflows/ci.yml/badge.svg)
![Pages](https://github.com/nguyentancrypto-source/iconic-logistics-website/actions/workflows/pages.yml/badge.svg)

## 1) Mục tiêu & Kiến trúc

- Website forwarder (không phải transport): giới thiệu dịch vụ bán cước quốc tế, thủ tục hải quan, vận tải nội địa, kiểm dịch (fumigation), CO (chứng nhận xuất xứ), FYTO (kiểm dịch thực vật).
- Tin tức ngành xuất nhập khẩu, blog chuyên sâu về logistics/forwarder.
- Clean Architecture: tách `core` (domain), `app` (use cases), `infrastructure` (Express API), `src` (frontend React).
- Triển khai CI/CD bằng GitHub Actions và GitHub Pages.

## 2) Công nghệ chính

- Frontend: React 19, Vite, TypeScript, Tailwind CSS v4, React Router.
- Backend: Express.js (TypeScript, ts-node, nodemon), CORS, dotenv.
- Kiểm thử: Vitest, jsdom, Testing Library.
- Chất lượng mã: ESLint 9 (flat config), Prettier, EditorConfig.

## 3) Cấu trúc thư mục

- `src/` — Frontend React (pages trong `src/interface/`: Home, About, Services, Contact, Careers, Blog, Admin).
- `core/` — Domain entities và cổng (interfaces).
- `app/` — Use cases.
- `infrastructure/` — Express server, router, repository in-memory, mock data.
- `.github/workflows/` — CI (typecheck, lint, test, build) và Pages deploy.

## 4) API Backend

- Base URL mặc định khi dev: `http://localhost:4000`
- Biến môi trường: `PORT`, `CORS_ORIGIN` (xem `.env.example`).

Các endpoints hiện có:

- `GET /` — Thông tin API.
- `GET /health` — Kiểm tra trạng thái.

## 5) Frontend

- Có thể chỉnh `VITE_API_BASE` để trỏ đến API khi deploy/đổi cổng.
- UI/UX ưu tiên trải nghiệm chuyên nghiệp, hiện đại, tối ưu cho doanh nghiệp xuất nhập khẩu.
- Navigation rõ ràng: Home, Dịch vụ, Blog, Liên hệ, Careers, Admin (nếu đăng nhập).

## 6) Scripts (npm)

- Phát triển:
  - `npm run dev` — Vite dev server (frontend).
  - `npm run dev:server` — Chạy API (ts-node, cấu hình ESM `tsconfig.server.json`).
  - `npm run dev:server:watch` — Chạy API với `nodemon` (tự reload khi thay đổi).
  - `npm run dev:full` — Chạy song song frontend + backend.
- Chất lượng mã:
  - `npm run lint` — ESLint (strict trong CI).
  - `npm run format` / `format:check` — Prettier.
  - `npm run typecheck` — Kiểm tra kiểu TypeScript.
- Build/Test:
  - `npm run build` — Build frontend.
  - `npm run preview` — Preview bản build.
  - `npm run test` / `test:ui` / `coverage` — Vitest.

## 7) CI/CD

- CI (`.github/workflows/ci.yml`): chạy trên push/PR đến `dev` và push đến `main`.
  - Bước: `npm ci` → `typecheck` → `lint` (strict) → `test` → `build`.
- Pages deploy (`.github/workflows/pages.yml`): build trên `main` rồi deploy GitHub Pages.
- Vite có cấu hình `base` để tương thích đường dẫn trên Pages.

## 8) Tự động tạo PR dev→main & auto-merge khi CI xanh

- Khi có commit mới lên nhánh `dev` hoặc đến 16:00 GMT+7 mỗi ngày, workflow sẽ tự động tạo Pull Request từ `dev` sang `main` nếu có thay đổi.
- Khi workflow CI (`ci.yml`) chạy thành công trên PR dev→main, workflow sẽ tự động merge PR này vào `main` (nếu repo bật branch protection với required status check là CI).
- Không cần thao tác thủ công, chỉ cần commit lên `dev` và đảm bảo CI xanh.

## 9) Liên kết quan trọng

- Repository: https://github.com/nguyentancrypto-source/iconic-logistics-website
- Nhánh làm việc: `dev` (PR vào `main`).
- GitHub Actions: https://github.com/nguyentancrypto-source/iconic-logistics-website/actions
- GitHub Pages (sau khi merge main và deploy): https://nguyentancrypto-source.github.io/iconic-logistics-website/
  - 404 SPA fallback: `public/404.html` đã cấu hình.

## 10) Cách chạy nhanh (local)

```bash
# Cài đặt phụ thuộc
npm ci

# Chạy cả frontend + backend với auto-reload backend
npm run dev:full

# Hoặc chạy riêng
npm run dev            # frontend
npm run dev:server:watch  # backend

# Kiểm tra API
curl http://localhost:4000/health
curl 'http://localhost:4000/health'
```

## 11) Tự động tạo/đồng bộ GitHub Issues từ BACKLOG.md

- Khi cập nhật các dòng `- [ ] ...` trong `BACKLOG.md`, workflow sẽ tự động tạo Issue mới (label: backlog, auto) cho từng task chưa hoàn thành.
- Nếu rerun workflow hoặc chỉnh sửa, các Issue đã tạo sẽ không bị trùng.
- Có thể chạy thủ công từ tab Actions (workflow_dispatch).

## 12) Trạng thái & Báo cáo

- Backlog: xem `BACKLOG.md` (có log cập nhật theo GMT+7).
- Báo cáo tiến độ: `REPORT_SUMMARY.md` (cập nhật mới nhất, có Update Log).

---

© 2025 Iconic Logistics — Dự án mẫu với React + Express + Clean Architecture
