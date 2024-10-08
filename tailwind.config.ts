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
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--bg-card)",

        'primary-10': '#9E78CF',
        'primary-20': '#15101C',

        'red-10': '#F8F2F4',
        'red-20': '#B07289',
        'red-30': '#FCEEF5',
        'red-40': '#571032'
      },
    },
  },
  plugins: [],
};
export default config;
