/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'background-dark': '#0062E6',
				navy: {
					DEFAULT: '#0F1A3A',
					50: '#1A2A5E',
					100: '#162553',
					200: '#122048',
					300: '#0E1B3D',
					400: '#0B1632',
					500: '#0F1A3A',
					600: '#080F24',
					700: '#05091A',
					800: '#03050F',
					900: '#010205',
				},
				blue: {
					DEFAULT: '#1976D2',
					50: '#E3F2FD',
					100: '#BBDEFB',
					200: '#90CAF9',
					300: '#64B5F6',
					400: '#42A5F5',
					500: '#1976D2',
					600: '#1565C0',
					700: '#0D47A1',
					800: '#0A3880',
					900: '#072A60',
				},
				purple: {
					DEFAULT: '#3D5AFE',
					500: '#3D5AFE',
				},
				teal: {
					DEFAULT: '#00B0FF',
					500: '#00B0FF',
				},
				whiteAlpha: {
					50: 'rgba(255, 255, 255, 0.04)',
					100: 'rgba(255, 255, 255, 0.06)',
					200: 'rgba(255, 255, 255, 0.08)',
					300: 'rgba(255, 255, 255, 0.16)',
					400: 'rgba(255, 255, 255, 0.24)',
					500: 'rgba(255, 255, 255, 0.36)',
					600: 'rgba(255, 255, 255, 0.48)',
					700: 'rgba(255, 255, 255, 0.64)',
					800: 'rgba(255, 255, 255, 0.80)',
					900: 'rgba(255, 255, 255, 0.92)',
				},
			},
		},
	},
	plugins: [],
};
