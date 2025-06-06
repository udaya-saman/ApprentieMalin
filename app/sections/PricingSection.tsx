import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

interface PricingPlan {
	title: string;
	features: string[];
	monthlyPrice: string;
	annualPrice: string;
	savings: string;
	color: string;
	buttonColor: string;
}

const pricingPlans: PricingPlan[] = [
	{
		title: 'Smart Homework Help',
		features: [
			'AI Chat access (unlimited)',
			'Homework Help Callbot access (unlimited)',
			'Smart Review feature',
		],
		monthlyPrice: 'XX.XX',
		annualPrice: 'XX.XX/year',
		savings: 'XX',
		color: 'bg-[#2196F3]',
		buttonColor: 'bg-[#2196F3] hover:bg-[#1E88E5]',
	},
	{
		title: 'Smart Polyglot',
		features: [
			'Language Learning Callbot access (unlimited)',
			'Limited Homework Help Callbot access',
		],
		monthlyPrice: 'XX.XX',
		annualPrice: 'XX.XX/year',
		savings: 'XX',
		color: 'bg-[#7C4DFF]',
		buttonColor: 'bg-[#7C4DFF] hover:bg-[#6E45E2]',
	},
	{
		title: 'ApprentieMalin Premium',
		features: [
			'FULL access to AI Chat',
			'FULL access to Homework Help Callbot',
			'FULL access to Language Learning Callbot',
			'Progress tracking',
			'Premium support',
		],
		monthlyPrice: 'XX.XX',
		annualPrice: 'XX.XX/year',
		savings: 'XX',
		color: 'bg-[#E040FB]',
		buttonColor: 'bg-[#E040FB] hover:bg-[#D033E9]',
	},
];

const PricingSection = () => {
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.95,
			rotateX: 10,
		},
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			rotateX: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
				delay: index * 0.1,
				duration: 0.8,
			},
		}),
	};

	return (
		<Section variant='blue' className='py-24' id='pricing'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					className='mb-16 text-center'
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						type: 'spring',
						stiffness: 120,
						damping: 20,
						duration: 0.8,
					}}>
					<motion.h2
						className='text-4xl md:text-5xl font-bold mb-4 !text-white'
						animate={{
							backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							ease: 'linear',
						}}>
						Choose Your Plan
					</motion.h2>
					<motion.p
						className='text-white/90 text-lg max-w-2xl mx-auto'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: 0.2,
							duration: 0.6,
							ease: [0.25, 0.46, 0.45, 0.94],
						}}>
						Select the perfect plan for your learning journey
					</motion.p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						staggerChildren: 0.2,
						delayChildren: 0.4,
					}}>
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={plan.title}
							variants={cardVariants}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							custom={index}
							whileHover={{
								scale: 1.02,
								y: -8,
								boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
								transition: {
									type: 'spring',
									stiffness: 300,
									damping: 25,
								},
							}}
							className='bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col dark:!border dark:!border-white'>
							<div className='px-8 pt-8 pb-4'>
								<h3 className='text-[22px] font-bold text-gray-900 tracking-wide'>
									{plan.title}
								</h3>
								<p className='text-sm text-gray-500 uppercase tracking-wider mt-1'>
									PER MONTH
								</p>
							</div>

							{/* Price Tag */}
							<div className='relative'>
								<div className={`${plan.color} transform -skew-y-3`}>
									<div className='py-6 px-8 transform skew-y-3'>
										<span className='text-4xl font-bold text-white'>
											€{plan.monthlyPrice}
										</span>
									</div>
								</div>
							</div>

							<div className='p-8 flex-1 flex flex-col'>
								<div className='space-y-4 mb-8'>
									{plan.features.map((feature, i) => (
										<motion.div
											key={i}
											className='flex items-start space-x-3'
											initial={{ opacity: 0, x: -10 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 * i }}
											viewport={{ once: true }}>
											<div className='flex-shrink-0 w-5 h-5 mt-0.5'>
												<svg
													className={`w-5 h-5 ${
														feature.startsWith('Limited')
															? 'text-gray-300'
															: 'text-green-500'
													}`}
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>
											<span
												className={`text-[15px] ${
													feature.startsWith('Limited')
														? 'text-gray-400'
														: 'text-gray-600'
												}`}>
												{feature}
											</span>
										</motion.div>
									))}
								</div>

								<div className='mb-8'>
									<div className='flex items-center text-[15px] text-gray-600'>
										<span>Annual plan: €{plan.annualPrice}</span>
										<span className='ml-2 text-green-500 font-medium'>
											(Save {plan.savings}%)
										</span>
									</div>
								</div>

								<div className='mt-auto'>
									<motion.button
										className={`w-full py-4 px-6 rounded-full text-white font-semibold text-[15px] tracking-wide transition-all duration-300 ${plan.buttonColor} transform hover:scale-[1.02]`}
										whileHover={{
											scale: 1.02,
											boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
										}}
										whileTap={{ scale: 0.98 }}>
										ORDER NOW
									</motion.button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className='mt-12 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						delay: 0.8,
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
					}}>
					<p className='text-sm text-white/90'>
						All plans include a 10-day free trial. No credit card required.
					</p>
				</motion.div>
			</div>
		</Section>
	);
};

export default PricingSection;
