/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple1: '#9083D5',
        customPurple2: '#807593',
      },
    },
  },
  plugins: [],
}

