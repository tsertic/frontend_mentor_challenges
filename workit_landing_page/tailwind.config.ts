import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      manrope: ["var(--font-manrope)"],
      fraunces: ["var(--font-fraunces)"],
    },
    fontSize: {
      body: ["18px", { lineHeight: "32px", fontWeight: "400" }],
      bodyS: ["16px", { lineHeight: "28px", fontWeight: "400" }],
      button: ["18px", { lineHeight: "32px", fontWeight: 700 }],
      headingL: ["80px", { lineHeight: "80px", fontWeight: "600" }],
      headingM: ["56px", { lineHeight: "64px", fontWeight: "600" }],
      headingS: ["32px", { lineHeight: "40px", fontWeight: "600" }],
      headingXS: ["28px", { lineHeight: "36px", fontWeight: "600" }],
    },
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
