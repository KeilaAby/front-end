/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellowPrimary: "#fcb800",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero.avif')",
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
