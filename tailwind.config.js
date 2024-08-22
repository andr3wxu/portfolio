/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "theme-off-white": "#EEF0F3",
        "theme-blue": "#203A9C",
        "theme-white": "#FFFFFF",
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
            fontSize: "1rem",
          },
        },
        NavbarMotion: {
          "0%": {
            position: "fixed",
            top: "-10%",
          },
          "100%": {
            position: "fixed",
            top: "0",
          },
        },
      },
      animation: {
        frameColour: "frameColour 3s ease-out forwards",
        frameMotion: "frameMotion 0.7s ease-in-out forwards",
        NavbarMotion: "NavbarMotion 0.7s ease-in-out forwards",
      },
      fontFamily: {
        mono: ['"Martian Mono", monospace'],
        slab: ['"Montagu Slab", serif'],
        sans: ['"Manrope", sans-serif'],
        "roboto-flex": [
          '"Roboto Flex", sans-serif',
          { fontVariationSettings: '"wdth" 100, "wght" 400' },
        ],
        "roboto-flex-wide": [
          '"Roboto Flex", sans-serif',
          { fontVariationSettings: '"wdth" 161, "wght" 900' },
        ],
        "roboto-flex-bold": [
          '"Roboto Flex", sans-serif',
          { fontVariationSettings: '"wdth" 120, "wght" 900' },
        ],
      },
      fontSize: {
        "custom-h1": "17vw",
        "custom-h2": "10vw",
        "custom-h3": "3vw",
      },
      margin: {
        "custom-title-top": "6vw",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
