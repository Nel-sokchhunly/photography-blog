import type { Config } from "tailwindcss";
const defaultColors = require("tailwindcss/colors");

const defaultTheme = {
  primary: "#EEECE8",
  secondary: "#262227",
  accent1: "#0D393A",
  accent2: "#50B4A2",
  accent3: "#DD4D1D",
  navbar: "#B3B1AD",
};

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
    },
    colors: {
      ...defaultColors,
      primary: defaultTheme.primary,
      navbar: defaultTheme.navbar,
      secondary: defaultTheme.secondary,
      accent1: defaultTheme.accent1,
      accent2: defaultTheme.accent2,
      accent3: defaultTheme.accent3,
    },
  },
  plugins: [],
};
export default config;
