/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#5D73F0",
        platinum: "#E6E6E6",
        yellowMunsell: "#EBC909",
        oldGold: "#CFB004",
        sienna: '#DE6B48'
      },
      width: {
        'img': '500px',
      }
    },
  },
  plugins: [require("daisyui")],
}