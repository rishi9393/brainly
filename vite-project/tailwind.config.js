/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e7fe",
          400: "#9373c3",
          600: "#5046e4",
        },
      },
    },
  },
  plugins: [],
};
