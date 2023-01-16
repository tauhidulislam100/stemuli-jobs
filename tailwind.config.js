/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#1677ff',
        primary: '#FF6D57',
        secondary: '#c800f9',
        accent: '#624284',
        success: '#52c41a',
        info: '#1677ff',
        warning: '#faad14',
        black: '#000'
      },
      backgroundImage: {
        'hero': "url('/stemulihero.jpg')"
      }
    },
  },
  plugins: [],
}