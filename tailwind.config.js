/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        content: 'calc(100vh - 40px)',
      },
    },
  },
  plugins: [],
}
