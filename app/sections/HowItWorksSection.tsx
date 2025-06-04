'use client';

import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

// Debounce helper function
const debounce = (func: Function, wait: number) => {
	let timeout: NodeJS.Timeout;
	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

// MagicalMascot component
const MagicalMascot = ({
	isVisible,
	x,
	y,
}: {
	isVisible: boolean;
	x: number;
	y: number;
}) => {
	const controls = useAnimationControls();
	const [showExplosion, setShowExplosion] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setShowExplosion(false);
			controls
				.start({
					opacity: [0, 1, 1, 1, 0],
					scale: [0.3, 1.2, 1, 1, 1.2],
					rotate: [0, -5, 5, -5, 5],
					transition: {
						duration: 1.3,
						times: [0, 0.3, 0.4, 0.75, 1],
					},
				})
				.then(() => {
					setShowExplosion(true);
				});
		}
	}, [isVisible, controls]);

	return (
		<>
			<motion.div
				className='fixed pointer-events-none z-50'
				animate={controls}
				initial={{ opacity: 0, scale: 0.3 }}
				style={{
					left: x - 42.5,
					top: y - 42.5,
					width: '85px',
					height: '85px',
				}}>
				<Image
					src='/images/hero-mascot.png'
					alt='Magical Mascot'
					width={85}
					height={85}
					className='w-full h-full object-contain'
				/>
			</motion.div>

			{/* Magical explosion effect */}
			{showExplosion && (
				<motion.div
					className='fixed pointer-events-none z-50'
					initial={{ scale: 0.2, opacity: 0 }}
					animate={{ scale: [0.2, 2, 3], opacity: [0, 1, 0] }}
					transition={{ duration: 1.2 }}
					style={{
						left: x - 42.5,
						top: y - 42.5,
						width: '85px',
						height: '85px',
					}}>
					<div className='absolute inset-0 bg-[#0078f0]/20 rounded-full blur-lg' />

					{/* Magical sparkles */}
					{Array.from({ length: 12 }).map((_, i) => {
						const angle = (i / 12) * Math.PI * 2;
						const distance = 120;
						const randomDelay = Math.random() * 0.3;
						const randomDuration = 0.8 + Math.random() * 0.4;
						const randomSize = 4 + Math.random() * 4;
						const colors = ['#0078f0', '#00f0f0', '#f000f0', '#f0f000'];
						const randomColor =
							colors[Math.floor(Math.random() * colors.length)];

						return (
							<motion.div
								key={i}
								className='absolute rounded-full'
								style={{
									left: '50%',
									top: '50%',
									width: randomSize,
									height: randomSize,
									backgroundColor: randomColor,
								}}
								initial={{ x: 0, y: 0, opacity: 1 }}
								animate={{
									x: Math.cos(angle) * distance,
									y: Math.sin(angle) * distance,
									opacity: 0,
									scale: [1, 0.5, 0],
								}}
								transition={{
									duration: randomDuration,
									delay: randomDelay,
									ease: 'easeOut',
								}}
							/>
						);
					})}
				</motion.div>
			)}
		</>
	);
};

