import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  js.config({
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
    },
  }),
  ...tseslint.configs.recommended,
];
