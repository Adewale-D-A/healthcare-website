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
      },
      fontFamily: {
        jost: ["var(--font-jost)"],
        century: ['var(--font-century)']
      }, 
      colors: {
        primary: {
          500: "#003155",
        },
        secondary: {
          500: "#007CD7",
        },
        theme_blue:{
          DEFAULT: "#007CD7"
        },
        theme_green:{
          DEFAULT: "#A4ED8E"
        },
        theme_black:{
          DEFAULT: "#231F20"
        }
      },
    },
  },
  plugins: [],
};
export default config;
