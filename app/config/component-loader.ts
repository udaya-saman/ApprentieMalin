import { dynamicComponent } from '../utils/dynamic-import';

// Dynamically import heavy components
export const DynamicSwiper = dynamicComponent(
	() => import('swiper/react').then((mod) => ({ default: mod.Swiper })),
	{ ssr: false },
);

export const DynamicSwiperSlide = dynamicComponent(
	() => import('swiper/react').then((mod) => ({ default: mod.SwiperSlide })),
	{ ssr: false },
);

export const DynamicMotion = {
	div: dynamicComponent(() =>
		import('framer-motion').then((mod) => ({ default: mod.motion.div })),
	),
	section: dynamicComponent(() =>
		import('framer-motion').then((mod) => ({ default: mod.motion.section })),
	),
};

// Add module preloading
export const preloadModules = () => {
	if (typeof window !== 'undefined') {
		// Preload Swiper
		const swiperLink = document.createElement('link');
		swiperLink.rel = 'modulepreload';
		swiperLink.href = '/swiper';
		document.head.appendChild(swiperLink);

		// Preload Framer Motion
		const motionLink = document.createElement('link');
		motionLink.rel = 'modulepreload';
		motionLink.href = '/framer-motion';
		document.head.appendChild(motionLink);
	}
};
