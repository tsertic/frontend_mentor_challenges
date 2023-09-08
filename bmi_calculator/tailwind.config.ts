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
        lightblue: "#E7F5FE",
        blue: "#345ff6",
        gunmetal: "#253347",
        "dark-electric-blue": "#5e6e85",
        borders: "#D8E2E7",
        white: "#ffffff",
      },
      fontSize: {
        bodyM: ["16px", { lineHeight: "150%", fontWeight: "400" }],
        bodyM_bold: ["16px", { lineHeight: "150%", fontWeight: "600" }],
        bodyS: ["14px", { lineHeight: "150%", fontWeight: "400" }],
        headingXL: [
          "64px",
          { lineHeight: "110%", fontWeight: "600", letterSpacing: "-3.2px" },
        ],
        headingL: [
          "48px",
          { lineHeight: "110%", fontWeight: "600", letterSpacing: "-2.4px" },
        ],
        headingLMobile: [
          "32px",
          { lineHeight: "110%", fontWeight: "600", letterSpacing: "-1.6px" },
        ],
        headingM: [
          "24px",
          { lineHeight: "110%", fontWeight: "600", letterSpacing: "-1px" },
        ],
        headingS: [
          "20px",
          { lineHeight: "110%", fontWeight: "600", letterSpacing: "-5%" },
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
