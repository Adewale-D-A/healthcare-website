import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "styled-gradient":
          "linear-gradient(to right, white 60%, #2E9511 80%, #007CD7 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, white -800%, #102A56 100%)",
        "sctn-two-text-gradient":
          "linear-gradient(264.24deg, #007CD7 37.54%, #004171 99.35%)",
        "how-it-works-gradient":
          "linear-gradient(288.6deg, rgba(255, 255, 255, 1) 10.86%, rgba(0, 124, 215, 0.2) 88.94%)",
      },
      fontFamily: {
        space: ["var(--font-space_grostesk)"],
        caveat: ["var(--font-caveat)"],
      },
      colors: {
        primary: {
          DEFAULT: "#102A56",
          dark: "#101323",
        },
        secondary: {
          DEFAULT: "#007CD7",
        },
        gray_text: {
          400: "#A4A7AE",
          500: "#717680",
          700: "#414651",
          800: "#252B37",
        },
      },
      keyframes: {
        moveUp: {
          "0%": { marginTop: "200px" },
          "100%": { marginTop: "40px" },
        },
        rotateClockwise: {
          "0%": { rotate: "0deg", marginLeft: "-80px" },
          "100%": { rotate: "10deg", marginLeft: "-50px" },
        },
        rotateAntiClockwise: {
          "0%": { rotate: "0deg", marginRight: "-80px" },
          "100%": { rotate: "-10deg", marginRight: "-50px" },
        },
      },
      animation: {
        moveUp: "moveUp 1s ease-in-out forwards",
        rotateClockwise: "rotateClockwise 1s ease-in-out forwards",
        rotateAntiClockwise: "rotateAntiClockwise 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
