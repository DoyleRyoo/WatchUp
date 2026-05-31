/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E14',  // 베이스 다크 테마
        surface: '#141A24',     // 글래스모피즘 컴포넌트 표면
        brandUp: '#E64A19',     // 금융 데이터 상승 색상 (Red)
        brandDown: '#1565C0',   // 금융 데이터 하락 색상 (Blue)
        textPrimary: '#E4E6EB',
        textSecondary: '#9A9EA6'
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}