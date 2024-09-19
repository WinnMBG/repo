/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#cccdcf",
        bg_light_primary: "#edf0f5",
        gray: "#B7C5D3",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(90deg, rgba(69,69,71,1) 0%, rgba(186,186,193,1) 100%);",
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
      },
    },
  },
  plugins: [],
};
