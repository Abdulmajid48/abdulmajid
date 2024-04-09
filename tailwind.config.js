/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img: "url('/public/images/backgroundimg.webp')",
      },
      backgroundPosition: {
        bottom: "bottom",
        "fifty": "50%",
  
      },
    },
  },
  plugins: [],
};
