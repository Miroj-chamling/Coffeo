/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        facebook: "#4267B2",
        google: "#4285F4",
        background: "#723E29",
        coffeAd: "#FFF6F6",
        coffeAd2: "#FFDFDF",
        primary: "#f2eae1",
        subscribe1: "#d1ae8c",
        subscribe2: "#967f69",
        darkBrown: "#261711",
        secondaryBrown: "#523122",
      },
      fontFamily: {
        logofont: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
