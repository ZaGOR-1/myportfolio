/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#5B61FF',
          50: '#EEF0FF',
          100: '#DADDFE',
          500: '#5B61FF',
          600: '#4347D9',
        },
      },
      boxShadow: {
        glass: '0 24px 60px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
