/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gray':'rgb(180, 180, 180)',
      }
    },
  },
  plugins: [],
}

