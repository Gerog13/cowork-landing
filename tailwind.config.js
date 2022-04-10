module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#5D73F0',
        platinum: '#E6E6E6',
        yellowMunsell: '#EBC909',
        oldGold: '#CFB004',
      }
    },
  },
  plugins: [require("daisyui")],
}