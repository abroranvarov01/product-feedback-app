/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "165px",
        center: true,
        screens: {
          lg: "1770px",
        },
      },
      colors: {
        mainBg: "#f7f8fd",
        btnBg: "#f2f4ff",
        tetxColor: "#4661e6",
        txt: "#3a4374",
        Ptext: "#647196",
        headBg: "#373f68",
        purp: "#ad1fea",
      },
    },
  },
  plugins: [],
};
