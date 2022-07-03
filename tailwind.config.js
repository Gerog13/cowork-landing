/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#14213d",
        platinum: "#e5e5e5",
        yellowMunsell: "#EBC909",
        oldGold: "#fca311",
        sienna: "#DE6B48",
      },
      width: {
        img: "500px",
      },
    },
  },
  plugins: [require("daisyui")],
};
