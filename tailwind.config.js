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
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(2deg)' },
          '66%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(15px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadein: 'fadein 0.7s ease',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'gradient-x': 'gradient-x 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 5s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
    },
  },
  plugins: [],
};
