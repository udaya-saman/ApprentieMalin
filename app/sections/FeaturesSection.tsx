'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import config from '../config';
import { FeatureType } from '../types';

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

const FeaturesSection = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	// Update mouse position on move
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

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
			className='relative py-[100px] overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white'>
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
					title='Our Key Features'
					subtitle='Explore the core features that make ApprentieMalin your trusted AI learning partner on WhatsApp – providing safe, instant, and curriculum-aligned help whenever needed.'
					titleClassName='text-transparent'
					subtitleClassName='text-gray-600'
				/>
			</motion.div>

			<motion.div
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 relative z-10 max-w-5xl mx-auto'>
				{config.features.main.map((feature, index) => {
					const cardBgColors = [
						'bg-[#fdf2f8]',
						'bg-[#fefbe8]',
						'bg-[#e4f2fd]',
						'bg-[#f0fdf4]',
					];
					const iconBgColors = [
						'bg-white/20 backdrop-blur-sm border border-white/30',
						'bg-blue-50/30 backdrop-blur-sm border border-blue-100/40',
						'bg-blue-100/20 backdrop-blur-sm border border-blue-200/30',
						'bg-blue-50/25 backdrop-blur-sm border border-blue-100/35',
					];

					return (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{
								scale: 1.05,
								y: -10,
								transition: { duration: 0.4, ease: 'easeOut' },
							}}
							animate={{
								y: [0, -5, 0],
								transition: {
									duration: 3,
									repeat: Infinity,
									ease: 'easeInOut',
									delay: index * 0.5,
								},
							}}
							className='relative group'>
							<motion.div className='relative z-10 h-full'>
								<Card
									variant='glass'
									className={`h-full min-h-[280px] transition-all duration-500 bg-white backdrop-blur-sm border border-blue-500/20 shadow-lg hover:shadow-2xl hover:shadow-gray-300/30 relative overflow-hidden rounded-2xl group-hover:bg-white group-hover:scale-105`}>
									{/* Animated background gradient */}
									<div className='absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

									{/* Floating particles effect */}
									<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700'>
										{Array.from({ length: 8 }).map((_, i) => (
											<motion.div
												key={i}
												className='absolute w-1 h-1 bg-blue-400/60 rounded-full'
												style={{
													left: `${20 + i * 10}%`,
													top: `${30 + i * 5}%`,
												}}
												animate={{
													y: [-10, -30, -10],
													opacity: [0, 1, 0],
													scale: [0.5, 1, 0.5],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													delay: i * 0.2,
													ease: 'easeInOut',
												}}
											/>
										))}
									</div>

									{/* Default View */}
									<div className='flex flex-col items-center text-center h-full relative p-8 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-95 group-hover:-translate-y-2'>
										<motion.div
											className={`w-20 h-20 flex items-center justify-center ${iconBgColors[index]} rounded-2xl mb-6 text-3xl relative overflow-hidden`}
											whileHover={{
												rotate: [0, -10, 10, 0],
												scale: 1.1,
												transition: { duration: 0.6, ease: 'easeInOut' },
											}}
											animate={{
												boxShadow: [
													'0 0 20px rgba(59, 130, 246, 0.3)',
													'0 0 30px rgba(59, 130, 246, 0.5)',
													'0 0 20px rgba(59, 130, 246, 0.3)',
												],
											}}
											transition={{
												boxShadow: {
													duration: 2,
													repeat: Infinity,
													ease: 'easeInOut',
												},
											}}>
											{/* Icon shimmer effect */}
											<div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000' />

											<motion.div
												className='relative z-10 w-[72px] h-[72px]'
												animate={{
													scale: [1, 1.1, 1],
												}}
												transition={{
													duration: 2,
													repeat: Infinity,
													ease: 'easeInOut',
													delay: index * 0.3,
												}}>
												<Image
													src={`/images/icon/f_icon${index + 1}.jpg`}
													alt={`${feature.title} icon`}
													width={72}
													height={72}
													className='w-full h-full object-cover rounded-lg'
												/>
											</motion.div>
										</motion.div>

										<motion.h3
											className='text-xl font-bold mb-4 text-gray-900 dark:text-white leading-tight dark:!bg-none dark:!bg-clip-border dark:!text-white'
											animate={{
												backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: 'linear',
											}}
											style={{
												background:
													'linear-gradient(90deg, #1f2937, #3b82f6, #1f2937)',
												backgroundSize: '200% auto',
												WebkitBackgroundClip: 'text',
												WebkitTextFillColor: 'transparent',
												backgroundClip: 'text',
											}}>
											{feature.title}
										</motion.h3>

										<motion.p
											className='text-gray-600 dark:text-white text-sm leading-relaxed'
											initial={{ opacity: 0.8 }}
											whileHover={{ opacity: 1, scale: 1.02 }}
											transition={{ duration: 0.3 }}>
											{feature.description}
										</motion.p>
									</div>

									{/* Hover View */}
									<div className='absolute inset-0 px-6 py-1.5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out bg-white dark:bg-transparent rounded-xl overflow-hidden'>
										<div className='flex flex-col'>
											<div className='bg-blue-50/70 dark:bg-transparent p-4 mt-1.5 rounded-lg border-l-3 border-[#0078f0]'>
												<p className='font-medium text-[#0078f0] mb-2 text-sm'>
													How it works
												</p>
												<p className='text-gray-700 leading-relaxed text-sm'>
													{feature.details?.howItWorks}
												</p>
											</div>

											<div className='bg-emerald-50/70 dark:bg-transparent p-4 rounded-lg border-l-3 border-emerald-500'>
												<p className='font-medium text-emerald-700 mb-2 text-sm'>
													Benefits
												</p>
												<p className='text-gray-700 leading-relaxed text-sm'>
													{feature.details?.benefits}
												</p>
											</div>

											<div className='bg-purple-50/70 dark:bg-transparent p-4 mb-1.5 rounded-lg border-l-3 border-purple-500'>
												<p className='font-medium text-purple-700 mb-2 text-sm'>
													Best for
												</p>
												<p className='text-gray-700 leading-relaxed text-sm'>
													{feature.details?.bestFor}
												</p>
											</div>
										</div>
									</div>
								</Card>
							</motion.div>

							{/* Subtle glow effect */}
							<div className='absolute inset-0 bg-gradient-to-br from-[#0078f0]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10' />
						</motion.div>
					);
				})}
			</motion.div>

			{/* Trial Announcement Section */}
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3 }}
				className='relative z-10 mt-20 mx-auto max-w-5xl'>
				<div className='relative'>
					{/* Robot Image - Enhanced Animation */}
					<motion.div
						className='absolute -top-24 left-16 z-20 transform translate-y-[20px] translate-x-[35px]'
						initial={{
							opacity: 0,
							x: -100,
							y: 50,
							scale: 0.8,
							rotate: -15,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
							y: 0,
							scale: 1.2,
							rotate: 0,
						}}
						whileHover={{
							scale: 1.32,
							rotate: [0, -3, 3, 0],
							y: -8,
							transition: {
								duration: 0.6,
								ease: 'easeInOut',
								rotate: {
									duration: 0.8,
									repeat: Infinity,
									repeatType: 'reverse',
								},
							},
						}}
						viewport={{ once: true }}
						transition={{
							type: 'spring',
							stiffness: 80,
							damping: 20,
							delay: 0.2,
							duration: 1.2,
						}}
						style={{
							filter: 'drop-shadow(0 4px 20px rgba(0, 120, 240, 0.3))',
							transform: 'scale(1.2) !important',
						}}>
						<motion.div
							animate={{
								y: [-3, 3],
								rotate: [-1, 1],
							}}
							whileHover={{
								y: [-6, 6],
								rotate: [-2, 2],
								filter: [
									'drop-shadow(0 8px 30px rgba(0, 120, 240, 0.4)) brightness(1)',
									'drop-shadow(0 12px 40px rgba(0, 120, 240, 0.6)) brightness(1.1)',
									'drop-shadow(0 8px 30px rgba(0, 120, 240, 0.4)) brightness(1)',
								],
							}}
							transition={{
								duration: 3,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
								whileHover: {
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'reverse',
									ease: 'easeInOut',
								},
							}}>
							<Image
								src='/images/announce.png'
								alt='AI Learning Assistant'
								width={275}
								height={275}
								className='transform scale-x-100 cursor-pointer'
							/>
						</motion.div>
					</motion.div>

					{/* Gradient Box - Enhanced Animation */}
					<motion.div
						className='bg-gradient-to-r from-[#0077ef] to-[#219aed] dark:bg-[#47484c] dark:border dark:border-white rounded-2xl py-12 px-10 overflow-hidden relative'
						initial={{
							opacity: 0,
							scale: 0.9,
							y: 30,
							rotateX: 10,
						}}
						whileInView={{
							opacity: 1,
							scale: 1,
							y: 0,
							rotateX: 0,
						}}
						viewport={{ once: true }}
						transition={{
							type: 'spring',
							stiffness: 100,
							damping: 25,
							delay: 0.4,
							duration: 1,
						}}>
						{/* Background decorative elements */}
						<motion.div
							className="absolute inset-0 bg-[url('/stars.png')] opacity-10"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 0.1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.8, duration: 1 }}
							animate={{
								backgroundPosition: ['0% 0%', '100% 100%'],
							}}
							style={{
								backgroundSize: '20px 20px',
							}}
						/>

						{/* Content */}
						<motion.div
							className='max-w-2xl ml-[340px] text-center'
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								delay: 0.6,
								duration: 0.8,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}>
							<motion.h3
								className='text-xl md:text-2xl font-bold text-white mb-3'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: 0.8,
									duration: 0.6,
								}}>
								Start with a 10-Day Free Trial
							</motion.h3>
							<motion.p
								className='text-white/90 text-base mb-6 leading-relaxed'
								initial={{ opacity: 0, y: 15 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									delay: 1,
									duration: 0.6,
								}}>
								Experience the magic of AI-powered learning with ApprentieMalin.
								<br />
								Transform your educational journey today!
							</motion.p>
							<motion.a
								href='/create-account'
								className='inline-block px-6 py-3 bg-white text-[#1e1f23] rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-sm'
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								whileHover={{
									scale: 1.08,
									y: -3,
									boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
								}}
								whileTap={{
									scale: 0.95,
									y: 0,
								}}
								viewport={{ once: true }}
								transition={{
									delay: 1.2,
									duration: 0.5,
									type: 'spring',
									stiffness: 200,
									damping: 20,
								}}>
								Get Started Now!
							</motion.a>
						</motion.div>
					</motion.div>
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
		</Section>
	);
};

export default FeaturesSection;
