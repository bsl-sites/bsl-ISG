/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bslpink: "#ac1e44",
        bslred: "#ac1e44",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [require("daisyui")],
};
