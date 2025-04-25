'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const InteractivePractice = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const [showFeedback, setShowFeedback] = useState(false);

	// Sample quiz data
	const sampleQuiz = [
		{
			question: 'What is the primary function of photosynthesis?',
			options: [
				'Converting light energy to chemical energy',
				'Breaking down food for energy',
				'Transporting nutrients through the plant',
				'Storing water in plant cells',
			],
			correctAnswer: 0,
		},
		{
			question: 'Which of these is NOT a prime number?',
			options: ['3', '5', '9', '11'],
			correctAnswer: 2,
		},
		{
			question: 'What is the main purpose of the introduction in an essay?',
			options: [
				'To provide supporting evidence',
				'To present a counter-argument',
				'To draw a conclusion',
				'To engage the reader and present the thesis',
			],
			correctAnswer: 3,
		},
	];

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

	const checkAnswer = (selectedIndex: number) => {
		setSelectedOption(selectedIndex);
		setShowFeedback(true);
	};

	const nextQuestion = () => {
		if (currentQuestionIndex < sampleQuiz.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setSelectedOption(null);
			setShowFeedback(false);
		} else {
			// Reset the quiz
			setCurrentQuestionIndex(0);
			setSelectedOption(null);
			setShowFeedback(false);
		}
	};

	const currentQuestion = sampleQuiz[currentQuestionIndex];
	const isCorrect = selectedOption === currentQuestion.correctAnswer;

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
							Interactive <span className='text-blue-500'>Practice</span>
						</motion.h1>

						<motion.p
							className='text-xl text-blue-800/70 mb-8'
							variants={fadeInUp}>
							Engage with challenging exercises that adapt to your learning
							level and provide instant feedback.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='#try-demo'
								className='btn btn-primary text-lg px-8 py-4'>
								Try a Demo Quiz
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Quiz Demo Section */}
			<section id='try-demo' className='py-16 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-4xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900'
							variants={fadeInUp}>
							Try Our Interactive Quiz
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-12 text-center'
							variants={fadeInUp}>
							Experience how our interactive practice works with this sample
							quiz
						</motion.p>

						<motion.div
							className='bg-blue-50 rounded-xl p-8 shadow-md border border-blue-100 mb-12'
							variants={fadeInUp}>
							<div className='flex items-center justify-between mb-6'>
								<span className='text-blue-800 font-medium'>
									Question {currentQuestionIndex + 1} of {sampleQuiz.length}
								</span>
								<span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm'>
									{currentQuestionIndex === 0
										? 'Science'
										: currentQuestionIndex === 1
										? 'Mathematics'
										: 'Language Arts'}
								</span>
							</div>

							<h3 className='text-2xl font-semibold mb-6 text-blue-900'>
								{currentQuestion.question}
							</h3>

							<div className='space-y-4 mb-8'>
								{currentQuestion.options.map((option, index) => (
									<button
										key={index}
										onClick={() => !showFeedback && checkAnswer(index)}
										className={`w-full p-4 rounded-lg text-left transition-all ${
											selectedOption === index
												? isCorrect
													? 'bg-green-100 border-green-500 text-green-800'
													: 'bg-red-100 border-red-500 text-red-800'
												: showFeedback &&
												  index === currentQuestion.correctAnswer
												? 'bg-green-100 border-green-500 text-green-800'
												: 'bg-white border-blue-200 text-blue-800 hover:border-blue-300'
										} border ${
											showFeedback ? 'cursor-default' : 'cursor-pointer'
										}`}
										disabled={showFeedback}>
										<div className='flex items-center'>
											<span
												className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 text-sm ${
													selectedOption === index
														? isCorrect
															? 'bg-green-500 text-white'
															: 'bg-red-500 text-white'
														: showFeedback &&
														  index === currentQuestion.correctAnswer
														? 'bg-green-500 text-white'
														: 'bg-blue-100 text-blue-800'
												}`}>
												{String.fromCharCode(65 + index)}
											</span>
											{option}
										</div>
									</button>
								))}
							</div>

							{showFeedback && (
								<div
									className={`p-4 rounded-lg mb-6 ${
										isCorrect
											? 'bg-green-50 text-green-800'
											: 'bg-red-50 text-red-800'
									}`}>
									<div className='flex items-start'>
										<span className='mr-2 text-xl'>
											{isCorrect ? '✅' : '❌'}
										</span>
										<div>
											<p className='font-medium'>
												{isCorrect ? 'Correct!' : 'Incorrect.'}
											</p>
											<p>
												{isCorrect
													? "Great job! Let's try another question."
													: `The correct answer is ${String.fromCharCode(
															65 + currentQuestion.correctAnswer,
													  )}: ${
															currentQuestion.options[
																currentQuestion.correctAnswer
															]
													  }.`}
											</p>
										</div>
									</div>
								</div>
							)}

							<div className='flex justify-between'>
								<button
									onClick={() => {
										setSelectedOption(null);
										setShowFeedback(false);
									}}
									className='px-6 py-2 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors'
									disabled={!showFeedback}>
									Try Again
								</button>

								<button
									onClick={nextQuestion}
									className={`px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${
										!showFeedback ? 'opacity-50 cursor-not-allowed' : ''
									}`}
									disabled={!showFeedback}>
									{currentQuestionIndex === sampleQuiz.length - 1
										? 'Restart Quiz'
										: 'Next Question'}
								</button>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
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
							Features of Our Interactive Practice
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-12 text-center max-w-3xl mx-auto'
							variants={fadeInUp}>
							Practice that adapts to your needs and helps you improve
						</motion.p>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									icon: '📊',
									title: 'Adaptive Difficulty',
									description:
										'Questions automatically adjust in difficulty based on your performance, ensuring optimal challenge.',
								},
								{
									icon: '⚡',
									title: 'Instant Feedback',
									description:
										'Receive immediate explanations for both correct and incorrect answers to enhance understanding.',
								},
								{
									icon: '🔄',
									title: 'Spaced Repetition',
									description:
										'Our system brings back questions you struggled with at strategic intervals to strengthen memory.',
								},
								{
									icon: '📱',
									title: 'Multi-format Questions',
									description:
										'Engage with various question types including multiple choice, fill-in-the-blank, and open-ended responses.',
								},
								{
									icon: '📝',
									title: 'Custom Exercise Sets',
									description:
										'Focus your practice on specific topics or skills that need extra attention.',
								},
								{
									icon: '📈',
									title: 'Progress Tracking',
									description:
										'Monitor your improvement over time with detailed performance analytics and growth reports.',
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

			{/* Subject Areas Section */}
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
							Available Subject Areas
						</motion.h2>

						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
							{[
								{ name: 'Mathematics', icon: '🧮' },
								{ name: 'Science', icon: '🔬' },
								{ name: 'Language Arts', icon: '📚' },
								{ name: 'Social Studies', icon: '🌍' },
								{ name: 'Foreign Languages', icon: '🗣️' },
								{ name: 'Computer Science', icon: '💻' },
								{ name: 'Arts', icon: '🎨' },
								{ name: 'Physical Education', icon: '⚽' },
							].map((subject, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl p-4 shadow-sm border border-blue-100 text-center'
									variants={fadeInUp}
									whileHover={{ scale: 1.05 }}>
									<div className='text-3xl mb-2'>{subject.icon}</div>
									<h3 className='font-medium text-blue-900'>{subject.name}</h3>
								</motion.div>
							))}
						</div>

						<motion.div
							className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center'
							variants={fadeInUp}>
							<h3 className='text-2xl font-semibold mb-4'>
								Thousands of Practice Questions
							</h3>
							<p className='text-white/90 mb-6 max-w-2xl mx-auto'>
								Our library includes over 10,000 practice questions across all
								subject areas, designed by educators to align with curriculum
								standards.
							</p>
							<Link
								href='/#get-started'
								className='inline-block bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors'>
								Start Practicing Today
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-16 bg-white'>
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
							How Our Practice System Works
						</motion.h2>

						<motion.p
							className='text-xl text-blue-800/70 mb-12 text-center max-w-3xl mx-auto'
							variants={fadeInUp}>
							A smarter way to practice that adapts to your learning needs
						</motion.p>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
							{[
								{
									step: 1,
									title: 'Choose Your Subject',
									description:
										'Select the topic you want to practice from our comprehensive library.',
								},
								{
									step: 2,
									title: 'Complete Exercises',
									description:
										'Answer questions that automatically adjust to your skill level.',
								},
								{
									step: 3,
									title: 'Review and Improve',
									description:
										'Get instant feedback and detailed explanations to enhance understanding.',
								},
							].map((step, index) => (
								<motion.div
									key={index}
									className='relative'
									variants={fadeInUp}>
									<div className='bg-blue-50 rounded-xl p-6 border border-blue-100 h-full'>
										<div className='absolute -top-5 -left-5 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl'>
											{step.step}
										</div>
										<h3 className='text-xl font-semibold mb-3 pt-4 text-blue-900'>
											{step.title}
										</h3>
										<p className='text-blue-800/70'>{step.description}</p>
									</div>
									{index < 2 && (
										<div className='hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10'>
											<svg
												width='24'
												height='24'
												viewBox='0 0 24 24'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M13 5L20 12L13 19'
													stroke='#3B82F6'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												/>
											</svg>
										</div>
									)}
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
							Start Practicing Today
						</motion.h2>

						<motion.p
							className='text-xl text-white/80 mb-8'
							variants={fadeInUp}>
							Join thousands of students improving their skills through
							interactive practice
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

export default InteractivePractice;
