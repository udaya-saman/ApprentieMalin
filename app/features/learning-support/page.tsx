'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useRef, useEffect } from 'react';

const LearningSupport = () => {
	// For parallax scroll effect
	const pageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (pageRef.current) {
				const scrollY = window.scrollY;
				const sections = pageRef.current.querySelectorAll('.parallax-section');

				sections.forEach((section, index) => {
					const speed = index % 2 === 0 ? 0.1 : 0.05;
					(section as HTMLElement).style.transform = `translateY(${
						scrollY * speed
					}px)`;
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 60 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	// Floating bubbles effect for background
	const bubbles = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		size: Math.random() * 50 + 20,
		left: `${Math.random() * 100}%`,
		animationDelay: `${Math.random() * 15}s`,
		animationDuration: `${Math.random() * 20 + 10}s`,
	}));

	return (
		<div
			className='relative overflow-hidden bg-gradient-to-b from-blue-50 to-white'
			ref={pageRef}>
			<Header />

			{/* Floating bubbles background */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{bubbles.map((bubble) => (
					<motion.div
						key={bubble.id}
						className='absolute rounded-full bg-blue-400 opacity-10'
						style={{
							width: bubble.size,
							height: bubble.size,
							left: bubble.left,
							top: '-10%',
						}}
						animate={{
							y: ['0%', '100vh'],
							x: ['-5%', '5%', '-5%'],
							scale: [1, 1.2, 0.8, 1],
						}}
						transition={{
							y: {
								duration: Number(bubble.animationDuration.replace('s', '')),
								repeat: Infinity,
								ease: 'linear',
								delay: Number(bubble.animationDelay.replace('s', '')),
							},
							x: {
								duration: Number(bubble.animationDuration.replace('s', '')) / 2,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
								delay: Number(bubble.animationDelay.replace('s', '')),
							},
							scale: {
								duration: 5,
								repeat: Infinity,
								repeatType: 'reverse',
								ease: 'easeInOut',
								delay: Number(bubble.animationDelay.replace('s', '')),
							},
						}}
					/>
				))}
			</div>

			{/* Hero Section */}
			<section className='pt-32 pb-20 relative'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto text-center'
						initial='hidden'
						animate='visible'
						variants={staggerContainer}>
						<motion.h1
							className='text-4xl md:text-6xl font-bold mb-6 text-blue-900'
							variants={fadeInUp}>
							24/7 Learning <span className='text-blue-500'>Support</span>
						</motion.h1>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							Get instant homework help and concept explanations whenever you
							need them - day or night.
						</motion.p>

						<motion.div variants={fadeInUp} className='relative inline-block'>
							<Link
								href='#get-started'
								className='btn btn-primary text-lg px-8 py-4'>
								Try It Now
							</Link>
							<motion.div
								className='absolute -inset-1 rounded-full blur-md -z-10 bg-blue-400 opacity-50'
								animate={{
									scale: [1, 1.1, 1],
								}}
								transition={{
									duration: 2,
									repeat: Infinity,
									repeatType: 'reverse',
								}}
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-20 bg-white parallax-section'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900'
							variants={fadeInUp}>
							How 24/7 Learning Works
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									icon: '⚡',
									title: 'Ask Anytime',
									description:
										'Send your question through WhatsApp at any hour of the day or night - our AI tutor never sleeps.',
								},
								{
									icon: '💡',
									title: 'Get Clear Explanations',
									description:
										'Receive step-by-step explanations that are easy to understand and tailored to your grade level.',
								},
								{
									icon: '📝',
									title: 'Practice & Improve',
									description:
										'Follow up with practice problems to reinforce your learning and build confidence.',
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className='bg-blue-50 rounded-xl p-6 shadow-lg border border-blue-100'
									variants={fadeInUp}
									whileHover={{
										y: -10,
										boxShadow: '0 15px 30px rgba(0, 98, 231, 0.1)',
									}}
									transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
									<div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4'>
										{item.icon}
									</div>
									<h3 className='text-xl font-semibold mb-3 text-blue-900'>
										{item.title}
									</h3>
									<p className='text-blue-800/70'>{item.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white parallax-section'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-12 text-center'
							variants={fadeInUp}>
							Benefits for Students
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
							{[
								{
									title: 'Never Feel Stuck Again',
									description:
										"With round-the-clock support, you'll never have to worry about getting stuck on a problem outside of school hours.",
								},
								{
									title: 'Build Confidence',
									description:
										'Understanding concepts clearly builds your confidence and helps you perform better in school.',
								},
								{
									title: 'Learn at Your Pace',
									description:
										"Take your time to understand concepts - there's no rush and no judgment.",
								},
								{
									title: 'Develop Independent Learning',
									description:
										"With guidance available whenever you need it, you'll develop the skills to learn independently.",
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className='bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20'
									variants={fadeInUp}
									whileHover={{
										scale: 1.03,
										backgroundColor: 'rgba(255, 255, 255, 0.15)',
									}}>
									<h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
									<p className='text-white/80'>{item.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Example Questions Section */}
			<section className='py-20 bg-blue-50 parallax-section'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900'
							variants={fadeInUp}>
							Examples of Questions You Can Ask
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-12 text-center'
							variants={fadeInUp}>
							Here are some types of questions our AI tutor can help with:
						</motion.p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							{[
								'How do I solve this equation: 2x + 5 = 15?',
								'Can you explain photosynthesis in simple terms?',
								"What's the difference between a metaphor and a simile?",
								'How do I find the area of a circle?',
								'Can you help me understand the causes of World War I?',
								'What are the parts of speech in English?',
							].map((question, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-lg p-5 shadow-md border border-blue-100'
									variants={fadeInUp}
									whileHover={{
										scale: 1.02,
										boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
									}}>
									<p className='text-blue-800 flex items-start'>
										<span className='bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 mr-3 flex-shrink-0'>
											Q
										</span>
										{question}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-20 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto text-center'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6 text-blue-900'
							variants={fadeInUp}>
							Ready to Transform Your Learning Experience?
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							Start getting 24/7 homework help and watch your understanding
							improve.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='/#get-started'
								className='btn btn-primary text-lg px-8 py-4'>
								Get Started Now
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default LearningSupport;
