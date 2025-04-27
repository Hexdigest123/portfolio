/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF1639",
        secondary: "#2B2B2B",
      },
      fontSize: {
        header: "36px",
        subheader: "20px",
        text: "16px",
      },
    },
  },
  plugins: [],
};
