/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#176AE6",
        grayCustom: "#707070",
      },
      padding: {
        smallSidePadding: "0.5rem",
        mediumSidePadding: "1rem",
        bigSidePadding: "4rem",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
