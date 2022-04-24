module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#5D73F0",
        platinum: "#E6E6E6",
        yellowMunsell: "#EBC909",
        oldGold: "#CFB004",
      },
    },
  },
  daisyui: {
    themes: [
      {
        workbox: {
          primary: "#5d73f0",
          secondary: "#ebc909",
          accent: "#fcd34d",
          neutral: "#cfb004",
          "base-100": "#e6e6e6",
          info: "#3458EA",
          success: "#108e73",
          warning: "#efda71",
          error: "#ef4e66",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
