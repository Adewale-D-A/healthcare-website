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
    },
  },
  plugins: [],
};
export default config;
