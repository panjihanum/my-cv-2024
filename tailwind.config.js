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
    },
  },
  plugins: [],
};
