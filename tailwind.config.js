/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4500', // logistics orange
          light: '#FE4B00',   // secondary
          dark: '#333333',    // neutral
        },
        secondary: {
          DEFAULT: '#FE4B00',
        },
        accent: {
          DEFAULT: '#FFD2BF',
        },
        neutral: {
          DEFAULT: '#333333',
        },
        background: {
          DEFAULT: '#f9f9f9',
        },
        logistics: {
          bg: '#f9f9f9',
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
