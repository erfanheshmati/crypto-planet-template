/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        d1: "72px",
        d2: "60px",
        h1: "48px",
        h1s: "34px",
        h2: "39px",
        h2s: "33px",
        h3: "33px",
        h3s: "28px",
        h4: "28px",
        h4s: "23px",
        h5: "23px",
        h5s: "19px",
        h6: "19px",
        h6s: "14px",
        p1: "18px",
        p2: "16px",
        p3: "14px",
        caption: "12px",
        footer: "10px",
      },
      colors: {
        main: {
          DEFAULT: "#5367ff",
        },
        primary: {
          50: "#e2f2ff",
          100: "#b9ddff",
          200: "#8ac8ff",
          300: "#56b2ff",
          400: "#25a1ff",
          500: "#0091ff",
          600: "#0083f8",
          700: "#0070e4",
          800: "#005fd2",
          900: "#0b3eb3",
        },
        neutral: {
          50: "#F7F8FA",
          100: "#F0F1F5",
          200: "#E9EAF0",
          300: "#CCCED9 ",
          400: "#AEB1BF",
          500: "#9295A6",
          600: "#6C7080",
          700: "#545766",
          800: "#262833",
          900: "#090A0D",
        },
        success: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7  ",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        dark: {
          main: "#080808",
          backgroung: "#121318",
        },
        lightLogo: "#2B3140",
        darkLogo: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
