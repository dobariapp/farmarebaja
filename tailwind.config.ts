import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#004a99',
        'brand-light': '#0073e6',
        'brand-red': '#d92323',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // ← AÑADE ESTA LÍNEA
  ],
};

export default config;