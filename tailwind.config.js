/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "Sora", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#7C4DFF",
        secondary: "#9D75FF",
        accent: "#C5A3FF",
        backgroundLight: "#F5F3FF",
        backgroundDark: "#050516",
        cardLight: "#FFFFFF",
        cardDark: "#070821",
        neonPurple: "#A855FF",
        neonCyan: "#22D3EE",
      },
      boxShadow: {
        cardSoft: "0 10px 40px rgba(15,23,42,0.08)",
        cardNeon: "0 0 30px rgba(168,85,255,0.4)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
