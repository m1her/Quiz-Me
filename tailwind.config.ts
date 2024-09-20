import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "spin-back-and-forth": {
          "0%": { transform: "rotate(40deg)" },
          "50%": { transform: "rotate(110deg)" },
          "100%": { transform: "rotate(40deg)" },
        },
      },
      animation: {
        "spin-back-and-forth": "spin-back-and-forth 2s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
