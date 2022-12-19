/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "ec-", // Prefix for all classes
  corePlugins: {
    preflight: false,
  },
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      tablet: "640px",
      md: "768px",
      lg: "1024px",
      laptop: "1024px",
      xl: "1280px",
      desktop: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
