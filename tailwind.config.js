/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#131617',
        'primary':'#606773',
        'hover':'#323338'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mona': ['Mona Sans', 'sans-serif'],
        'open': ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}