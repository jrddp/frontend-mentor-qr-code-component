/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        slate: {
          300: "hsl(212, 45%, 89%)",
          500: "hsl(216, 15%, 48%)",
          900: "hsl(218, 44%, 22%)",
        },
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: "15px",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
