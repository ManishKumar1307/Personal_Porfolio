/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFCE1A',
        'secondary': '#0D0842',
        'blackBG': '#F3F3F3',
        'Favorite': '#FF5841',
        orange: {
          400: '#fd6f00',
          800: '#c45500',
        },
      }, 
      fontFamily: {
        'primary': ["Poppins", "sans-serif"], // Updated to "Poppins"
        'secondary': ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
