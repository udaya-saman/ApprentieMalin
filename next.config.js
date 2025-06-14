/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: process.env.NODE_ENV === 'production',
	images: {
		formats: ['image/avif', 'image/webp'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	// Disable experimental features in development
	experimental:
		process.env.NODE_ENV === 'production'
			? {
					optimizeCss: true,
					optimizePackageImports: ['framer-motion', 'swiper'],
			  }
			: {},
	poweredByHeader: false,
	compress: true,
};

module.exports = nextConfig;
