import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgb(var(--color-dark-purple) / <alpha-value>)",
        eucaplyptus: "rgb(var(--color-eucaplyptus) / <alpha-value>)",
        "davys-grey": "rgb(var(--color-davys-grey) / <alpha-value>)",
        "ghost-white": "rgb(var(--color-ghost-white) / <alpha-value>)",
        white: "rgb(var(--color-white) / <alpha-value>)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
