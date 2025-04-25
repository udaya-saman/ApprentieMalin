'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CTASection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const containerVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 80,
				damping: 15,
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
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

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: 'spring',
				stiffness: 120,
				damping: 15,
				delay: 0.5,
			},
		},
		hover: {
			scale: 1.05,
			boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
			transition: {
				type: 'spring',
				stiffness: 400,
				damping: 10,
			},
		},
		tap: {
			scale: 0.98,
		},
	};

	return (
		<section id='get-started' className='py-20 pt-14 section-blue relative'>
			<div className='container'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={containerVariants}
					className='relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20'>
					{/* Content */}
					<div className='relative p-8 md:p-16 flex flex-col items-center text-center'>
						<motion.div
							className='flex justify-center mb-6'
							variants={itemVariants}>
							<motion.div
								className='w-16 h-16 rounded-full bg-white/10 flex items-center justify-center'
								whileHover={{ scale: 1.1, rotate: 5 }}
								animate={{
									boxShadow: [
										'0 0 0 rgba(255, 255, 255, 0)',
										'0 0 20px rgba(255, 255, 255, 0.3)',
										'0 0 0 rgba(255, 255, 255, 0)',
									],
								}}
								transition={{
									boxShadow: {
										duration: 2,
										repeat: Infinity,
									},
								}}>
								<motion.span
									className='text-3xl'
									animate={{ rotate: [0, 10, 0, -10, 0] }}
									transition={{
										duration: 5,
										repeat: Infinity,
										repeatType: 'loop',
									}}>
									🚀
								</motion.span>
							</motion.div>
						</motion.div>

						<motion.h2
							className='text-3xl md:text-4xl font-bold mb-6'
							variants={itemVariants}>
							Ready to Transform <span className='gradient-text'>Learning</span>
							?
						</motion.h2>

						<motion.p
							className='text-lg text-white/80 max-w-2xl mb-8'
							variants={itemVariants}>
							Join thousands of students who are already experiencing smarter,
							more engaging learning with ApprentieMalin's AI tutor on WhatsApp.
						</motion.p>

						<motion.a
							href='https://wa.me/15551234567'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary'
							variants={buttonVariants}
							whileHover='hover'
							whileTap='tap'>
							Chat on WhatsApp
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASection;
