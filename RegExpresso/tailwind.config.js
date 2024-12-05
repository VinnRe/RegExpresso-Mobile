/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], // Include all component paths
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				text: {
					DEFAULT: "#3d2413",
					hover: "#f1e2d0",
				},
				button: {
					text: "#f1e2d0",
					bg: "#3e241380",
					bgRed: "#8B0000",
					hover: "#3d2413",
				},
				input: {
					bg: "#3e24134d",
					focus: "#3e24139e",
					text: "#f8f6f3",
					placeholder: "#f1e2d0",
				},
				background: {
					primary: "#e8cdad",
					secondary: "#89695d",
				},
				white: "#f5f2f0",
			},
			fontFamily: {
				poppinsBold: ["Poppins-Bold", "sans-serif"],
				poppinsMedium: ["Poppins-Medium", "sans-serif"],
				poppinsRegular: ["Poppins-Regular", "sans-serif"],
			},
		},
	},
	plugins: [],
};
