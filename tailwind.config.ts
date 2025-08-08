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
        "hero-service-card-gradient":
          "linear-gradient(264.24deg, rgba(9, 25, 61, 0.8) 37.54%, rgba(9, 25, 61, 0.8) 99.35%)",
      },
      fontFamily: {
        space: ["var(--font-space_grostesk)"],
        caveat: ["var(--font-caveat)"],
      },
      colors: {
        primary: {
          DEFAULT: "#102A56",
          dark: "#101323",
          light: "#194185",
        },
        secondary: {
          DEFAULT: "#007CD7",
        },
        green_variant: {
          DEFAULT: "#A4ED8E",
        },
        gray_text: {
          200: "#FDFDFD",
          400: "#A4A7AE",
          500: "#717680",
          700: "#414651",
          800: "#252B37",
        },
      },
      keyframes: {
        infiniteScroll: {
          to: { left: "-200px" },
        },
        loaderMoveOne: {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "left",
          },
          "50%": {
            transform: "scaleX(1)",
            transformOrigin: "right",
            backgroundColor: "#1e293b",
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "left",
          },
        },
        loaderMoveTwo: {
          "0%": {
            transform: "scaleX(0)",
            transformOrigin: "right",
          },
          "50%": {
            transform: "scaleX(1)",
            transformOrigin: "left",
            backgroundColor: "#020617",
          },
          "100%": {
            transform: "scaleX(0)",
            transformOrigin: "right",
          },
        },
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
        oceanBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        waveTilt: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-5px) rotate(-0deg)" },
          "50%": { transform: "translateY(0) rotate(1deg)" },
          "75%": { transform: "translateY(5px) rotate(-1deg)" },
        },
        backwardTilt: {
          "0%": { transform: "rotateX(10deg) scaleY(0.8)" },
          "100%": { transform: "rotateX(0deg) scaleY(1)" },
        },
      },
      animation: {
        moveUp: "moveUp 1s ease-in-out forwards",
        rotateClockwise: "rotateClockwise 1s ease-in-out forwards",
        rotateAntiClockwise: "rotateAntiClockwise 1s ease-in-out forwards",
        infiniteScroll: "infiniteScroll 30s linear infinite",
        loaderMoveOne: "loaderMoveOne 3s ease-in-out 1",
        loaderMoveTwo: "loaderMoveTwo 3s ease-in-out 1",
        waveTilt: "waveTilt 8s ease-in-out infinite",
        oceanBounce: "oceanBounce 5s ease-in-out infinite",
        backwardTilt: "backwardTilt 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
export default config;
