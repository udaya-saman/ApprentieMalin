'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AnimationSequence {
	animate: {
		x: number[];
		y: number[];
		rotate?: number[];
		scale?: number[];
	};
	transition: {
		x: { duration: number; repeat: number; ease: string };
		y: { duration: number; repeat: number; ease: string };
		rotate?: { duration: number; repeat: number; ease: string };
		scale?: { duration: number; repeat: number; ease: string };
	};
	filter: string;
}

const HeroSection = () => {
	// Animation controls and state
	const imageControls = useAnimation();
	const imageRef = useRef<HTMLDivElement>(null);
	const [currentAnimation, setCurrentAnimation] = useState(0);

	// Multiple animation sequences for variety
	const animationSequences: AnimationSequence[] = [
		// Animation 1: Side to side with slight bobbing
		{
			animate: {
				x: [0, 15, 0, -15, 0],
				y: [0, -5, 0, -5, 0],
				rotate: [0, 1, 0, -1, 0],
			},
			transition: {
				x: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
				y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
				rotate: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
			},
			filter: 'drop-shadow(0 5px 15px rgba(59, 130, 246, 0.2))',
		},
		// Animation 2: Playful bounce with larger rotations
		{
			animate: {
				y: [0, -20, 0],
				x: [0, -10, 10, 0],
				rotate: [0, -2, 2, 0],
				scale: [1, 1.05, 1],
			},
			transition: {
				y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
				x: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
				rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
				scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
			},
			filter: 'drop-shadow(0 10px 20px rgba(16, 185, 129, 0.25))',
		},
		// Animation 3: Wave-like movement
		{
			animate: {
				x: [0, 20, -20, 0],
				rotate: [0, 1.5, -1.5, 0],
				y: [0, -8, -4, 0],
			},
			transition: {
				x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
				rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
				y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
			},
			filter: 'drop-shadow(0 8px 16px rgba(124, 58, 237, 0.2))',
		},
		// Animation 4: Excited scanning and slight hovering
		{
			animate: {
				x: [0, -15, 15, 0],
				y: [0, -5, -10, -5, 0],
				rotate: [0, -1, 0, 1, 0],
				scale: [1, 1.02, 1, 1.02, 1],
			},
			transition: {
				x: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
				y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
				rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
				scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
			},
			filter: 'drop-shadow(0 6px 12px rgba(236, 72, 153, 0.2))',
		},
	];

	// Standard animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.3,
				duration: 0.8,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 30, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8, rotate: -5 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: { type: 'spring', stiffness: 80, damping: 15, delay: 1.0 },
		},
	};

	// Change animation every 8-12 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentAnimation((prev) => (prev + 1) % animationSequences.length);
		}, Math.random() * 4000 + 8000); // Random interval between 8-12 seconds

		return () => clearInterval(interval);
	}, []);

	// Hover animation effect
	const hoverAnimation = {
		scale: 1.08,
		rotate: [0, -3, 3, 0],
		transition: {
			scale: {
				duration: 0.3,
				ease: 'easeOut',
			},
			rotate: {
				duration: 0.5,
				ease: 'easeInOut',
				repeat: Infinity,
			},
		},
	};

	const renderHeroContent = () => (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			className='max-w-xl mx-auto lg:mx-0'>
			<motion.h1
				variants={itemVariants}
				className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
				<span className='gradient-text'>Smart, Fun, and Personalized</span>{' '}
				<span className='text-[#dbd957] font-normal'>Learning Support</span>
			</motion.h1>

			<motion.p
				variants={itemVariants}
				className='text-base md:text-lg text-white mb-8'>
				ApprentieMalin uses AI to help primary and middle school students with
				homework, explain concepts, and make learning fun and all through
				WhatsApp.
			</motion.p>

			<motion.div
				variants={itemVariants}
				transition={{ delay: 0.6 }}
				className='flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4'>
				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}>
					<Link href='#get-started' className='btn btn-primary'>
						Get Started for Free
					</Link>
				</motion.div>

				<motion.div
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0 }}>
					<Link href='#how-it-works' className='btn btn-secondary'>
						How It Works
					</Link>
				</motion.div>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className='mt-4 flex items-center justify-center lg:justify-start'>
				<motion.div
					className='text-sm text-white/70'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, type: 'spring' }}>
					<span className='font-bold text-white'>500+</span> students already
					learning
				</motion.div>
			</motion.div>
		</motion.div>
	);

	const renderHeroImage = () => (
		<div className='w-full lg:w-1/2 flex justify-center items-start lg:pt-8'>
			<div className='relative' style={{ touchAction: 'none' }}>
				{/* Base image container with continual presence */}
				<motion.div
					className='relative'
					variants={imageVariants}
					initial='hidden'
					animate='visible'
					ref={imageRef}>
					{/* Container for the image that stays constant */}
					<div className='w-[450px] h-[450px] flex items-center justify-center'>
						{/* The actual animation switching happens here */}
						<motion.div
							key={currentAnimation}
							// No initial fade-in, just a quick pop effect
							initial={{ scale: 0.95 }}
							animate={{
								scale: 1,
								...animationSequences[currentAnimation].animate,
							}}
							// Add a quick pop effect when changing animations
							exit={{ scale: 1.1, opacity: 0.8 }}
							transition={{
								// Quick scale transition for the pop effect
								scale: { duration: 0.2, type: 'spring', stiffness: 300 },
								// Other animation properties
								...animationSequences[currentAnimation].transition,
							}}
							whileHover={hoverAnimation}
							className='w-full h-full flex items-center justify-center'
							style={{
								filter: animationSequences[currentAnimation].filter,
								position: 'absolute',
								top: 0,
								left: 0,
							}}>
							{/* Main robot image */}
							<Image
								src='/images/ApprentieMalin.png'
								alt='AI Assistant'
								width={450}
								height={450}
								priority={false}
								className='w-full h-auto'
								style={{
									objectFit: 'contain',
								}}
							/>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);

	return (
		<section className='w-full h-screen pt-12 section-blue'>
			<div className='container h-full flex flex-col justify-center'>
				<div className='flex flex-col lg:flex-row items-center lg:items-start justify-between lg:space-x-8 -mt-10'>
					{/* Left column: Text content */}
					<div className='w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 lg:pt-20'>
						{renderHeroContent()}
					</div>

					{/* Right column: ApprentieMalin image with varied animations */}
					{renderHeroImage()}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
