/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1473e6",
        dark: "#222831",
        darkSecondary: "#31363F",
      },
      keyframes: {
        "spin-smooth": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-smooth": "spin-smooth 1.5s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
};
