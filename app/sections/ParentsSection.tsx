import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';

const benefits = [
	'Less stress during homework time',
	"Reliable support even when you're busy",
	'Tools to help you better support your child',
	"Development of your child's learning autonomy",
	'Optional progress tracking (with Premium)',
];

const ParentsSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 15,
			},
		},
	};

	return (
		<Section variant='white' className='py-20' id='parents'>
			<div className='container max-w-6xl mx-auto'>
				<SectionTitle
					title='For Parents'
					subtitle='ApprentieMalin benefits the entire family:'
					className='mb-16'
				/>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					<div className='space-y-6'>
						{benefits.map((benefit, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className='flex items-start space-x-4'>
								<div className='flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center'>
									<svg
										className='w-6 h-6 text-blue-600'
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
								<div>
									<p className='text-lg text-gray-700 font-medium'>{benefit}</p>
								</div>
							</motion.div>
						))}
					</div>

					<div className='relative'>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className='aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-1'>
							<div className='w-full h-full bg-white rounded-xl p-8 flex items-center justify-center'>
								<img
									src='/images/forParents.gif'
									alt='Parents and children learning together'
									className='w-full h-auto'
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</Section>
	);
};

export default ParentsSection;
