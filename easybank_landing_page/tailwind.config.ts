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
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-content":
          "rgb(var(--color-secondary-content) / <alpha-value>)",
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-300": "rgb(var(--color-base-300) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
        "base-content-heading":
          "rgb(var(--color-base-content-heading) / <alpha-value>)",
      },
      fontSize: {
        nav: ["14px", { fontWeight: "400", letterSpacing: "-0.188px" }],
        navMobile: ["18px", { fontWeight: "400", letterSpacing: "-0.138px" }],
        bodyL: [
          "18px",
          { lineHeight: "155%", fontWeight: "400", letterSpacing: "-0.281px" },
        ],
        bodyM: [
          "16px",
          { lineHeight: "26px", fontWeight: "400", letterSpacing: "-0.25px" },
        ],
        bodyS: [
          "15px",
          { lineHeight: "25px", fontWeight: "400", letterSpacing: "-0.234px" },
        ],
        headingXL: [
          "56px",
          { lineHeight: "64px", fontWeight: "300", letterSpacing: "-1px" },
        ],
        headingL: [
          "40px",
          { lineHeight: "64px", fontWeight: "300", letterSpacing: "-0.714px" },
        ],
        headingM: ["32px", { fontWeight: "300", letterSpacing: "-0.571px" }],
        headingS: [
          "24px",
          { lineHeight: "28px", fontWeight: "300", letterSpacing: "-0.429px" },
        ],
        headingXS: [
          "20px",
          { lineHeight: "28px", fontWeight: "300", letterSpacing: "-0.327px" },
        ],
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
