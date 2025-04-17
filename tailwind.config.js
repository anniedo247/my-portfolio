/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#050709",
        primaryMedium: "#0F0715",
        primaryLight: "#140C1C",
        secondary: "#2A1454",
        secondaryMedium: "#8750F7",
        textColor: "#DDDDDD",
      },
    },
  },
  plugins: [],
};
