/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jet: "#0A0A0A",
        carbon: "#1A1A1A",
        "brand-orange": "#F5A623",
        "blaze-orange": "#FF6B00",
        "deep-amber": "#D4831A",
      },
      fontFamily: {
        helvetica: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        "great-vibes": ['"Great Vibes"', "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
