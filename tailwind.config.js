/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(28, 89, 90)',
        'secondary' : 'cadetblue',
      }
    },
    fontFamily:{
      'hero-font': 'Sriracha',
    },
  },
  plugins: [],
}

