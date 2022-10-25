/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        60: "60ms",
      },
      height: {
        90: "90%",
        15: "15vh",
        900: "90vh",
      },
      width: {
        45: "45%",
        23: "23%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
