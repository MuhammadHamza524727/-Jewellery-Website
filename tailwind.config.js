/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        coal: "#111113",
        gold: {
          DEFAULT: "#c8a15a",
          light: "#e6cf9c",
          deep: "#9a7b3f",
        },
        champagne: "#eadfc8",
        ivory: "#f8f5ef",
        paper: "#fffdf9",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.35em",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
