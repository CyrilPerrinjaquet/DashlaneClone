/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "br-bottom-black": "0px 0px 2px 0px #000000",
      },
    },
    screens: {
      smarthphone: { max: "768px" },
      tablet: "1024px",
      "small-smarthphone": { max: "375px" },
    },
  },
  plugins: [],
};
