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
      },
      fontFamily: {
        logofont: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
};
