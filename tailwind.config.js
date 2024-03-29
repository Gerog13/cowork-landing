/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#14213d",
        blackness: "#0d0e10",
        grayness: "#d8d8d8",
        lightGray: "#7986bf",
        lightBlue: "#d2d6fa",
        platinum: "#e5e5e5",
        yellowMunsell: "#ffdc6c",
        darkness: '#171219',
        oldGold: "#f1c20a",
        bgGold: '#fff1db',
        sienna: "#DE6B48",
      },
      width: {
        img: "680px",
      },
    },
  },
  plugins: [require("daisyui")],
};
