/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '500': '500',
        '1000': '1000',
        '10000': '10000',
      }
    },
  },
  plugins: [],
}

