'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import config from '../config';

// Define a set of beautiful, subtle gradients
const gradients = [
	'bg-gradient-to-r from-blue-50 to-purple-50',
	'bg-gradient-to-r from-green-50 to-teal-50',
	'bg-gradient-to-r from-pink-50 to-rose-50',
	'bg-gradient-to-r from-amber-50 to-orange-50',
	'bg-gradient-to-r from-indigo-50 to-violet-50',
	'bg-gradient-to-r from-cyan-50 to-sky-50',
	'bg-gradient-to-r from-fuchsia-50 to-pink-50',
	'bg-gradient-to-r from-lime-50 to-emerald-50',
	'bg-gradient-to-r from-rose-50 to-red-50',
	'bg-gradient-to-r from-violet-50 to-purple-50',
];

const FAQSection = () => {
	// State to track which FAQ item is open
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	// State to track current gradient assignments
	const [currentGradients, setCurrentGradients] = useState<string[]>([]);

	// Function to shuffle array randomly
	const shuffleArray = (array: string[]) => {
		const newArray = [...array];
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	};

	// Initialize and update gradients
	useEffect(() => {
		const initializeGradients = () => {
			setCurrentGradients(shuffleArray(gradients));
		};

		initializeGradients();
		const intervalId = setInterval(initializeGradients, 60000); // Change every minute

		return () => clearInterval(intervalId);
	}, []);

	// Toggle FAQ open/close
	const handleToggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	// Animation variants
	const faqVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	const cardVariants = {
		hover: {
			y: -5,
			boxShadow: '0 10px 30px -10px rgba(0, 120, 240, 0.2)',
			transition: { duration: 0.2 },
		},
	};

	return (
		<Section id='faq' variant='white' className='relative'>
			<SectionTitle
				title='Frequently Asked Questions'
				subtitle='Find answers to common questions about ApprentieMalin'
			/>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-0.5 mt-12'>
				{config.faq.map((item, index) => (
					<motion.div
						key={index}
						variants={faqVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ delay: 0.05 * index }}
						className='w-full'>
						<motion.div
							variants={cardVariants}
							whileHover='hover'
							className={`${
								currentGradients[index] || gradients[0]
							} backdrop-blur-sm rounded-xl p-6 shadow-sm border border-blue-100/20 transition-all duration-700 cursor-pointer
								${
									openIndex === index
										? 'ring-2 ring-blue-200 shadow-lg'
										: 'hover:bg-blue-50/30'
								}`}
							onClick={() => handleToggleFAQ(index)}>
							<div className='flex justify-between items-start'>
								<h3 className='text-lg font-semibold pr-4 text-[#13274d]'>
									{item.question}
								</h3>
								<motion.button
									className={`mt-1 bg-white/70 hover:bg-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 transition-colors duration-200
										${openIndex === index ? 'bg-white' : ''}`}
									aria-label={
										openIndex === index ? 'Close answer' : 'View answer'
									}
									onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
										e.stopPropagation();
										handleToggleFAQ(index);
									}}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}>
									<motion.span
										animate={{ rotate: openIndex === index ? 45 : 0 }}
										transition={{ duration: 0.2 }}
										className={`text-[#13274d] font-medium`}>
										{openIndex === index ? '✕' : '+'}
									</motion.span>
								</motion.button>
							</div>
							<AnimatePresence>
								{openIndex === index && (
									<motion.div
										initial={{ opacity: 0, height: 0, y: -10 }}
										animate={{ opacity: 1, height: 'auto', y: 0 }}
										exit={{ opacity: 0, height: 0, y: -10 }}
										transition={{ duration: 0.2, ease: 'easeInOut' }}
										className='overflow-hidden'>
										<p className='mt-4 text-[#13274d] text-base leading-relaxed flex-grow bg-white/60 p-4 rounded-lg'>
											{item.answer}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</motion.div>
				))}
			</div>

			{/* Additional call to action */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ delay: 0.3 }}
				className='mt-16 text-center'>
				<p className='text-[#13274d] mb-4 text-lg'>
					Still have questions? We're here to help!
				</p>
				<motion.a
					href={`mailto:${config.contact.email}`}
					className='inline-block text-[#13274d] hover:text-[#13274d]/80 font-medium underline-offset-4 hover:underline transition-colors duration-200'
					tabIndex={0}
					aria-label='Contact our support team by email'
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}>
					Contact our support team
				</motion.a>
			</motion.div>

			{/* Decorative elements */}
			<div className='absolute bottom-0 left-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse' />
			<div className='absolute top-1/3 right-10 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl -z-10 animate-pulse' />
		</Section>
	);
};

export default FAQSection;
