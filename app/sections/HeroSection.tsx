'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AnimationSequence } from '../types';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const HeroSection = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [currentEffect, setCurrentEffect] = useState(0);
	const [lastHoverEffect, setLastHoverEffect] = useState(-1);
	const [currentHoverEffect, setCurrentHoverEffect] = useState(0);
	const imageControls = useAnimation();
	const imageRef = useRef<HTMLDivElement>(null);

	// Constant subtle floating animation that runs all the time
	const constantAnimation = {
		animate: {
			y: [0, -8, 0],
			scale: [1, 1.01, 1],
		},
		transition: {
			y: {
				duration: 4,
				repeat: Infinity,
				ease: 'easeInOut',
			},
			scale: {
				duration: 4,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	};

	// Array of engaging effects for the mascot
	const mascotEffects = [
		{
			name: 'bounce',
			animate: {
				y: [0, -25, 0],
				scale: [1, 1.08, 1],
			},
			transition: {
				duration: 1.2,
				ease: 'easeInOut',
			},
		},
		{
			name: 'wiggle',
			animate: {
				rotate: [-8, 8, -8, 8, 0],
				scale: [1, 1.05, 1],
			},
			transition: {
				duration: 1.8,
				ease: 'easeInOut',
			},
		},
		{
			name: 'pulse',
			animate: {
				scale: [1, 1.15, 1],
				filter: ['brightness(1)', 'brightness(1.3)', 'brightness(1)'],
			},
			transition: {
				duration: 1.5,
				ease: 'easeInOut',
			},
		},
		{
			name: 'shake',
			animate: {
				x: [-8, 8, -8, 8, 0],
				y: [4, -4, 4, -4, 0],
			},
			transition: {
				duration: 1,
				ease: 'easeInOut',
			},
		},
		{
			name: 'swing',
			animate: {
				rotate: [-15, 15, -8, 8, 0],
				y: [0, -8, 0],
			},
			transition: {
				duration: 2.2,
				ease: 'easeInOut',
			},
		},
		{
			name: 'float',
			animate: {
				y: [0, -20, 0],
				scale: [1, 1.06, 1],
				filter: [
					'drop-shadow(0 5px 15px rgba(59, 130, 246, 0.3))',
					'drop-shadow(0 25px 40px rgba(59, 130, 246, 0.6))',
					'drop-shadow(0 5px 15px rgba(59, 130, 246, 0.3))',
				],
			},
			transition: {
				duration: 2.5,
				ease: 'easeInOut',
			},
		},
		{
			name: 'sparkle',
			animate: {
				scale: [1, 1.08, 1],
				filter: [
					'brightness(1) contrast(1) saturate(1)',
					'brightness(1.4) contrast(1.1) saturate(1.2)',
					'brightness(1) contrast(1) saturate(1)',
				],
			},
			transition: {
				duration: 1.8,
				ease: 'easeInOut',
			},
		},
		{
			name: 'wave',
			animate: {
				rotate: [0, -8, 8, -5, 5, 0],
				y: [0, -5, 5, -3, 3, 0],
			},
			transition: {
				duration: 2.8,
				ease: 'easeInOut',
			},
		},
		{
			name: 'pop',
			animate: {
				scale: [1, 1.2, 0.9, 1.1, 1],
				filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1)'],
			},
			transition: {
				duration: 1.3,
				ease: 'easeInOut',
			},
		},
		{
			name: 'sway',
			animate: {
				x: [-15, 15, -8, 8, 0],
				rotate: [-5, 5, -3, 3, 0],
			},
			transition: {
				duration: 2.3,
				ease: 'easeInOut',
			},
		},
	];

	// Get a random effect different from the last one used
	const getRandomEffect = (lastEffect: number) => {
		let newEffect;
		do {
			newEffect = Math.floor(Math.random() * mascotEffects.length);
		} while (newEffect === lastEffect);
		return newEffect;
	};

	// Effect to change animation every 15 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentEffect((prev) => getRandomEffect(prev));
		}, 15000);

		return () => clearInterval(interval);
	}, []);

	// Combine constant animation with current effect
	const combinedAnimation = {
		animate: {
			...constantAnimation.animate,
			...(mascotEffects[currentEffect]?.animate || {}),
		},
		transition: {
			...constantAnimation.transition,
			...(mascotEffects[currentEffect]?.transition || {}),
		},
	};

	// Get a random effect different from the last hover effect
	const getRandomHoverEffect = () => {
		let newEffect;
		do {
			newEffect = Math.floor(Math.random() * mascotEffects.length);
		} while (newEffect === lastHoverEffect);
		return newEffect;
	};

	// Handle hover start
	const handleHoverStart = () => {
		const newEffect = getRandomHoverEffect();
		setLastHoverEffect(newEffect);
		setCurrentHoverEffect(newEffect);
		setIsHovered(true);

		// Apply the hover animation
		imageControls.start({
			scale: [1, 1.2, 1],
			opacity: [0.2, 0.4, 0.2],
			transition: {
				duration: 0.5,
			},
		});
	};

	// Handle hover end
	const handleHoverEnd = () => {
		setIsHovered(false);
		imageControls.start({
			scale: 1,
			opacity: 0.2,
			transition: {
				duration: 0.3,
			},
		});
	};

	return (
		<Section
			id='hero'
			variant='blue'
			className='min-h-screen flex items-center justify-center overflow-hidden'
			withAnimation={false}>
			<div className='container'>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
					<div className='max-w-xl mx-auto lg:mx-0'>
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
							<span className='text-white'>Smart, Fun, and Personalized</span>{' '}
							<br />
							<span className='text-[#FFD700] font-normal'>
								Learning Support
							</span>
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='text-lg md:text-xl text-white/80 mb-10 max-w-lg'>
							ApprentieMalin uses AI to help primary and middle school students
							with homework, explain concepts, and make learning fun - all
							through WhatsApp.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
							<Button
								href='#get-started'
								variant='primary'
								className='w-full sm:w-auto text-base px-8 py-3'>
								Get Started for Free
							</Button>
							<Button
								href='#how-it-works'
								variant='secondary'
								className='w-full sm:w-auto text-base px-8 py-3'>
								How It Works
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className='mt-3 flex items-center justify-center lg:justify-start'>
							<div className='text-base text-white/80'>
								<span className='font-bold text-white'>1,000+</span> students
								already learning
							</div>
						</motion.div>
					</div>

					<div className='w-full lg:w-1/2 flex justify-center items-center'>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className='relative'>
							<div className='w-[648px] h-[648px] flex items-center justify-center'>
								<motion.div
									initial='initial'
									animate={
										isHovered
											? {
													...mascotEffects[currentHoverEffect].animate,
													scale: 1.1,
											  }
											: combinedAnimation.animate
									}
									transition={
										isHovered
											? {
													...mascotEffects[currentHoverEffect].transition,
													scale: {
														type: 'spring',
														stiffness: 400,
														damping: 25,
													},
											  }
											: combinedAnimation.transition
									}
									style={{
										filter: isHovered
											? 'drop-shadow(0 20px 40px rgba(59, 130, 246, 0.6)) brightness(1.1)'
											: 'drop-shadow(0 5px 15px rgba(59, 130, 246, 0.3))',
									}}
									onHoverStart={handleHoverStart}
									onHoverEnd={handleHoverEnd}
									className='w-full h-full flex items-center justify-center cursor-pointer'>
									<Image
										src='/images/hero-mascot.png'
										alt='ApprentieMalin AI Tutor Mascot'
										width={648}
										height={648}
										priority
										className='w-full h-full object-contain'
									/>
								</motion.div>
							</div>

							{/* Decorative elements */}
							<div className='absolute -z-10 inset-0'>
								<motion.div
									animate={imageControls}
									className='absolute glowing-circle w-[40rem] h-[40rem] -top-32 -right-32 bg-blue-500 mix-blend-screen'
									initial={{
										scale: 1,
										opacity: 0.2,
									}}
								/>
								<motion.div
									animate={imageControls}
									className='absolute glowing-circle w-[36rem] h-[36rem] -bottom-20 -left-20 bg-purple-500 mix-blend-screen'
									initial={{
										scale: 1,
										opacity: 0.2,
									}}
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default HeroSection;
