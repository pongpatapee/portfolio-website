/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      pixellari: ["Pixellari", "sans-serif"],
      bubblyPixel: ["bubblyPixel", "sans-serif"],
      kongtext: ["kongtext", "sans-serif"],
      custom: ["custom", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "light-bg": "url(assets/imgs/light-bg.png)",
        "dark-bg": "url(assets/imgs/dark-bg.png)",
      },
      colors: {
        "dark": "var(--color-dark)",
        "light": "var(--color-light)",
      },
    },
  },
  plugins: [],
};
