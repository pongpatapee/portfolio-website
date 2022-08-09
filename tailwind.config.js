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
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      backgroundImage: {
        'light-bg': "url(assets/imgs/light-bg.png)",
        'dark-bg': "url(assets/imgs/dark-bg.png)",
      }
    },
  },
  plugins: [],
};
