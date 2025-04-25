'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

const WhatsAppChat = () => {
	const [chatStep, setChatStep] = useState(0);
	const maxSteps = 4;

	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 40 },
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
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const phoneVariants = {
		hidden: { opacity: 0, scale: 0.8, rotateY: 45 },
		visible: {
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				type: 'spring',
				stiffness: 50,
				damping: 15,
				delay: 0.3,
			},
		},
	};

	// Mock chat conversation samples
	const chatSteps = [
		{
			question: 'Hi! Can you help me with my math homework?',
			answer:
				"Hello! I'd be happy to help you with your math homework. What topic are you working on?",
		},
		{
			question: 'I need help with fractions. How do I add 1/4 + 2/3?',
			answer:
				'Great question! To add fractions with different denominators, we need to find a common denominator first.\n\nFor 1/4 + 2/3, the least common denominator is 12.\n\n1/4 = 3/12\n2/3 = 8/12\n\nNow we can add: 3/12 + 8/12 = 11/12\n\nSo, 1/4 + 2/3 = 11/12',
		},
		{
			question: 'That makes sense! Can you give me another example?',
			answer:
				"I'm glad it helps! Let's try another example: 2/5 + 1/3\n\nThe least common denominator is 15.\n\n2/5 = 6/15\n1/3 = 5/15\n\nAdding them: 6/15 + 5/15 = 11/15\n\nSo, 2/5 + 1/3 = 11/15\n\nWould you like to practice with another problem?",
		},
		{
			question: 'Yes, how about 3/8 + 1/6?',
			answer:
				"Great practice problem!\n\nFor 3/8 + 1/6, the least common denominator is 24.\n\n3/8 = 9/24\n1/6 = 4/24\n\nAdding them: 9/24 + 4/24 = 13/24\n\nSo, 3/8 + 1/6 = 13/24\n\nYou're getting the hang of this! Want to try one more?",
		},
	];

	const nextStep = () => {
		setChatStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
	};

	return (
		<div className='relative overflow-hidden bg-gradient-to-b from-green-50 to-white'>
			<Header />

			{/* Hero Section */}
			<section className='pt-32 pb-20 relative'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between'
						initial='hidden'
						animate='visible'
						variants={staggerContainer}>
						<div className='w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0'>
							<motion.h1
								className='text-4xl md:text-6xl font-bold mb-6 text-green-900'
								variants={fadeInUp}>
								Chat on <span className='text-green-500'>WhatsApp</span>
							</motion.h1>

							<motion.p
								className='text-xl text-green-800/70 mb-8'
								variants={fadeInUp}>
								Get instant learning support through the messaging app you
								already use - no new downloads needed!
							</motion.p>

							<motion.div variants={fadeInUp} className='relative inline-block'>
								<Link
									href='#get-started'
									className='btn text-lg px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-md'>
									Start Chatting Now
								</Link>
								<motion.div
									className='absolute -inset-1 rounded-full blur-md -z-10 bg-green-400 opacity-50'
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
						</div>

						<motion.div
							className='w-full lg:w-1/2 flex justify-center'
							variants={phoneVariants}>
							<div className='relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-2xl transform rotate-3'>
								{/* Phone frame */}
								<div className='absolute top-0 left-0 right-0 h-24 bg-green-500 rounded-t-[37px]'></div>
								<div className='absolute top-6 left-0 right-0 h-6 bg-black rounded-t-[37px]'></div>
								<div className='w-32 h-5 bg-black absolute top-0 left-1/2 transform -translate-x-1/2 rounded-b-xl z-10'></div>

								{/* WhatsApp chat mockup */}
								<div className='w-full h-full bg-[#ECE5DD] rounded-[30px] overflow-hidden relative'>
									<div className='bg-green-600 text-white p-3 flex items-center'>
										<div className='w-10 h-10 rounded-full bg-white/20 flex-shrink-0'></div>
										<div className='ml-3'>
											<div className='font-medium'>ApprentieMalin</div>
											<div className='text-xs opacity-80'>Online</div>
										</div>
									</div>

									<div className='p-3 h-[calc(100%-130px)] overflow-y-auto'>
										{/* User message */}
										<motion.div
											className='ml-auto mr-2 my-2 max-w-[80%] bg-[#DCF8C6] rounded-lg p-2 shadow-sm'
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.5 }}>
											<div className='text-sm'>
												{chatSteps[chatStep].question}
											</div>
											<div className='text-right text-xs text-gray-500'>
												12:05 PM
											</div>
										</motion.div>

										{/* Bot response */}
										<motion.div
											className='mr-auto ml-2 my-2 max-w-[80%] bg-white rounded-lg p-2 shadow-sm'
											initial={{ opacity: 0, scale: 0.8 }}
											animate={{ opacity: 1, scale: 1 }}
											transition={{ delay: 1 }}>
											<div className='text-sm whitespace-pre-line'>
												{chatSteps[chatStep].answer}
											</div>
											<div className='text-right text-xs text-gray-500'>
												12:06 PM
											</div>
										</motion.div>
									</div>

									<div className='absolute bottom-0 left-0 right-0 bg-[#F5F5F5] p-2 flex items-center'>
										<div className='flex-1 bg-white rounded-full px-3 py-2 mr-2'>
											Type a message...
										</div>
										<motion.button
											className='w-10 h-10 rounded-full bg-green-500 flex items-center justify-center'
											whileTap={{ scale: 0.9 }}
											onClick={nextStep}>
											<svg
												className='w-5 h-5 text-white'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M14 5l7 7m0 0l-7 7m7-7H3'
												/>
											</svg>
										</motion.button>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className='py-20 bg-white'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-12 text-center text-green-900'
							variants={fadeInUp}>
							How WhatsApp Integration Works
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{[
								{
									icon: '📱',
									title: 'Add Our Number',
									description:
										"Save our WhatsApp number to your contacts - it's the only setup you'll need to do.",
								},
								{
									icon: '💬',
									title: 'Send a Message',
									description:
										"Open WhatsApp and send us a message about what you're learning or studying.",
								},
								{
									icon: '🎓',
									title: 'Get Learning Support',
									description:
										'Receive instant, personalized responses to help you understand concepts and solve problems.',
								},
							].map((item, index) => (
								<motion.div
									key={index}
									className='bg-green-50 rounded-xl p-6 shadow-lg border border-green-100'
									variants={fadeInUp}
									whileHover={{
										y: -10,
										boxShadow: '0 15px 30px rgba(34, 197, 94, 0.1)',
									}}
									transition={{ type: 'spring', stiffness: 300, damping: 15 }}>
									<div className='w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4 mx-auto'>
										{item.icon}
									</div>
									<h3 className='text-xl font-semibold mb-3 text-green-900 text-center'>
										{item.title}
									</h3>
									<p className='text-green-800/70 text-center'>
										{item.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className='py-20 bg-gradient-to-r from-green-600 to-green-400 text-white'>
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
							Why Use WhatsApp for Learning?
						</motion.h2>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
							{[
								{
									title: 'No New Apps to Download',
									description:
										"Use the messaging app you're already familiar with - no need to learn a new interface.",
								},
								{
									title: 'Chat Anywhere, Anytime',
									description:
										'Access learning support wherever you have WhatsApp - at home, school, or on the go.',
								},
								{
									title: 'Parent-Approved Communication',
									description:
										"Parents can easily monitor interactions and stay involved in their child's learning process.",
								},
								{
									title: 'Simple & Intuitive',
									description:
										"If you can send a text message, you can get homework help - it's that simple!",
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

			{/* Features Section */}
			<section className='py-20 bg-green-50'>
				<div className='container mx-auto px-4'>
					<motion.div
						className='max-w-5xl mx-auto'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-100px' }}
						variants={staggerContainer}>
						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6 text-center text-green-900'
							variants={fadeInUp}>
							What You Can Do with WhatsApp Integration
						</motion.h2>

						<motion.p
							className='text-xl text-green-800/70 mb-12 text-center'
							variants={fadeInUp}>
							Our AI-powered tutor can help with a variety of learning needs:
						</motion.p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
							{[
								{
									title: 'Send Photos of Problems',
									description:
										'Snap a photo of a difficult homework problem and send it for instant help.',
								},
								{
									title: 'Ask for Explanations',
									description:
										"Get simple, clear explanations for complex concepts you're learning in school.",
								},
								{
									title: 'Request Practice Exercises',
									description:
										"Ask for additional practice problems to reinforce what you're learning.",
								},
								{
									title: 'Review Past Conversations',
									description:
										'Easily scroll back through your chat history to review previous explanations.',
								},
							].map((feature, index) => (
								<motion.div
									key={index}
									className='bg-white rounded-xl p-6 shadow-lg border border-green-100'
									variants={fadeInUp}
									whileHover={{
										scale: 1.02,
										boxShadow: '0 15px 30px rgba(34, 197, 94, 0.1)',
									}}>
									<h3 className='text-xl font-semibold mb-3 text-green-900 flex items-center'>
										<span className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600'>
											{index + 1}
										</span>
										{feature.title}
									</h3>
									<p className='text-green-800/70 pl-11'>
										{feature.description}
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
							className='text-3xl md:text-4xl font-bold mb-6 text-green-900'
							variants={fadeInUp}>
							Ready to Start Learning Through WhatsApp?
						</motion.h2>

						<motion.p
							className='text-xl text-green-800/70 mb-8'
							variants={fadeInUp}>
							Join thousands of students who are getting homework help through
							the app they already use.
						</motion.p>

						<motion.div variants={fadeInUp}>
							<Link
								href='/#get-started'
								className='btn text-lg px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-md'>
								Add Us on WhatsApp
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default WhatsAppChat;
