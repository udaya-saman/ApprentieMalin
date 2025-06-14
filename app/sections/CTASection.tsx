'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';

const CTASection = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const glowVariants = {
		initial: { scale: 1, opacity: 0.2 },
		animate: {
			scale: [1, 1.5, 1],
			opacity: [0.2, 0.4, 0.2],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<Section
			id='get-started'
			variant='blue'
			className='relative overflow-hidden pt-32 pb-24 min-h-[calc(100vh-60px)] flex items-center justify-center'
			style={{
				background: 'linear-gradient(135deg, #0071ed 0%, #00a2ff 100%)',
			}}>
			{/* Background glassmorphism effects */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse' />
				<div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-150' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-300' />
				<div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 animate-twinkle" />
			</div>

			<div className='relative z-10 max-w-4xl mx-auto px-4 py-8 -mt-[60px] scale-90 text-center'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='flex flex-col items-center'>
					{/* Rocket Icon with expanding glow effect */}
					<motion.div variants={itemVariants} className='mb-8 relative'>
						<div className='w-16 h-16 text-4xl flex items-center justify-center relative'>
							<motion.div
								className='absolute inset-0 bg-white/20 rounded-full blur-xl'
								variants={glowVariants}
								initial='initial'
								animate='animate'></motion.div>
							<div className='relative'>
								<span
									role='img'
									aria-label='rocket'
									className='animate-bounce relative z-10 text-5xl'
									style={{
										filter: 'drop-shadow(0 0 15px rgba(255,255,255,0.5))',
										textShadow: '0 0 20px rgba(255,255,255,0.5)',
									}}>
									🚀
								</span>
							</div>
						</div>
					</motion.div>

					{/* CTA content */}
					<motion.div variants={itemVariants} className='w-full'>
						<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
							Ready to Transform Learning?
						</h2>
						<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
							Join thousands of students who are already experiencing smarter,
							more engaging learning with ApprentieMalin's AI tutor on WhatsApp.
						</p>
						<motion.div
							variants={itemVariants}
							className='flex flex-col items-center gap-4'>
							<a
								href='https://wa.me/1234567890'
								target='_blank'
								rel='noopener noreferrer'
								className='bg-white text-[#1e1f23] hover:bg-blue-50 font-medium text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 no-underline'
								style={{ backgroundColor: 'white !important', color: '#1e1f23 !important' }}>
								<Image
									src='/whatsapp.svg'
									alt='WhatsApp icon'
									width={24}
									height={24}
								/>
								Chat on WhatsApp
							</a>
						</motion.div>
					</motion.div>
				</motion.div>
			</div>
		</Section>
	);
};

export default CTASection;
