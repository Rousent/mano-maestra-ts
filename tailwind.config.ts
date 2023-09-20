import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      ...colors,
      azul: "#2DA4FA",
      naranja: "#F9904F",
      fondo: "#FEF3EB",
    },
    extend: {
      colors: {},
      backgroundImage: {
        "logo": "URL('/img/logo.png')",
        "sign-language": "URL('/img/sign_language.jpg')"
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config
