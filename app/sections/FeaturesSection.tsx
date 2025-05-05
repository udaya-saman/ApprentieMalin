'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import config from '../config';

// Debounce helper function
const debounce = (func: Function, wait: number) => {
	let timeout: NodeJS.Timeout;
	return function executedFunction(...args: unknown[]) {
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

const FeaturesSection = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [scrollTriggered, setScrollTriggered] = useState(false);
	const [lastScrollTime, setLastScrollTime] = useState(0);
	const controls = useAnimationControls();

	// Update mouse position on move
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	// Handle scroll events with debounce
	const handleScroll = useCallback(
		debounce(() => {
			const now = Date.now();
			if (now - lastScrollTime > 500) {
				// Prevent triggering too frequently
				setScrollTriggered(true);
				setLastScrollTime(now);

				// Reset the trigger after animation duration
				setTimeout(() => {
					setScrollTriggered(false);
				}, 1500); // Slightly longer than animation duration
			}
		}, 50), // 50ms debounce
		[lastScrollTime],
	);

	// Add scroll event listener
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.4,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.8, y: 50, rotate: -10 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			rotate: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
				duration: 1,
			},
		},
	};

	const floatingAnimation = {
		y: [-8, 8],
		rotate: [-2, 2],
		transition: {
			duration: 3,
			repeat: Infinity,
			repeatType: 'reverse' as const,
			ease: 'easeInOut',
		},
	};

	const magicalGlowAnimation = {
		boxShadow: [
			'0 0 15px rgba(0, 120, 240, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
			'0 0 30px rgba(0, 120, 240, 0.5), 0 0 60px rgba(255, 255, 255, 0.3)',
			'0 0 15px rgba(0, 120, 240, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
		],
		scale: [1, 1.02, 1],
		transition: {
			duration: 2.5,
			repeat: Infinity,
			repeatType: 'reverse' as const,
			ease: 'easeInOut',
		},
	};

	const sparkleAnimation = {
		scale: [1, 1.2, 1],
		opacity: [0.5, 1, 0.5],
		rotate: [0, 180, 360],
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: 'reverse' as const,
		},
	};

	const shimmerAnimation = {
		backgroundPosition: ['200% 0', '-200% 0'],
		transition: {
			duration: 8,
			repeat: Infinity,
			ease: 'linear',
		},
	};

	const generateSparkles = (count: number) => {
		return Array.from({ length: count }).map((_, i) => ({
			id: i,
			size: Math.random() * 4 + 2,
			delay: Math.random() * 2,
			duration: Math.random() * 2 + 1,
			initialPosition: {
				x: Math.random() * 100 - 50,
				y: Math.random() * 100 - 50,
			},
		}));
	};

	return (
		<Section
			id='features'
			variant='white'
			className='relative py-24 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white'>
			{/* Magical background elements */}
			<div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 animate-twinkle" />
			<div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0078f0]/10 to-transparent animate-pulse' />

			{/* Floating magical particles */}
			<div className='absolute inset-0 overflow-hidden'>
				{Array.from({ length: 50 }).map((_, i) => (
					<div
						key={i}
						className='absolute w-1 h-1 bg-[#0078f0]/30 rounded-full animate-float'
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 5}s`,
							animationDuration: `${Math.random() * 3 + 2}s`,
						}}
					/>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='relative z-10'>
				<SectionTitle
					title='Smart Support, Simplified Learning'
					subtitle="Explore the core features that make ApprentieMalin your trusted AI learning partner on WhatsApp – providing safe, instant, and curriculum-aligned help whenever needed."
					titleClassName='text-transparent bg-clip-text bg-gradient-to-r from-[#0078f0] via-[#0078f0]/80 to-[#0078f0] animate-gradient'
					subtitleClassName='text-gray-600'
				/>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 relative z-10'>
				{config.features.main.map((feature, index) => (
					<motion.div
						key={index}
						variants={itemVariants}
						whileHover={{
							scale: 1.03,
							transition: { duration: 0.3 },
						}}
						className='relative group'>
						<motion.div
							animate={floatingAnimation}
							className='relative z-10 h-full'>
							<Card
								variant='glass'
								className='h-full transition-all duration-500 bg-white backdrop-blur-xl border border-[#0078f0]/20 shadow-lg group-hover:shadow-[0_0_30px_rgba(0,120,240,0.3)] group-hover:border-[#0078f0]/30 relative overflow-hidden'>
								<div className='flex flex-col items-center text-center h-full relative p-6 transition-all duration-300 ease-out group-hover:opacity-0 group-hover:scale-90'>
									<motion.div
										whileHover={{
											rotate: [0, -10, 10, -10, 0],
											scale: 1.1,
										}}
										animate={magicalGlowAnimation}
										className='w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#0078f0]/10 to-[#0078f0]/20 rounded-2xl mb-6 text-3xl shadow-lg relative group-hover:from-[#0078f0]/20 group-hover:to-[#0078f0]/30'>
										{generateSparkles(5).map((sparkle) => (
											<motion.div
												key={sparkle.id}
												className='absolute w-2 h-2 bg-[#0078f0]/30 rounded-full'
												animate={{
													scale: [1, 1.5, 1],
													opacity: [0, 1, 0],
													x: [
														sparkle.initialPosition.x,
														sparkle.initialPosition.x * 1.5,
													],
													y: [
														sparkle.initialPosition.y,
														sparkle.initialPosition.y * 1.5,
													],
												}}
												transition={{
													duration: sparkle.duration,
													delay: sparkle.delay,
													repeat: Infinity,
													repeatType: 'reverse' as const,
												}}
											/>
										))}

										<motion.div
											animate={sparkleAnimation}
											className='absolute inset-0 bg-[#0078f0]/20 rounded-2xl blur-md'
										/>
										<motion.div
											animate={shimmerAnimation}
											className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl'
											style={{ backgroundSize: '200% 100%' }}
										/>
										<span className='relative z-10 text-[#0078f0] group-hover:text-[#0078f0] transition-colors duration-300 animate-bounce'>
											{feature.icon}
										</span>
									</motion.div>
									<h3 className='text-xl font-bold mb-4 text-[#0078f0] group-hover:text-[#0078f0] transition-all duration-300'>
										{feature.title}
									</h3>
									<p className='text-gray-600 group-hover:text-gray-700 transition-colors duration-300'>
										{feature.description}
									</p>
								</div>

								<div className='absolute inset-0 flex items-center justify-center p-6 opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto'>
									<button
										className='feature-button'
										aria-label={`Click here for more information about ${feature.title}`}
										onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
											e.stopPropagation();
											console.log('Button clicked for:', feature.title);
										}}>
										<span className='relative z-10 text-white'>
											Click Here..
										</span>
										<span aria-hidden='true' className='feature-button-shine' />
									</button>
								</div>
							</Card>
						</motion.div>

						{/* Enhanced magical glow effect */}
						<motion.div
							className='absolute inset-0 bg-[#0078f0]/10 rounded-2xl blur-xl -z-10'
							animate={{
								scale: [1, 1.2, 1],
								opacity: [0.3, 0.5, 0.3],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatType: 'reverse' as const,
							}}
						/>
					</motion.div>
				))}
			</motion.div>

			{/* Trial Announcement Section */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className='relative z-10 mt-20 mx-auto max-w-5xl'>
				<div className='relative'>
					{/* Robot Image - Positioned on the left */}
					<div className='absolute -top-24 left-16 z-20 transform translate-y-[20px] translate-x-[35px] scale-125'>
						<Image
							src='/images/announce.png'
							alt='AI Learning Assistant'
							width={275}
							height={275}
							className='transform scale-x-100'
						/>
					</div>

					{/* Gradient Box */}
					<div className='bg-gradient-to-r from-[#0077ef] to-[#219aed] rounded-2xl py-12 px-10 overflow-hidden relative'>
						{/* Background decorative elements */}
						<div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 animate-twinkle" />

						{/* Content */}
						<div className='max-w-2xl ml-[340px] text-center'>
							<h3 className='text-xl md:text-2xl font-bold text-white mb-3'>
								Start with a 14-Day Free Trial
							</h3>
							<p className='text-white/90 text-base mb-6 leading-relaxed'>
								Experience the magic of AI-powered learning with ApprentieMalin.
								<br />
								Transform your educational journey today!
							</p>
							<button
								className='px-6 py-3 bg-white text-[#0077ef] rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm'
								onClick={() => console.log('Get Started clicked')}>
								Get Started Now!
							</button>
						</div>
					</div>
				</div>
			</motion.div>

			{/* Enhanced magical background elements */}
			<motion.div
				className='absolute top-20 -left-10 w-96 h-96 bg-[#0078f0]/20 rounded-full blur-3xl -z-10 mix-blend-multiply'
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.2, 0.3, 0.2],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					repeatType: 'reverse' as const,
				}}
			/>
			<motion.div
				className='absolute bottom-20 right-0 w-96 h-96 bg-[#0078f0]/20 rounded-full blur-3xl -z-10 mix-blend-multiply'
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.2, 0.3, 0.2],
				}}
				transition={{
					duration: 4,
					repeat: Infinity,
					repeatType: 'reverse' as const,
					delay: 2,
				}}
			/>

			{/* Magical cursor effect */}
			<motion.div
				className='fixed w-32 h-32 pointer-events-none z-50 mix-blend-multiply'
				animate={{
					x: mousePosition.x - 64,
					y: mousePosition.y - 64,
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 0.5,
					opacity: {
						duration: 2,
						repeat: Infinity,
						repeatType: 'reverse' as const,
					},
				}}>
				<div className='w-full h-full bg-[#0078f0]/20 rounded-full blur-xl' />
			</motion.div>

			{/* Magical Mascot effect - now only triggered by scroll */}
			<MagicalMascot
				isVisible={scrollTriggered}
				x={mousePosition.x}
				y={mousePosition.y}
			/>
		</Section>
	);
};

export default FeaturesSection;
