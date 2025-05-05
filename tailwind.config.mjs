/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/**/*.html"
    ],
    theme: {
      extend: {
        colors: {
          'teal-800': '#446262',
          'amber-700': '#A18C34',
        },
      },
    },
    plugins: [],
  }
  
  export default config