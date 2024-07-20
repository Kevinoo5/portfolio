/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        300: "3",
      },

      zIndex: {
        content: "5",
        2: "2",
      },

      animation: {
        blob: "blob 6s infinite",
      },

      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(2px, -2px) scale(3)" },
          "66%": { transform: "translate(-2px, 2px) scale(0.5)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
