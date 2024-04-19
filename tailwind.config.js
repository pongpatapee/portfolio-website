/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      JetBrainsNF: ["JetBrainsMonoNerdFont", "sans-serif"],
    },
    extend: {
      // colors: {
      //   transparent: "transparent",
      // },
      //   "onedark-dark-bg": "#282C34",
    },
  },
  plugins: [],
};