const HowItWorksSection = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	// Update mouse position on move
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	// Enhanced animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 20 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	};

	const robotVariants = {
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.5,
				type: 'spring',
				stiffness: 300,
				damping: 20,
			},
		},
		initial: {
			scale: 1,
		},
	};

	// Features data with enhanced descriptions and icons
	const features = [
		{
			id: 1,
			title: 'Step 2: Log in to your space',
			description:
				'Access your personalized dashboard where all tools are available.',
			icon: '💬',
			position: 'top',
			color: 'from-blue-400 to-cyan-300',
		},
		{
			id: 2,
			title: 'Step 1: Sign up on ApprentieMalin.fr',
			description: 'Create your account and start your free 10-day trial.',
			icon: '🤖',
			position: 'top-left',
			color: 'from-purple-400 to-pink-300',
		},
		{
			id: 3,
			title: 'Step 3: Get help your way',
			description:
				'Choose between AI Chat for written help or Callbots for interactive voice assistance.',
			icon: '⚡',
			position: 'top-right',
			color: 'from-yellow-400 to-orange-300',
		},
	];

	const getPositionClasses = (position: string) => {
		const baseClasses =
			'absolute transform transition-all duration-500 ease-in-out';
		switch (position) {
			case 'top':
				return `${baseClasses} -top-[-325px] left-[35%] -translate-x-1/2`;
			case 'top-left':
				return `${baseClasses} top-[15px] -left-24 -translate-x-1/2`;
			case 'top-right':
				return `${baseClasses} top-[15px] -right-24 translate-x-1/2`;
			case 'bottom-left':
				return `${baseClasses} bottom-[20%] -left-24 -translate-x-1/2`;
			case 'bottom':
				return `${baseClasses} -bottom-[20px] left-[35%] -translate-x-1/2`;
			case 'bottom-right':
				return `${baseClasses} bottom-[20%] -right-24 translate-x-1/2`;
			default:
				return baseClasses;
		}
	};

	// Enhanced hover animation
	const cardHoverAnimation = {
		scale: 1.05,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 25,
		},
	};

	return (
		<Section
			id='how-it-works'
			variant='blue'
			className='relative pt-[150px] pb-0 overflow-hidden'
			style={{
				background: 'linear-gradient(135deg, #0071ed 0%, #00a2ff 100%)',
			}}>
			{/* Background glassmorphism effects */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse' />
				<div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-150' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-300' />
				<div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 animate-twinkle" />
			</div>

			<div className='container mx-auto px-4'>
				<SectionTitle
					title='How It Works?'
					subtitle='Discover how our AI-powered learning assistant helps you master any subject with personalized support'
					titleClassName='text-white text-5xl mb-4 !text-white'
					subtitleClassName='text-white/90 text-xl max-w-5xl mx-auto'
				/>

				<div className='mt-[130px] relative max-w-7xl mx-auto'>
					<motion.div
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						className='relative aspect-square max-w-[800px] mx-auto'>
						{/* Center Robot Image with Animation */}
						<motion.div
							className='absolute top-[-90px] left-0 right-0 flex items-start justify-center z-10'
							initial='initial'
							whileHover='hover'
							variants={robotVariants}>
							<div className='relative w-[400px] h-[400px] group'>
								{/* Robot Image */}
								<Image
									src='/images/sign-up.png'
									alt='ApprentieMailin Bot'
									fill
									className='object-contain drop-shadow-2xl transition-transform duration-500'
									priority
								/>

								{/* Expanding Circle with Random Colors */}
								<div className='absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
									<motion.div
										className='absolute inset-0 rounded-full animate-ping'
										style={{
											borderWidth: '2px',
											borderStyle: 'solid',
											borderColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
										}}
										animate={{
											borderColor: [
												`hsl(${Math.random() * 360}, 70%, 50%)`,
												`hsl(${Math.random() * 360}, 70%, 50%)`,
												`hsl(${Math.random() * 360}, 70%, 50%)`,
												`hsl(${Math.random() * 360}, 70%, 50%)`,
												`hsl(${Math.random() * 360}, 70%, 50%)`,
											],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											repeatType: 'loop',
										}}
									/>
								</div>
							</div>
						</motion.div>

						{/* Feature Cards with Enhanced Interactivity */}
						<AnimatePresence>
							{features.map((feature, index) => (
								<motion.div
									key={feature.id}
									variants={itemVariants}
									whileHover={{
										scale: 1.05,
										rotate: [-1, 1],
										transition: { duration: 0.3 },
									}}
									className={`${getPositionClasses(feature.position)} 
                                    group w-64 cursor-pointer scale-[1.15]`}>
									<div
										className={`										relative p-5 rounded-2xl backdrop-blur-xl
										border border-white/20 dark:border-white shadow-xl
										bg-white/10 dark:bg-[#1e1f23]
										transition-all duration-500 ease-out
										hover:shadow-2xl hover:border-white/30
										bg-gradient-to-br ${feature.color} dark:bg-none opacity-90
										text-center transform-gpu
									`}>
										<div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-white/50 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500' />

										<div className='relative z-10'>
											<motion.div
												className='w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-3 mx-auto'
												whileHover={{
													scale: 1.1,
													rotate: [0, -5, 5, -5, 0],
												}}
												transition={{
													type: 'spring',
													stiffness: 400,
													damping: 10,
												}}>
												{feature.icon}
											</motion.div>
											<h3 className='text-white font-semibold text-base mb-1 group-hover:text-white/90 text-center'>
												{feature.title}
											</h3>
											<p className='text-white/80 text-sm leading-relaxed group-hover:text-white/90 text-center'>
												{feature.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>

			{/* Enhanced Background Decorations */}
			<div className='absolute -bottom-2 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -z-10 animate-pulse' />
			<div className='absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -z-10 animate-pulse delay-700' />
		</Section>
	);
};

export default HowItWorksSection;
