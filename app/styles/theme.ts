// Theme configuration for the entire application

export const colors = {
	// Primary colors
	primary: {
		50: '#E3F2FD',
		100: '#BBDEFB',
		200: '#90CAF9',
		300: '#64B5F6',
		400: '#42A5F5',
		500: '#1976D2', // Primary blue
		600: '#1565C0',
		700: '#0D47A1',
		800: '#0A3880',
		900: '#072A60',
	},

	// Secondary colors
	secondary: {
		50: '#E4F7FB',
		100: '#C6EEF8',
		200: '#A7E4F4',
		300: '#87DAF1',
		400: '#67D1ED',
		500: '#00B0FF', // Teal
		600: '#00A0E6',
		700: '#0090CC',
		800: '#0080B3',
		900: '#007099',
	},

	// Accent color
	accent: {
		50: '#EAE8FF',
		100: '#D1CEFF',
		200: '#B8B5FF',
		300: '#9E9CFF',
		400: '#8582FF',
		500: '#3D5AFE', // Purple
		600: '#3751E5',
		700: '#3148CC',
		800: '#2B3FB2',
		900: '#243699',
	},

	// Background colors
	background: {
		dark: '#0062E6', // Main background
		light: '#FFFFFF',
	},

	// Navy colors
	navy: {
		50: '#1A2A5E',
		100: '#162553',
		200: '#122048',
		300: '#0E1B3D',
		400: '#0B1632',
		500: '#0F1A3A', // Default navy
		600: '#080F24',
		700: '#05091A',
		800: '#03050F',
		900: '#010205',
	},

	// Opacity white (useful for glass effects)
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
};

export const typography = {
	fontFamily: {
		sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
	},
	fontSizes: {
		xs: '0.75rem', // 12px
		sm: '0.875rem', // 14px
		base: '1rem', // 16px
		lg: '1.125rem', // 18px
		xl: '1.25rem', // 20px
		'2xl': '1.5rem', // 24px
		'3xl': '1.875rem', // 30px
		'4xl': '2.25rem', // 36px
		'5xl': '3rem', // 48px
		'6xl': '3.75rem', // 60px
	},
	fontWeights: {
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
	},
};

export const spacing = {
	space: {
		px: '1px',
		0.5: '0.125rem',
		1: '0.25rem',
		1.5: '0.375rem',
		2: '0.5rem',
		2.5: '0.625rem',
		3: '0.75rem',
		3.5: '0.875rem',
		4: '1rem',
		5: '1.25rem',
		6: '1.5rem',
		7: '1.75rem',
		8: '2rem',
		9: '2.25rem',
		10: '2.5rem',
		12: '3rem',
		14: '3.5rem',
		16: '4rem',
		20: '5rem',
		24: '6rem',
		28: '7rem',
		32: '8rem',
		36: '9rem',
		40: '10rem',
		44: '11rem',
		48: '12rem',
		52: '13rem',
		56: '14rem',
		60: '15rem',
		64: '16rem',
		72: '18rem',
		80: '20rem',
		96: '24rem',
	},
};

export const animations = {
	durations: {
		fast: 0.2,
		normal: 0.3,
		slow: 0.5,
	},
	easings: {
		easeOut: [0, 0, 0.2, 1],
		easeIn: [0.4, 0, 1, 1],
		easeInOut: [0.4, 0, 0.2, 1],
	},
};

export const breakpoints = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
};

export const shadows = {
	sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
	md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
	'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

const theme = {
	colors,
	typography,
	spacing,
	animations,
	breakpoints,
	shadows,
};

export default theme;
