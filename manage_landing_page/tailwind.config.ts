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
        "primary-focus": "rgb(var(--color-primary-focus) / <alpha-value>)",
        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-200": "rgb(var(--color-secondary-200) / <alpha-value>)",
        "secondary-content":
          "rgb(var(--color-secondary-content) / <alpha-value>)",
        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-200": "rgb(var(--color-base-200) / <alpha-value>)",
        "base-300": "rgb(var(--color-base-300) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
      },
      fontSize: {
        nav: [
          "13px",
          {
            fontWeight: "500",
            lineHeight: "normal",
          },
        ],
        navMobile: [
          "16px",
          {
            fontWeight: "700",
            letterSpacing: "-0.286px",
            lineHeight: "normal",
          },
        ],
        footerLink: [
          "15px",
          {
            lineHeight: "normal",
            letterSpacing: "-0.234px",
            fontWeight: "400",
          },
        ],
        bodyM: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        bodyS: ["14px", { lineHeight: "28px", fontWeight: "400" }],
        headingXL: [
          "56px",
          { lineHeight: "64px", fontWeight: "700", letterSpacing: "-2px" },
        ],
        headingL: [
          "40px",
          {
            lineHeight: "44px",
            fontWeight: "700",
            letterSpacing: "-1.714px",
          },
        ],
        headingM: [
          "32px",
          {
            lineHeight: "45px",
            fontWeight: "800",
            letterSpacing: "-0.66px",
          },
        ],
        headingCard: [
          "16px",
          {
            lineHeight: "normal",
            fontWeight: "700",
            letterSpacing: "-0.286px",
          },
        ],
        headingS: [
          "30px",
          { lineHeight: "45px", fontWeight: "800", letterSpacing: "-0.619px" },
        ],
      },
      boxShadow: {
        button: "0 15px 15px -10px #FF9F8E",
      },
    },
  },
  plugins: [],
};
export default config;
