'use client';

import Link from 'next/link';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function FeaturesPage() {
	return (
		<main className='min-h-screen bg-white pt-[100px]'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-4 md:py-5' variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto text-center'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							<h1 className='text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-8 leading-tight'>
								Powerful Features of ApprentieMalin
							</h1>
							<p className='text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed'>
								ApprentieMalin provides your child with a complete range of
								intelligent tools designed to help them overcome difficulties,
								deepen their knowledge, and develop their autonomy. Discover how
								our AI and specialized Callbots make learning more accessible,
								effective, and engaging.
							</p>
						</motion.div>
					</div>
				</div>
			</AnimatedSection>

			{/* AI Chat Section */}
			<AnimatedSection className='w-full py-10' variant='slideUp' delay={0.1}>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<AnimatedCard delay={0.2} variant='slideUp'>
							<div className='bg-white rounded-3xl p-10 md:p-12 shadow-xl/40 border border-gray-100/50 hover:shadow-2xl/40 transition-all duration-500'>
								<div className='flex items-center gap-4 mb-8'>
									<div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg'>
										<svg
											className='w-8 h-8'
											fill='none'
											stroke='white'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
											/>
										</svg>
									</div>
									<h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
										The ApprentieMalin Intelligent Chat
									</h2>
								</div>
								<p className='text-lg text-gray-600 mb-10 leading-relaxed'>
									Access our specialized AI directly on your ApprentieMalin space.
									Ask all your homework questions in writing, send photos of your
									exercises, and receive personalized help to understand and
									progress.
								</p>
								<div className='space-y-4 mb-10'>
									<ul className='grid gap-6'>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg className='w-4 h-4' fill='white' viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Instant help: Get answers to your questions in seconds
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg className='w-4 h-4' fill='white' viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Photo support: Send photos of your exercises for detailed
												explanations
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg className='w-4 h-4' fill='white' viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Learns from you: The more you use the chat, the more the
												AI understands your difficulties and adapts its help to
												your way of learning
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg className='w-4 h-4' fill='white' viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Accessibility: Available 24/7 from your web space
											</span>
										</li>
									</ul>
								</div>
								<div className='p-6 rounded-2xl border-l-4 border-blue-500 bg-blue-50/50 shadow-sm dark:bg-[#282c35]'>
									<p
										className='font-medium leading-relaxed'
										style={{ color: '#1875cf' }}>
										<span className='font-bold'>Advantages for students:</span>{' '}
										Easy rereading of explanations, ideal for quick questions,
										practical for students who prefer to write, discreet help.
									</p>
								</div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Homework Callbot Section */}
			<AnimatedSection
				className='w-full py-10'
				delay={0.3}
				staggerChildren
				variant='slideInLeft'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<AnimatedCard delay={0.2} variant='slideUp'>
							<div className='bg-white rounded-3xl p-10 md:p-12 shadow-xl/40 border border-gray-100/50 hover:shadow-2xl/40 transition-all duration-500'>
								<motion.div
									className='flex items-center gap-4 mb-8'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}>
									<div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg'>
										<svg
											className='w-8 h-8'
											fill='none'
											stroke='white'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
											/>
										</svg>
									</div>
									<h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
										The Vocal Homework Help Callbot
									</h2>
								</motion.div>
								<motion.p
									className='text-lg text-gray-600 mb-10 leading-relaxed'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}>
									For students who learn better by listening or who prefer to
									talk about their difficulties, the Homework Help Callbot
									offers interactive voice assistance, available by call from
									your ApprentieMalin space.
								</motion.p>
								<div className='space-y-8'>
									<motion.h3
										className='text-xl font-semibold text-gray-900 mb-6'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.3 }}>
										Key Features
									</motion.h3>
									<motion.ul
										className='grid gap-6'
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.4 }}>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Understands your questions asked orally: Explain your
												problem by speaking, as you would with a teacher
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Guides verbally step by step: The Callbot asks you
												questions aloud, gives you clues, and helps you solve
												the problem by dialoguing with you
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Adapts its explanations: If you don't understand a first
												explanation, the Callbot can rephrase it differently
												orally
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Learns from your voice interactions: The Callbot
												memorizes your difficulties to better adapt its help
												during future calls
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Specialized by subject and level: Access an expert
												Callbot specifically trained for the Mathematics 6th
												grade, French 5th grade, History-Geography 8th grade,
												etc. programs
											</span>
										</li>
									</motion.ul>
								</div>
								<motion.div
									className='mt-10 p-6 rounded-2xl border-l-4 border-green-500 bg-green-50/50 shadow-sm dark:bg-[#282c35]'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.5 }}>
									<p
										className='font-medium leading-relaxed'
										style={{ color: '#1875cf' }}>
										<span className='font-bold'>Advantages for students:</span>{' '}
										Dynamic interaction, help adapted to auditory learners,
										feeling of talking to someone, practice of oral expression.
									</p>
								</motion.div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Language Callbot Section */}
			<AnimatedSection
				className='w-full py-10'
				delay={0.4}
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<AnimatedCard delay={0.2} variant='slideUp'>
							<div className='bg-white rounded-3xl p-10 md:p-12 shadow-xl/40 border border-gray-100/50 hover:shadow-2xl/40 transition-all duration-500'>
								<motion.div
									className='flex items-center gap-4 mb-8'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6 }}>
									<div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg'>
										<svg
											className='w-8 h-8'
											fill='none'
											stroke='white'
											viewBox='0 0 24 24'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
											/>
										</svg>
									</div>
									<h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
										The Language Callbot
									</h2>
								</motion.div>
								<motion.p
									className='text-lg text-gray-600 mb-10 leading-relaxed'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.2 }}>
									To master a language, you have to speak it! Our Language
									Callbot is your ideal conversation partner to practice English
									interactively and without fear, by call from your
									ApprentieMalin space.
								</motion.p>
								<div className='space-y-8'>
									<motion.h3
										className='text-xl font-semibold text-gray-900 mb-6'
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.3 }}>
										Key Features
									</motion.h3>
									<motion.ul
										className='grid gap-6'
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.6, delay: 0.4 }}>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Engages in conversation: Discuss various topics or
												practice real-life scenarios (travel, presentation,
												etc.)
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Corrects your mistakes: The Callbot listens to your
												pronunciation, grammar, and vocabulary, and corrects you
												constructively during the call
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Enriches your vocabulary: Learn new words and
												expressions in context
											</span>
										</li>
										<li className='flex items-start gap-4'>
											<div className='w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1 flex-shrink-0'>
												<svg
													className='w-4 h-4'
													fill='white'
													viewBox='0 0 20 20'>
													<path
														fillRule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<span className='text-gray-800 leading-relaxed font-medium'>
												Adapts to your level: From beginner (A1) to more
												advanced levels
											</span>
										</li>
									</motion.ul>
								</div>
								<motion.div
									className='mt-10 p-6 rounded-2xl border-l-4 border-purple-500 bg-purple-50/50 shadow-sm dark:bg-[#282c35]'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.6, delay: 0.5 }}>
									<p
										className='font-medium leading-relaxed'
										style={{ color: '#1875cf' }}>
										<span className='font-bold'>Advantages for students:</span>{' '}
										Gain confidence in speaking, improve your pronunciation,
										practice at your own pace and without judgment.
									</p>
								</motion.div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Additional Features Grid */}
			<AnimatedSection
				className='w-full py-20'
				delay={0.5}
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<motion.div
							className='text-center mb-16'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}>
							<h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 mb-4'>
								Additional Learning Tools
							</h2>
							<div className='w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full'></div>
						</motion.div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Smart Review */}
							<AnimatedCard delay={0.2} variant='scale'>
								<div className='group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full flex flex-col relative overflow-hidden'>
									<div className='absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500'></div>
									<div className='relative z-10 flex flex-col h-full'>
										<div className='flex items-center gap-4 mb-6'>
											<div
												className='w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'
												style={{ backgroundColor: '#2196f3' }}>
												<svg
													className='w-7 h-7'
													fill='none'
													stroke='white'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
													/>
												</svg>
											</div>
											<h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300'>
												Smart Review
											</h3>
										</div>
										<p className='text-gray-600 mb-6 leading-relaxed flex-grow'>
											Quick reminders and concept reviews before tests. Simply
											ask the AI for a review on any topic.
										</p>
										<div className='p-4 rounded-2xl border-l-4 border-blue-500 mt-auto'>
											<p
												className='font-semibold text-sm leading-relaxed'
												style={{ color: '#1875cf' }}>
												Perfect for quick knowledge consolidation and test
												preparation
											</p>
										</div>
									</div>
								</div>
							</AnimatedCard>

							{/* Progress Dashboard */}
							<AnimatedCard delay={0.4} variant='scale'>
								<div className='group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full flex flex-col relative overflow-hidden'>
									<div className='absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500'></div>
									<div className='relative z-10 flex flex-col h-full'>
										<div className='flex items-center gap-4 mb-6'>
											<div
												className='w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'
												style={{ backgroundColor: '#7c4dff' }}>
												<svg
													className='w-7 h-7'
													fill='none'
													stroke='white'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
													/>
												</svg>
											</div>
											<h3 className='text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300'>
												Progress Dashboard
											</h3>
										</div>
										<p className='text-gray-600 mb-6 leading-relaxed flex-grow'>
											Track learning progress, subjects covered, and
											AI-identified learning trends.
										</p>
										<div className='p-4 rounded-2xl border-l-4 border-purple-500 mt-auto'>
											<p className='text-purple-800 font-semibold text-sm leading-relaxed'>
												Monitor progress and identify areas needing attention
											</p>
										</div>
									</div>
								</div>
							</AnimatedCard>

							{/* Interactive Exercises */}
							<AnimatedCard delay={0.6} variant='scale'>
								<div className='group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full flex flex-col relative overflow-hidden md:col-span-2 lg:col-span-1'>
									<div className='absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500'></div>
									<div className='relative z-10 flex flex-col h-full'>
										<div className='flex items-center gap-4 mb-6'>
											<div
												className='w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300'
												style={{ backgroundColor: '#e040fc' }}>
												<svg
													className='w-7 h-7'
													fill='none'
													stroke='white'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
													/>
												</svg>
											</div>
											<h3 className='text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300'>
												Interactive Exercises
											</h3>
										</div>
										<p className='text-gray-600 mb-6 leading-relaxed flex-grow'>
											Practice key concepts through our collection of
											interactive exercises, complementing AI and Callbot
											assistance.
										</p>
										<div className='p-4 rounded-2xl border-l-4 border-green-500 mt-auto'>
											<p className='text-green-800 font-semibold text-sm leading-relaxed'>
												Reinforce learning through active practice and
												engagement
											</p>
										</div>
									</div>
								</div>
							</AnimatedCard>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Call to Action */}
			<AnimatedSection
				className='w-full py-16 bg-gradient-to-r from-blue-600 to-blue-700'
				delay={0.6}
				variant='slideDown'>
				<div className='container mx-auto px-4 text-center'>
					<div className='max-w-5xl mx-auto'>
						<motion.h2
							className='text-2xl md:text-3xl font-bold text-white mb-8'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}>
							Experience the Complete Learning Ecosystem
						</motion.h2>
						<motion.p
							className='text-lg text-blue-100 mb-10 max-w-2xl mx-auto'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							Combine AI Chat and specialized Callbots for a personalized
							learning experience that adapts to each student's needs and
							preferences.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}>
							<Link
								href='/pricing'
								className='inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-700'>
								Explore Our Subscription Plans
								<svg
									className='w-5 h-5 ml-2'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</Link>
						</motion.div>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
