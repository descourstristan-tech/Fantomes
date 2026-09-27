import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nuit: "#0B1023",
        citron: "#E8FF6B",
      },
    },
  },
  plugins: [],
};
export default config;
