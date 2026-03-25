import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-sora)", "sans-serif"],
      },
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.6s ease-out forwards",
        "fade-slide-up-delay-1": "fadeSlideUp 0.6s ease-out 0.15s forwards",
        "fade-slide-up-delay-2": "fadeSlideUp 0.6s ease-out 0.3s forwards",
        "fade-slide-up-delay-3": "fadeSlideUp 0.6s ease-out 0.45s forwards",
      },
      colors: {
        primary: "#0d9488", // teal-600
        accent: "#6366f1",  // indigo-500
      },
    },
  },
  plugins: [],
};

export default config;
