import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#080b12",
        panel: "#101522",
        muted: "#9aa4b2",
        accent: "#38bdf8",
        accentSoft: "#0ea5e9",
        line: "rgba(148, 163, 184, 0.18)"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(15, 23, 42, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
