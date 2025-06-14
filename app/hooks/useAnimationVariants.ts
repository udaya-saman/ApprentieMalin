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

// Enhanced easing functions for more dynamic animations
const smoothEasing = [0.25, 0.46, 0.45, 0.94];
const dynamicEasing = [0.4, 0, 0.2, 1];
const springEasing = [0.26, 0.08, 0.25, 1];

const useAnimationVariants = () => {
	// Enhanced fade up animation with better spring physics
	const fadeUp = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			y: 60,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 20,
				mass: 1,
				delay: options.delay || 0,
				duration: options.duration || 0.8,
			},
		},
	});

	// Enhanced fade in animation with subtle scale
	const fadeIn = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0,
			scale: 0.98
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: options.duration || 0.7,
				delay: options.delay || 0,
				ease: smoothEasing,
			},
		},
	});

	// Enhanced container stagger animation with better timing
	const staggerContainer = (options: AnimationOptions = {}): Variants => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: options.duration || 0.6,
				staggerChildren: options.staggerChildren || 0.15,
				delayChildren: options.delayChildren || 0.2,
				ease: dynamicEasing,
			},
		},
	});

	// Enhanced scale animation with spring physics
	const scale = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			scale: 0.8,
			y: 20
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 150,
				damping: 25,
				mass: 0.8,
				delay: options.delay || 0,
			},
		},
	});

	// Enhanced slide in from left with bounce
	const slideInLeft = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			x: -80,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 120,
				damping: 22,
				mass: 1,
				delay: options.delay || 0,
			},
		},
	});

	// Enhanced slide in from right with bounce
	const slideInRight = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			x: 80,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			x: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 120,
				damping: 22,
				mass: 1,
				delay: options.delay || 0,
			},
		},
	});

	// New: Enhanced slide up animation with more dramatic effect
	const slideUp = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			y: 100,
			scale: 0.9
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 80,
				damping: 18,
				mass: 1.2,
				delay: options.delay || 0,
			},
		},
	});

	// New: Slide down animation for variety
	const slideDown = (options: AnimationOptions = {}): Variants => ({
		hidden: { 
			opacity: 0, 
			y: -80,
			scale: 0.95
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 20,
				mass: 1,
				delay: options.delay || 0,
			},
		},
	});

	// Enhanced hover animations with more fluid motion
	const hover = {
		scale: 1.03,
		y: -8,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 25,
			mass: 0.8,
		},
	};

	// Enhanced tap animations
	const tap = {
		scale: 0.97,
		transition: {
			type: 'spring',
			stiffness: 600,
			damping: 30,
			mass: 0.5,
		},
	};

	return {
		fadeUp,
		fadeIn,
		staggerContainer,
		scale,
		slideInLeft,
		slideInRight,
		slideUp,
		slideDown,
		hover,
		tap,
	};
};

export default useAnimationVariants;
