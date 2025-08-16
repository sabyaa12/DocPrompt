/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      colors: {
        primary: "#0D9488", // teal-600 or your custom code
        "primary-dark": "#0F766E", // darker shade for hover
      },
    },
  },
  plugins: [],
}
