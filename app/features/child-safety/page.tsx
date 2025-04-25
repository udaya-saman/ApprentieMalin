'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ChildSafety = () => {
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
							Child-Safe <span className='text-blue-500'>Environment</span>
						</motion.h1>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							A secure learning space designed with your child's safety as our
							top priority.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='#safety-features'
								className='btn btn-primary text-lg px-8 py-4'>
								Explore Safety Features
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Safety Features Section */}
			<section id='safety-features' className='py-16 bg-white'>
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
							Comprehensive Safety Features
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
							<motion.div
								className='bg-blue-50 rounded-xl overflow-hidden shadow-md'
								variants={fadeInUp}>
								<div className='p-8'>
									<div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6'>
										🛡️
									</div>
									<h3 className='text-2xl font-semibold mb-4 text-blue-900'>
										Content Filtering
									</h3>
									<p className='text-blue-800/70 mb-4'>
										Our advanced AI monitoring system automatically filters
										inappropriate content, ensuring all explanations and
										examples are age-appropriate.
									</p>
									<ul className='space-y-2 text-blue-800/70'>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											Real-time content analysis
										</li>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											Inappropriate language detection
										</li>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											Age-appropriate examples only
										</li>
									</ul>
								</div>
							</motion.div>

							<motion.div
								className='bg-blue-50 rounded-xl overflow-hidden shadow-md'
								variants={fadeInUp}>
								<div className='p-8'>
									<div className='w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl mb-6'>
										🔒
									</div>
									<h3 className='text-2xl font-semibold mb-4 text-blue-900'>
										Secure Environment
									</h3>
									<p className='text-blue-800/70 mb-4'>
										Our platform is built with multiple layers of security to
										protect children's privacy and ensure they have a safe
										learning experience.
									</p>
									<ul className='space-y-2 text-blue-800/70'>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											No data collection from minors
										</li>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											Parental controls and oversight
										</li>
										<li className='flex items-start'>
											<span className='text-blue-500 mr-2'>✓</span>
											End-to-end encryption
										</li>
									</ul>
								</div>
							</motion.div>
						</div>

						<motion.div
							className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white'
							variants={fadeInUp}>
							<div className='flex flex-col md:flex-row items-center'>
								<div className='md:w-3/4 mb-6 md:mb-0 md:pr-8'>
									<h3 className='text-2xl font-semibold mb-4'>
										Safety First Design Philosophy
									</h3>
									<p className='text-white/90'>
										We've designed our entire platform with safety as a
										foundational principle, not an afterthought. Every feature,
										interaction, and piece of content is evaluated through a
										child safety lens before implementation.
									</p>
								</div>
								<div className='md:w-1/4 flex justify-center'>
									<div className='w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl'>
										👨‍👩‍👧‍👦
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How We Protect Section */}
			<section className='py-16 bg-gradient-to-b from-white to-blue-50'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-4 text-center text-blue-900'
							variants={fadeInUp}>
							How We Protect Your Child
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-12 text-center max-w-3xl mx-auto'
							variants={fadeInUp}>
							Multiple layers of protection work together to create a secure
							learning environment
						</motion.p>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									icon: '📝',
									title: 'Educational Focus',
									description:
										'Our AI is designed to focus solely on educational content, redirecting any non-educational queries back to the subject material.',
								},
								{
									icon: '👁️',
									title: 'Human Oversight',
									description:
										'Regular human reviews of system interactions ensure our safety measures remain effective and up-to-date.',
								},
								{
									icon: '⚙️',
									title: 'Safety Guardrails',
									description:
										'Built-in guardrails prevent the AI from discussing inappropriate topics or providing harmful information.',
								},
								{
									icon: '👪',
									title: 'Parent Dashboard',
									description:
										'Parents can monitor learning activities, set usage limits, and review session histories through a dedicated dashboard.',
								},
								{
									icon: '🔄',
									title: 'Continuous Improvement',
									description:
										'Our safety systems are continuously updated based on the latest research and feedback from educators and parents.',
								},
								{
									icon: '🛑',
									title: 'Topic Restrictions',
									description:
										"Strict restrictions on sensitive topics ensure conversations remain appropriate for the child's age and educational context.",
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl p-6 shadow-md border border-blue-100'
									variants={fadeInUp}
									whileHover={{
										y: -5,
										boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)',
									}}>
									<div className='text-4xl mb-4'>{feature.icon}</div>
									<h3 className='text-xl font-semibold mb-2 text-blue-900'>
										{feature.title}
									</h3>
									<p className='text-blue-800/70'>{feature.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='py-16 bg-blue-50'>
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
							Parents Trust Our Safety Measures
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{[
								{
									quote:
										"As a parent, I'm always concerned about online safety. ApprentiMalin gives me peace of mind knowing my children are learning in a safe, controlled environment.",
									author: 'Sarah M., Parent of two',
								},
								{
									quote:
										'The parental controls are excellent. I can check what topics my son has been studying and even review the conversations. That transparency is invaluable.',
									author: 'David L., Father',
								},
								{
									quote:
										"My daughter loves using the platform for homework help, and I love that I don't have to worry about inappropriate content or privacy concerns.",
									author: 'Michelle K., Mother',
								},
								{
									quote:
										'As an educator and parent, I appreciate the educational focus that keeps students on track while ensuring their online safety.',
									author: 'Thomas R., Teacher and father',
								},
							].map((testimonial, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl p-6 shadow-sm border border-blue-100'
									variants={fadeInUp}>
									<div className='flex flex-col h-full'>
										<div className='mb-4 text-blue-500'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='48'
												height='48'
												viewBox='0 0 24 24'
												fill='currentColor'
												className='opacity-20'>
												<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
											</svg>
										</div>
										<p className='text-blue-800/70 italic mb-6 flex-grow'>
											{testimonial.quote}
										</p>
										<p className='text-blue-900 font-medium'>
											{testimonial.author}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto text-center'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6'
							variants={fadeInUp}>
							Safe Learning Starts Here
						</motion.h2>

						<motion.p
							className='text-xl text-white/80 mb-8'
							variants={fadeInUp}>
							Give your child a secure environment to learn, explore, and grow
							their knowledge.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='/#get-started'
								className='btn btn-primary bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4'>
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

export default ChildSafety;
