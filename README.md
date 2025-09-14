# Iconic Logistics Website

This project is a modern web app scaffolded with:

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Vitest** + **jsdom** + **Testing Library** for testing
- **ESLint 9** (flat config)

## Project Structure

- `src/interface/` — App pages: Home, About, Services, Contact, Careers, Items
- `tailwind.config.js`, `postcss.config.js`, `src/index.css` — Tailwind setup
- `.github/workflows/ci.yml` — GitHub Actions CI (Node 20)

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run test` — Run tests (Vitest)
- `npm run coverage` — Test coverage
- `npm run typecheck` — TypeScript type checking
- `npm run lint` — Lint code (ESLint)

## CI

On push/PR to `dev` branch, CI will:
- Install deps
- Typecheck
- Lint (does not fail build)
- Test
- Build

---

© 2025 Iconic Logistics

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
