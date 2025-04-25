'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const FeaturesSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
	const router = useRouter();

	const features = [
		{
			title: '24/7 Learning Support',
			description:
				'Get instant help with homework, difficult concepts, and exam prep anytime you need it.',
			icon: '⏰',
			color: 'bg-gradient-to-br from-blue-400 to-blue-600',
			path: '/features/learning-support',
		},
		{
			title: 'Chat on WhatsApp',
			description:
				'No new apps to download! Use the WhatsApp you already have to connect with your AI tutor.',
			icon: '💬',
			color: 'bg-gradient-to-br from-green-400 to-green-600',
			path: '/features/whatsapp-chat',
		},
		{
			title: 'Personalized Learning',
			description:
				'Get explanations tailored to your grade level, learning style, and pace.',
			icon: '🎯',
			color: 'bg-gradient-to-br from-purple-400 to-purple-600',
			path: '/features/personalized-learning',
		},
		{
			title: 'Interactive Practice',
			description:
				'Reinforce what you learn with fun practice questions and immediate feedback.',
			icon: '✏️',
			color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
			path: '/features/interactive-practice',
		},
		{
			title: 'Child-Safe Environment',
			description:
				'Content filters and safety measures ensure all interactions are age-appropriate.',
			icon: '🛡️',
			color: 'bg-gradient-to-br from-red-400 to-red-600',
			path: '/features/child-safety',
		},
		{
			title: 'Multiple Languages',
			description:
				'Get help in your preferred language to make learning easier and more effective.',
			icon: '🌍',
			color: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
			path: '/features/languages',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: 'spring', stiffness: 50, damping: 10 },
		},
	};

	const handleCardClick = (path: string) => {
		router.push(path);
	};

	return (
		<section
			id='features'
			className='py-12 pt-[60px] section-white relative overflow-hidden'>
			{/* Background decorative elements */}
			<div className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 opacity-20 blur-3xl'></div>
			<div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-100 opacity-20 blur-3xl'></div>

			<div className='container relative z-10'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					className='max-w-4xl mx-auto text-center mb-12'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Supercharge Your <span className='gradient-text'>Learning</span>
					</h2>
					<motion.p
						variants={itemVariants}
						className='section-subtitle max-w-3xl'>
						Explore the tools and benefits that make our AI tutor an
						indispensable companion for young learners. Discover how
						ApprentieMalin transforms homework struggles into learning
						opportunities.
					</motion.p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className='bg-white rounded-xl shadow-lg overflow-hidden border border-blue-50 transition-all duration-300 cursor-pointer'
							style={{
								transform:
									hoveredFeature === index
										? 'translateY(-8px) scale(1.03)'
										: 'none',
								boxShadow:
									hoveredFeature === index
										? '0 12px 30px rgba(0, 98, 231, 0.15)'
										: '0 4px 6px rgba(0, 98, 231, 0.05)',
							}}
							whileHover={{
								scale: 1.03,
								transition: { type: 'spring', stiffness: 300, damping: 20 },
							}}
							onClick={() => handleCardClick(feature.path)}
							onMouseEnter={() => setHoveredFeature(index)}
							onMouseLeave={() => setHoveredFeature(null)}>
							<div className='relative h-48 overflow-hidden'>
								<div
									className={`absolute inset-0 ${feature.color} opacity-90`}></div>

								{/* Feature icon with animation */}
								<motion.div
									className='absolute inset-0 flex items-center justify-center'
									animate={
										hoveredFeature === index
											? {
													scale: [1, 1.2, 1.1],
													rotate: [0, 5, -5, 0],
													transition: {
														duration: 0.5,
														repeat: 1,
														repeatType: 'reverse',
													},
											  }
											: { scale: 1 }
									}>
									<span className='text-6xl'>{feature.icon}</span>
								</motion.div>

								{/* Animated particles on hover */}
								{hoveredFeature === index && (
									<>
										{[...Array(8)].map((_, i) => (
											<motion.div
												key={`particle-${i}`}
												className='absolute w-3 h-3 rounded-full bg-white'
												initial={{
													x: 0,
													y: 0,
													opacity: 0.9,
													scale: 0,
												}}
												animate={{
													x: (Math.random() - 0.5) * 150,
													y: (Math.random() - 0.5) * 150,
													opacity: [0.9, 0],
													scale: [0, 1.5, 0],
												}}
												style={{
													top: '50%',
													left: '50%',
												}}
												transition={{
													duration: 1.5 + Math.random(),
													repeat: Infinity,
													delay: i * 0.15,
												}}
											/>
										))}
									</>
								)}
							</div>
							<div className='p-6'>
								<h3 className='text-xl font-bold text-blue-900 mb-2 flex items-center'>
									{feature.title}
								</h3>
								<p className='text-blue-900/70'>{feature.description}</p>

								<motion.div
									className='mt-4 inline-flex items-center text-blue-600 font-medium'
									initial={{ opacity: 0, x: -10 }}
									animate={{
										opacity: hoveredFeature === index ? 1 : 0,
										x: hoveredFeature === index ? 0 : -10,
										transition: { duration: 0.3 },
									}}>
									Learn more
									<svg
										className='w-4 h-4 ml-1'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 5l7 7-7 7'
										/>
									</svg>
								</motion.div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className='mt-12 text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ delay: 0.8, duration: 0.5 }}>
					<Link href='#get-started'>
						<motion.button
							className='btn btn-primary relative overflow-hidden px-8 py-4'
							whileHover={{
								scale: 1.05,
								boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
							}}
							whileTap={{ scale: 0.95 }}>
							<span className='relative z-10'>Start Learning Today</span>

							{/* Animated highlight effect */}
							<motion.div
								className='absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600'
								animate={{
									x: ['-100%', '100%'],
								}}
								transition={{
									duration: 3,
									repeat: Infinity,
									repeatType: 'loop',
									ease: 'linear',
								}}
								style={{ opacity: 0.5 }}
							/>
						</motion.button>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturesSection;
