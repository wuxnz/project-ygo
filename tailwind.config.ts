import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const { heroui } = require("@heroui/react");

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.tsx",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "000000",
        "background-light": "0e0e0e",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    heroui({
      defaultTheme: "dark",
      themes: {
        dark: {
          colors: {
            primary: "#6f11db",
          },
        },
        light: {
          colors: {
            primary: "#6f11db",
          },
        },
      },
    }),
  ],
} satisfies Config;
