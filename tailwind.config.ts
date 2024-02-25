import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)'],
      },
      colors: {
        primary: "#FA7CFF",
        secondary: "#A86BCF",
        black: "#151616",
      },
    },
  },
  plugins: [],
};

export default config;
