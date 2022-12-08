/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
      },
      screens: {
        'mobile': '375px',
        'medium-mobile': '412px'
      },
      colors: {
        'dark-bg': '##1C1C1E',
      },
    },

  },
  plugins: [],
}
