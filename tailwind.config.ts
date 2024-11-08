import type { Config } from "tailwindcss";

export default {
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
      },
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "80%": { transform: "translateX(5%)", opacity: "0.75" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(200%)", opacity: "0" },
          "80%": { transform: "translateX(-5%)", opacity: "0.75" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        appear: {
          from: { opacity: "0", scale: "0.5" },
          to: { opacity: "1", scale: "1" },
        },
      },
      animation: {
        "slide-in-left":
          "slide-in-left 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards", // Custom easing curve
        "slide-in-right":
          "slide-in-right 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        // Custom easing curve
        appear: "appear  linear",
      },
    },
  },
  plugins: [],
} satisfies Config;
