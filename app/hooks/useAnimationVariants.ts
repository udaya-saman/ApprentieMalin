import { Variants } from 'framer-motion';

interface AnimationOptions {
	delay?: number;
	staggerChildren?: number;
	delayChildren?: number;
	duration?: number;
	type?: 'spring' | 'tween';
	stiffness?: number;
	damping?: number;
}

const useAnimationVariants = () => {
	// Basic fade up animation
	const fadeUp = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: options.delay || 0,
				type: options.type || 'spring',
				stiffness: options.stiffness || 100,
				damping: options.damping || 15,
				duration: options.duration || undefined,
			},
		},
	});

	// Basic fade in animation
	const fadeIn = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delay: options.delay || 0,
				duration: options.duration || 0.6,
			},
		},
	});

	// Container stagger animation for children elements
	const staggerContainer = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: options.staggerChildren || 0.1,
				delayChildren: options.delayChildren || 0.1,
				duration: options.duration || 0.5,
			},
		},
	});

	// Scale animation
	const scale = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: options.delay || 0,
				type: options.type || 'spring',
				stiffness: options.stiffness || 100,
				damping: options.damping || 15,
			},
		},
	});

	// Slide in from left
	const slideInLeft = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: options.delay || 0,
				type: options.type || 'spring',
				stiffness: options.stiffness || 100,
				damping: options.damping || 15,
			},
		},
	});

	// Slide in from right
	const slideInRight = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				delay: options.delay || 0,
				type: options.type || 'spring',
				stiffness: options.stiffness || 100,
				damping: options.damping || 15,
			},
		},
	});

	return {
		fadeUp,
		fadeIn,
		staggerContainer,
		scale,
		slideInLeft,
		slideInRight,
	};
};

export default useAnimationVariants;
