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
        brandPrimary: '#26005b',
        brandSecondary: '#5c00ea',
        accent: '#fd4f00',
        darkText: '#16181e',
        lightText: '#f5f5f5',
      },
    },
  },
  plugins: [],
};
export default config;
