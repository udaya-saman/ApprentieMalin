'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const PersonalizedLearning = () => {
	const [activeCard, setActiveCard] = useState(0);

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: 'easeOut' },
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const cards = [
		{
			id: 1,
			image: '/images/personalized-math.jpg',
			title: 'Mathematics',
			description:
				'Our AI adapts to your math skill level, providing personalized problem sets and explanations that address your specific learning gaps.',
			challenge: 'Division with fractions',
			example:
				'Maria struggled with division involving fractions. Our system recognized this pattern and adapted by providing additional practice and visual explanations.',
			improvement:
				"Maria's proficiency in fraction division improved by 85% in just two weeks.",
		},
		{
			id: 2,
			image: '/images/personalized-science.jpg',
			title: 'Science',
			description:
				'The system identifies which scientific concepts you understand well and which need reinforcement, then tailors lessons accordingly.',
			challenge: 'Understanding photosynthesis',
			example:
				'Ahmed had difficulty grasping the chemical processes in photosynthesis. Our system provided animated visualizations and simplified explanations.',
			improvement:
				"Ahmed's test scores in plant biology improved from a C to an A-.",
		},
		{
			id: 3,
			image: '/images/personalized-language.jpg',
			title: 'Language Arts',
			description:
				'Our AI analyzes your writing patterns and reading comprehension to create a customized language arts curriculum.',
			challenge: 'Grammar and sentence structure',
			example:
				'Sophia frequently made errors with complex sentences. Our system detected these patterns and provided targeted exercises focused on sentence structure.',
			improvement:
				"Sophia's writing clarity improved significantly, with 90% fewer structural errors.",
		},
	];

	return (
		<div className='relative overflow-hidden bg-gradient-to-b from-blue-50 to-white'>
			<Header />

			{/* Background elements */}
			<div className='absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-100 mix-blend-multiply opacity-20 filter blur-3xl'></div>
			<div className='absolute top-60 left-10 w-72 h-72 rounded-full bg-indigo-100 mix-blend-multiply opacity-20 filter blur-3xl'></div>

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
							Personalized <span className='text-blue-500'>Learning</span>
						</motion.h1>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							Education tailored specifically to your child&apos;s unique needs,
							learning style, and pace.
						</motion.p>

						<motion.div variants={fadeInUp} className='mt-8'>
							<Link
								href='#how-it-works'
								className='btn btn-primary text-lg px-8 py-4'>
								Discover How
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id='how-it-works' className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900'
							variants={fadeInUp}>
							How Personalization Works
						</motion.h2>

						<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
							{[
								{
									icon: '🧠',
									title: 'Adaptive Assessment',
									description:
										'Our AI continuously evaluates your child&apos;s performance, identifying strengths and areas for improvement in real-time.',
								},
								{
									icon: '🎯',
									title: 'Custom Curriculum',
									description:
										'We develop individualized learning paths that adapt to your child&apos;s progress, focusing on areas that need attention.',
								},
								{
									icon: '📈',
									title: 'Progress Tracking',
									description:
										'Detailed analytics show your child&apos;s improvement over time, highlighting breakthroughs and identifying new opportunities.',
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className='bg-blue-50 rounded-xl p-6 shadow-md border border-blue-100'
									variants={fadeInUp}
									whileHover={{
										y: -5,
										boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)',
									}}>
									<div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-4 mx-auto'>
										{feature.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2 text-blue-900 text-center'>
										{feature.title}
									</h3>
									<p className='text-blue-800/70 text-center'>
										{feature.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-6xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-4 text-center'
							variants={fadeInUp}>
							Personalized Learning in Action
						</motion.h2>

						<motion.p
							className='text-xl text-white/80 mb-12 text-center max-w-3xl mx-auto'
							variants={fadeInUp}>
							See how our personalized approach transforms learning across
							different subjects
						</motion.p>

						<div className='flex flex-col items-center'>
							<div className='flex space-x-4 mb-8'>
								{cards.map((card, index) => (
									<motion.button
										key={card.id}
										onClick={() => setActiveCard(index)}
										className={`px-6 py-2 rounded-full transition-all ${
											activeCard === index
												? 'bg-white text-blue-600 shadow-lg'
												: 'bg-white/20 hover:bg-white/30'
										}`}
										variants={fadeInUp}>
										{card.title}
									</motion.button>
								))}
							</div>

							<motion.div
								className='bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 w-full max-w-4xl'
								variants={fadeInUp}
								key={activeCard}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
									<div className='rounded-lg overflow-hidden h-64 bg-white/10 flex items-center justify-center'>
										<div className='text-6xl'>
											{activeCard === 0 ? '🧮' : activeCard === 1 ? '🔬' : '📝'}
										</div>
									</div>
									<div>
										<h3 className='text-2xl font-bold mb-4'>
											{cards[activeCard].title} Personalization
										</h3>
										<p className='mb-4 text-white/90'>
											{cards[activeCard].description}
										</p>

										<div className='mt-6 space-y-3'>
											<div>
												<span className='text-blue-200 font-semibold'>
													Challenge:
												</span>
												<p>{cards[activeCard].challenge}</p>
											</div>
											<div>
												<span className='text-blue-200 font-semibold'>
													How We Helped:
												</span>
												<p>{cards[activeCard].example}</p>
											</div>
											<div>
												<span className='text-blue-200 font-semibold'>
													Result:
												</span>
												<p>{cards[activeCard].improvement}</p>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-10 text-center text-blue-900'
							variants={fadeInUp}>
							The Benefits of Personalized Learning
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
							{[
								{
									icon: '⚡',
									title: 'Accelerated Progress',
									description:
										'Students learn 2-3x faster when content is tailored to their specific needs.',
								},
								{
									icon: '🎭',
									title: 'Increased Engagement',
									description:
										'Relevant, personalized content keeps students motivated and reduces frustration.',
								},
								{
									icon: '🧠',
									title: 'Deeper Understanding',
									description:
										'Personalized explanations ensure concepts are truly understood, not just memorized.',
								},
								{
									icon: '💪',
									title: 'Greater Confidence',
									description:
										'Success with tailored content builds self-esteem and academic confidence.',
								},
							].map((benefit, index) => (
								<motion.div
									key={index}
									className='bg-blue-50 rounded-xl p-6 border border-blue-100'
									variants={fadeInUp}
									whileHover={{
										y: -5,
										boxShadow: '0 15px 30px rgba(59, 130, 246, 0.05)',
									}}>
									<div className='text-4xl mb-4'>{benefit.icon}</div>
									<h3 className='text-lg font-semibold mb-2 text-blue-900'>
										{benefit.title}
									</h3>
									<p className='text-blue-800/70 text-sm'>
										{benefit.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-blue-50'>
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
							Experience Personalized Learning Today
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							Give your child the advantage of education that adapts to their
							unique needs.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='/#get-started'
								className='btn btn-primary text-lg px-8 py-4'>
								Get Started
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default PersonalizedLearning;
