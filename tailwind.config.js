/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-off-white": "rgba(255, 255, 255, 0.87)",
        "theme-blue": "#203A9C",
      },
      keyframes: {
        frameColour: {
          "0%": {
            backgroundColor: "#053A9C",
          },
          "100%": {
            backgroundColor: "#203A9C",
          },
        },
        frameMotion: {
          "0%": {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          "100%": {
            position: "fixed",
            top: "0",
            left: "0",
            fontSize: "1.5em",
          },
        },
      },
      animation: {
        frameColour: "frameColour 3s ease-out forwards",
        frameMotion: "frameMotion 0.7s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
