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
        'primary': '#606773',
        'hover': '#323338',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mona': ['Mona Sans', 'sans-serif'],
        'open': ["Open Sans", "sans-serif"],
      },
      animation: {
        'slide_right': 'slate_right 1s ease-in-out ',
      },
      keyframes: {
        'slate_right': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateXw(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
