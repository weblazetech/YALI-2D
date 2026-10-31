import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yali: {
          bg: "#fffbf6",
          primary: "#49674a",
          "primary-hover": "#3c563d",
          "primary-dark": "#2d422e",
          "primary-light": "#5c805d",
          accent: "#d7f5d8",
          "accent-hover": "#c2ebc3",
          "accent-subtle": "#effbf0",
          text: "#383434",
          "text-muted": "#635e5d",
          "text-light": "#888280",
          border: "#e7e0d6",
          "border-mint": "#bde7be",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(56, 52, 52, 0.06), 0 2px 6px -1px rgba(56, 52, 52, 0.04)",
        card: "0 10px 30px -4px rgba(73, 103, 74, 0.08), 0 4px 10px -2px rgba(56, 52, 52, 0.03)",
        elevated: "0 20px 40px -8px rgba(73, 103, 74, 0.12), 0 6px 16px -4px rgba(56, 52, 52, 0.06)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

