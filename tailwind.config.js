/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'infinite-scroll-left': 'infinite-scroll-left 25s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        readex: ['Readex Pro', 'sans-serif'],
        gabarito: ['Gabarito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
