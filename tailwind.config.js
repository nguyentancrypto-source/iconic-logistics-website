/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // blue-800
          light: '#60a5fa',   // blue-400
          dark: '#1e293b',    // slate-800
        },
        accent: {
          DEFAULT: '#f59e42', // orange-400
          light: '#fbbf24',   // orange-300
        },
        logistics: {
          bg: '#f8fafc',
          card: '#fff7ed',
          border: '#e0e7ef',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        logistics: '0 4px 24px 0 rgba(30,64,175,0.08)',
      },
      transitionProperty: {
        'bg': 'background-color',
        'colors': 'color, background-color, border-color',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 0.7s ease',
      },
    },
  },
  plugins: [],
};
