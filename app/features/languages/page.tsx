'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const MultipleLanguages = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('french');

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

	const languages = [
		{
			id: 'french',
			name: 'Français',
			flag: '🇫🇷',
			example: 'Comment puis-je résoudre cette équation?',
			answer: 'Pour résoudre cette équation, il faut isoler la variable x...',
		},
		{
			id: 'english',
			name: 'English',
			flag: '🇬🇧',
			example: 'How do I solve this equation?',
			answer: 'To solve this equation, you need to isolate the variable x...',
		},
		{
			id: 'spanish',
			name: 'Español',
			flag: '🇪🇸',
			example: '¿Cómo resuelvo esta ecuación?',
			answer: 'Para resolver esta ecuación, debe aislar la variable x...',
		},
		{
			id: 'german',
			name: 'Deutsch',
			flag: '🇩🇪',
			example: 'Wie löse ich diese Gleichung?',
			answer:
				'Um diese Gleichung zu lösen, müssen Sie die Variable x isolieren...',
		},
	];

	return (
		<div className='relative overflow-hidden bg-gradient-to-b from-purple-50 to-white'>
			<Header />

			{/* Background elements */}
			<div className='absolute top-40 right-10 w-72 h-72 rounded-full bg-purple-100 mix-blend-multiply opacity-20 filter blur-3xl'></div>
			<div className='absolute top-60 left-10 w-72 h-72 rounded-full bg-blue-100 mix-blend-multiply opacity-20 filter blur-3xl'></div>

			{/* Hero Section */}
			<section className='pt-32 pb-20 relative'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto text-center'
						initial='hidden'
						animate='visible'
						variants={staggerContainer}>
						<motion.h1
							className='text-4xl md:text-6xl font-bold mb-6 text-purple-900'
							variants={fadeInUp}>
							Multiple <span className='text-purple-500'>Languages</span>
						</motion.h1>

						<motion.p
							className='text-xl text-purple-800/70 mb-8'
							variants={fadeInUp}>
							Learn and receive assistance in multiple languages, breaking down
							barriers to education.
						</motion.p>

						<motion.div
							variants={fadeInUp}
							className='flex flex-wrap justify-center gap-3'>
							{languages.map((lang) => (
								<button
									key={lang.id}
									onClick={() => setSelectedLanguage(lang.id)}
									className={`px-4 py-2 rounded-full flex items-center ${
										selectedLanguage === lang.id
											? 'bg-purple-500 text-white'
											: 'bg-white text-purple-700 hover:bg-purple-100'
									} transition-colors duration-200 shadow-sm`}>
									<span className='mr-2'>{lang.flag}</span>
									{lang.name}
								</button>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Language Demo Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-10 text-center text-purple-900'
							variants={fadeInUp}>
							Language in Action
						</motion.h2>

						<div className='bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 md:p-10 shadow-lg border border-purple-100'>
							{languages.map((lang) => (
								<motion.div
									key={lang.id}
									className={`${
										selectedLanguage === lang.id ? 'block' : 'hidden'
									}`}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5 }}>
									<div className='flex items-center mb-6'>
										<span className='text-4xl mr-3'>{lang.flag}</span>
										<h3 className='text-2xl font-bold text-purple-900'>
											{lang.name}
										</h3>
									</div>

									<div className='bg-white rounded-xl p-6 border border-purple-100 mb-6'>
										<div className='flex items-start gap-4'>
											<div className='w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0'>
												<span className='text-sm'>👧</span>
											</div>
											<div className='flex-1'>
												<p className='text-lg font-medium text-purple-800'>
													{lang.example}
												</p>
											</div>
										</div>
									</div>

									<div className='bg-purple-100 rounded-xl p-6 border border-purple-200'>
										<div className='flex items-start gap-4'>
											<div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0'>
												<span className='text-sm'>🤖</span>
											</div>
											<div className='flex-1'>
												<p className='text-lg text-purple-800'>{lang.answer}</p>
											</div>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-16 bg-purple-50'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-10 text-center text-purple-900'
							variants={fadeInUp}>
							Benefits of Multilingual Learning
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									icon: '🌍',
									title: 'Global Access',
									description:
										'Students from different backgrounds can access quality education in their native language.',
								},
								{
									icon: '🧠',
									title: 'Cognitive Benefits',
									description:
										'Learning in multiple languages enhances cognitive development and problem-solving skills.',
								},
								{
									icon: '🔄',
									title: 'Seamless Switching',
									description:
										'Switch between languages at any time while maintaining the context of your learning.',
								},
							].map((benefit, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl p-6 shadow-md border border-purple-100'
									variants={fadeInUp}
									whileHover={{
										y: -5,
										boxShadow: '0 15px 30px rgba(139, 92, 246, 0.1)',
									}}>
									<div className='w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-3xl mb-4 mx-auto'>
										{benefit.icon}
									</div>
									<h3 className='text-xl font-semibold mb-2 text-purple-900 text-center'>
										{benefit.title}
									</h3>
									<p className='text-purple-800/70 text-center'>
										{benefit.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Supported Languages Section */}
			<section className='py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-10 text-center'
							variants={fadeInUp}>
							Supported Languages
						</motion.h2>

						<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
							{[
								{ flag: '🇫🇷', name: 'French' },
								{ flag: '🇬🇧', name: 'English' },
								{ flag: '🇪🇸', name: 'Spanish' },
								{ flag: '🇩🇪', name: 'German' },
								{ flag: '🇮🇹', name: 'Italian' },
								{ flag: '🇵🇹', name: 'Portuguese' },
								{ flag: '🇳🇱', name: 'Dutch' },
								{ flag: '🇯🇵', name: 'Japanese' },
							].map((language, index) => (
								<motion.div
									key={index}
									className='bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center border border-white/20'
									variants={fadeInUp}
									whileHover={{
										scale: 1.05,
										backgroundColor: 'rgba(255, 255, 255, 0.15)',
									}}>
									<span className='text-2xl mr-3'>{language.flag}</span>
									<span className='text-white font-medium'>
										{language.name}
									</span>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto text-center'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6 text-purple-900'
							variants={fadeInUp}>
							Learning Without Language Barriers
						</motion.h2>

						<motion.p
							className='text-xl text-purple-800/70 mb-8'
							variants={fadeInUp}>
							Start your learning journey in the language you're most
							comfortable with.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='/#get-started'
								className='btn btn-primary text-lg px-8 py-4 bg-purple-500 text-white hover:bg-purple-600'>
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

export default MultipleLanguages;
 