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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        "primary-200": "rgb(var(--color-primary-200) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
      fontSize: {
        bodyM: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        bodyM_bold: ["16px", { lineHeight: "150%", fontWeight: "600" }],
        bodyS: ["14px", { lineHeight: "150%", fontWeight: "400" }],
        headingXL: ["64px", { lineHeight: "110%", fontWeight: "600" }],
        headingL: ["48px", { lineHeight: "110%", fontWeight: "600" }],
        headingM: ["24px", { lineHeight: "110%", fontWeight: "600" }],
        headingS: ["20px", { lineHeight: "110%", fontWeight: "600" }],
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
