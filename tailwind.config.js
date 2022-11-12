/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colo:{
      denger:"#de356d",
      primery:"#198754"
    }
  },
   plugins: [require("daisyui")],
}
