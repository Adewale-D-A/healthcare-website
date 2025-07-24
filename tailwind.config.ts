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
      },
      fontFamily: {
        space: ["var(--font-space_grostesk)"],
      },
      colors: {
        primary: {
          DEFAULT: "#102A56",
        },
        secondary: {
          DEFAULT: "#007CD7",
        },
        theme_blue: {
          DEFAULT: "#007CD7",
        },
        theme_green: {
          DEFAULT: "#A4ED8E",
        },
        theme_black: {
          DEFAULT: "#231F20",
        },
      },
    },
  },
  plugins: [],
};
export default config;
