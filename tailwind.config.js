const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      red: colors.red,
      green: colors.green,
      blueGray: colors.blueGray,
      white: colors.white,
      gray: colors.gray,
      cyan: colors.cyan,
      orange: colors.orange,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
