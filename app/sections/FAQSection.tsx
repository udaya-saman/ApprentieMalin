'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FAQSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqs = [
		{
			question: 'Is ApprentieMalin safe for my child?',
			answer:
				'Yes, ApprentieMalin is designed with child safety as a priority. Our AI tutor is trained to provide age-appropriate responses and explanations. The platform includes content filters and safety measures to ensure a protected learning environment.',
		},
		{
			question: 'What subjects are supported?',
			answer:
				'ApprentieMalin supports a wide range of primary and middle school subjects including mathematics, science, language arts, history, geography, and more. The AI tutor can help with homework, explain concepts, and provide practice exercises across the curriculum.',
		},
		{
			question: 'How do I get started with ApprentieMalin?',
			answer:
				'Getting started is simple! Just add our WhatsApp number to your contacts and send a message. Our AI tutor will guide you through the setup process, which takes less than a minute. No downloads, installations, or complicated registrations are required.',
		},
		{
			question: 'Do I need to install any apps?',
			answer:
				"No, you don't need to install any additional apps. ApprentieMalin works through WhatsApp, which you likely already have installed. This makes it accessible and convenient for both students and parents.",
		},
		{
			question: 'Is there a cost to use ApprentieMalin?',
			answer:
				'ApprentieMalin offers both free and premium plans. The free plan provides access to basic learning support, while the premium plan includes additional features like personalized learning paths, advanced explanations, and progress tracking. Check our pricing section for more details.',
		},
		{
			question: "Can parents monitor their child's learning?",
			answer:
				"Yes, parents can receive weekly progress reports and summaries of topics covered. This allows you to stay informed about your child's learning journey while respecting their independence.",
		},
	];

	const headerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
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

	const faqContainerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	};

	const faqItemVariants = {
		hidden: {
			opacity: 0,
			y: 20,
			scale: 0.98,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 80,
				damping: 15,
			},
		},
	};

	return (
		<section id='faq' className='py-12 pt-10 section-white relative'>
			<div className='container'>
				<motion.div
					ref={ref}
					variants={headerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='max-w-4xl mx-auto text-center mb-10'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						Frequently Asked <span className='gradient-text'>Questions</span>
					</h2>
					<motion.p
						variants={itemVariants}
						className='section-subtitle max-w-2xl'>
						Find answers to the most common questions about ApprentieMalin.
					</motion.p>
				</motion.div>

				<motion.div
					className='max-w-3xl mx-auto'
					variants={faqContainerVariants}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							variants={faqItemVariants}
							className={`mb-4 rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
								activeIndex === index ? 'bg-white/5' : 'bg-white/0'
							}`}
							whileHover={{
								backgroundColor: 'rgba(255, 255, 255, 0.05)',
								borderColor: 'rgba(255, 255, 255, 0.2)',
								y: -2,
							}}>
							<motion.button
								className='flex justify-between items-center w-full px-6 py-4 text-left'
								onClick={() => toggleFAQ(index)}
								aria-expanded={activeIndex === index}
								whileTap={{ scale: 0.98 }}>
								<span className='text-lg font-medium'>{faq.question}</span>
								<motion.span
									className='transform transition-transform'
									animate={{ rotate: activeIndex === index ? 180 : 0 }}
									transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
									<svg
										className='w-5 h-5 text-white/70'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</motion.span>
							</motion.button>

							{/* Animated content */}
							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{
											height: {
												type: 'spring',
												stiffness: 80,
												damping: 15,
											},
											opacity: { duration: 0.2 },
										}}
										className='overflow-hidden'>
										<motion.p
											className='px-6 pb-6 text-[#212121]'
											initial={{ y: 10, opacity: 0 }}
											animate={{ y: 0, opacity: 1 }}
											transition={{ delay: 0.1 }}>
											{faq.answer}
										</motion.p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.6,
								type: 'spring',
								stiffness: 100,
								damping: 15,
							},
						},
					}}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					className='mt-12 text-center'>
					<p className='text-blue-900/70 mb-4'>
						Still have questions? We're here to help!
					</p>
					<motion.a
						href='mailto:support@apprentiemalin.com'
						className='text-primary hover:text-primary-light transition-colors inline-block'
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.98 }}>
						Contact Support
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
};

export default FAQSection;
