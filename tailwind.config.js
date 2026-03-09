/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        grow: "grow 1s ease-in-out infinite",
        pick: "pick 2s ease-in-out infinite",
        dry: "dry 1.5s ease-in-out infinite",
        pack: "pack 0.5s ease-in-out",
        brew: "brew 3s ease-in-out infinite",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        pick: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        dry: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        pack: {
          "0%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        brew: {
          "0%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};

