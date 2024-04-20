import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { nextui } from "@nextui-org/react";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			...colors,
			azul: "#004e8a",
			naranja: "#ff6933",
			fondo: "#fbfbfe",
			blackcolor: "#040316",
			whitecolor: "#fbfbfe",
			primary: "#ff6933",
			secondary: "#f7c6a1",
			accent: "#004e8a",
		},
		extend: {
			colors: {},
			backgroundImage: {
				logo: "URL('/img/logo.png')",
				"sign-language": "URL('/img/sign_language.jpg')",
				learn: "URL('/img/learn.jpg')",
				practice: "URL('/img/practice.jpg')",
			},
			animation: {
				unhidde: "unhidde 300ms ease-in 300ms 1 normal forwards",
				expand: "expand 600ms ease-in",
			},
			keyframes: {
				unhidde: {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
				expand: {
					"0%": { height: "0%" },
					"100%": { height: "auto" },
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		nextui({
			themes: {
				light: {
					colors: {
						foreground: "#040316",
						background: "#fbfbfe",
						primary: "#ff6933",
						secondary: "#f7c6a1",
						success: "#004e8a",
					},
				},
				dark: {
					layout: {},
					colors: {},
				},
			},
		}),
	],
};
export default config;
