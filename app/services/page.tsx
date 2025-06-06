'use client';

import Image from 'next/image';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function ServicesPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-24'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-6 md:py-10' variant='slideDown'>
				<div className='container mx-auto px-4 text-center'>
					<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
						Our Intelligent Assistance Services
					</h1>
					<p className='text-lg md:text-xl max-w-5xl mb-10 mx-auto'>
						Welcome to the page detailing how ApprentieMalin helps your child at
						every step of their learning journey! We have developed tools
						powered by artificial intelligence and specialized in education to
						offer personalized, available support adapted to their needs.
						Discover our different ways to get help: by chat or by voice call.
					</p>
				</div>
			</AnimatedSection>

			{/* AI Chat Section - Animates on page load */}
			<motion.section
				className='w-full py-6 bg-gray-50'
				initial={{ opacity: 0, y: 60, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{
					type: 'spring',
					stiffness: 100,
					damping: 20,
					mass: 1,
					delay: 0.1,
					duration: 0.8,
				}}>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row gap-8 items-center'>
						<motion.div
							className='md:w-1/2'
							initial={{ opacity: 0, y: 100, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							transition={{
								type: 'spring',
								stiffness: 80,
								damping: 18,
								mass: 1.2,
								delay: 0.2,
							}}>
							<h2 className='text-2xl md:text-4xl font-bold text-blue-600 mb-4'>
								AI Help via Integrated Chat
							</h2>
							<h3 className='text-xl md:text-2xl font-semibold mb-6'>
								The ApprentieMalin Intelligent Chat: Written Help on Demand
							</h3>
							<p className='text-lg mb-6'>
								Access our specialized AI directly on your ApprentieMalin space.
								Ask all your homework questions in writing, send photos of your
								exercises, and receive personalized help to understand and
								progress.
							</p>
							<div className='mb-6'>
								<h4 className='text-lg font-semibold mb-3'>
									What the AI Chat can do:
								</h4>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Responds live to your homework questions: Mathematics,
											French, History-Geography, Sciences... (for the
											student&apos;s level)
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Analyzes photos of your exercises: Take a photo of your
											statement or exercise, send it in the chat, and the AI
											will understand your request
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Guides step by step toward the solution: Don&apos;t wait
											for the answer, the AI asks you questions and helps you
											find the solution by yourself
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Understands your tone and emotions: The AI is designed to
											detect if you are frustrated, hesitant, or proud, and
											adapts its encouragement
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Learns from you: The more you use the chat, the more the
											AI understands your difficulties and adapts its help to
											your way of learning
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Accessibility: Available 24/7 from your web space
										</span>
									</li>
								</ul>
							</div>
							<p className='text-lg font-medium text-blue-700'>
								Advantages for the student: Easy rereading of explanations,
								ideal for quick questions, practical for students who prefer to
								write, discreet help.
							</p>
						</motion.div>
						<motion.div
							className='md:w-1/2'
							initial={{ opacity: 0, scale: 0.8, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							transition={{
								type: 'spring',
								stiffness: 150,
								damping: 25,
								mass: 0.8,
								delay: 0.3,
							}}>
							<Image
								src='/images/hi.png'
								alt='AI Chat Interface'
								width={600}
								height={400}
								className='w-full h-auto'
							/>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Voice Help Section */}
			<AnimatedSection
				className='w-full py-12'
				delay={0.2}
				variant='slideInLeft'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row-reverse gap-8 items-center'>
						<div className='md:w-1/2'>
							<h2 className='text-2xl md:text-4xl font-bold text-blue-600 mb-4'>
								Voice Help via Callbot
							</h2>
							<h3 className='text-xl md:text-2xl font-semibold mb-6'>
								Interactive Assistance via Phone Call
							</h3>
							<p className='text-lg mb-6'>
								Talk directly to a specialized AI for oral explanations and
								conversation practice.
							</p>
							<h4 className='text-xl font-semibold mb-3'>
								The Vocal Homework Help Callbot: Your Personal Tutor on the
								Phone
							</h4>
							<p className='text-lg mb-6'>
								For students who learn better by listening or who prefer to talk
								about their difficulties, the Homework Help Callbot offers
								interactive voice assistance, available by call from your
								ApprentieMalin space.
							</p>
							<div className='mb-6'>
								<h4 className='text-lg font-semibold mb-3'>
									What the Homework Callbot can do:
								</h4>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Understands your questions asked orally: Explain your
											problem by speaking, as you would with a teacher
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Guides verbally step by step: The Callbot asks you
											questions aloud, gives you clues, and helps you solve the
											problem by dialoguing with you
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Adapts its explanations: If you don&apos;t understand a
											first explanation, the Callbot can rephrase it differently
											orally
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Learns from your voice interactions: The Callbot memorizes
											your difficulties to better adapt its help during future
											calls
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Specialized by subject and level: Access an expert Callbot
											specifically trained for the Mathematics 6th grade, French
											5th grade, History-Geography 8th grade, etc.
										</span>
									</li>
								</ul>
							</div>
							<p className='text-lg font-medium text-blue-700'>
								Advantages for the student: Dynamic interaction, help adapted to
								auditory learners, feeling of talking to someone, practice of
								oral expression.
							</p>
						</div>
						<div className='md:w-1/2'>
							<AnimatedCard variant='slideUp' delay={0.4}>
								<Image
									src='/images/communicating.png'
									alt='Voice Call Bot'
									width={600}
									height={400}
									className='w-full h-auto'
								/>
							</AnimatedCard>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Language Learning Callbot */}
			<AnimatedSection
				className='w-full py-12 bg-gray-50'
				delay={0.3}
				variant='slideInRight'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row gap-8 items-center'>
						<AnimatedCard className='md:w-1/2' variant='slideUp' delay={0.2}>
							<h2 className='text-2xl md:text-4xl font-bold text-blue-600 mb-4'>
								The Language Learning Callbot
							</h2>
							<h3 className='text-xl md:text-2xl font-semibold mb-6'>
								Practice English (and soon other languages) by Dialoguing
							</h3>
							<p className='text-lg mb-6'>
								To master a language, you have to speak it! Our Language Callbot
								is your ideal conversation partner to practice English
								interactively and without fear, by call from your ApprentieMalin
								space.
							</p>
							<div className='mb-6'>
								<h4 className='text-lg font-semibold mb-3'>
									What the Language Callbot can do:
								</h4>
								<ul className='space-y-3'>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Engages in conversation: Discuss various topics or
											practice real-life scenarios (travel, presentation, etc.)
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Corrects your mistakes: The Callbot listens to your
											pronunciation, grammar, and vocabulary, and corrects you
											constructively during the call
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Enriches your vocabulary: Learn new words and expressions
											in context
										</span>
									</li>
									<li className='flex items-start'>
										<span className='text-blue-500 mr-2'>✓</span>
										<span>
											Adapts to your level: From beginner (A1) to more advanced
											levels
										</span>
									</li>
								</ul>
							</div>
							<p className='text-lg font-medium text-blue-700'>
								Advantages for the student: Gain confidence in speaking, improve
								your pronunciation, practice at your own pace and without
								judgment.
							</p>
						</AnimatedCard>
						<AnimatedCard className='md:w-1/2' variant='scale' delay={0.4}>
							<Image
								src='/images/language.png'
								alt='Language Learning Callbot'
								width={600}
								height={400}
								className='w-full h-auto'
							/>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
