/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#064A7A',
        'navy-dark': '#043655',
        green: '#3A8B1C',
        'green-light': '#A7E934',
        fog: '#F3F6F5',
        ink: '#102332',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(6, 74, 122, 0.12)',
        card: '0 12px 30px rgba(16, 35, 50, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
