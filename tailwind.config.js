/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode via class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // required for Vite + React
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700", // custom gold color
      },
    },
  },
  plugins: [],
};
