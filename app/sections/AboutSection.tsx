'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const fadeUpVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id='about' className='py-20 pt-24 section-white relative'>
			<div className='container mx-auto px-4'>
				<motion.div
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={fadeUpVariants}
					className='max-w-4xl mx-auto text-center mb-10'>
					<h2 className='text-3xl md:text-4xl font-bold mb-4'>
						About <span className='gradient-text'>ApprentieMalin</span>
					</h2>
					<p className='text-lg text-blue-900 mb-6'>
						ApprentieMalin connects students with instant, personalized academic
						support through WhatsApp. Our AI tutor helps primary and middle
						school students build confidence and excel in their studies with
						24/7 homework assistance.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
					{aboutFeatures.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial='hidden'
							animate={inView ? 'visible' : 'hidden'}
							variants={{
								hidden: { opacity: 0, y: 30 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.6, delay: 0.1 * index },
								},
							}}
							className='card hover:bg-white/5 hover:scale-105 transition-all duration-300 bg-white p-6 rounded-xl shadow-sm'>
							<div className='w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 mx-auto md:mx-0'>
								<span className='text-xl font-bold text-white'>
									{feature.icon}
								</span>
							</div>
							<h3 className='text-xl font-bold mb-3 text-blue-900 text-center md:text-left'>
								{feature.title}
							</h3>
							<p className='text-blue-800 text-center md:text-left'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { duration: 0.8, delay: 0.6 },
						},
					}}
					className='mt-16 p-6 md:p-8 bg-white border border-blue-100 rounded-2xl shadow-md'>
					<div className='flex flex-col md:flex-row items-center'>
						<div className='w-full md:w-2/3 mb-6 md:mb-0 md:pr-8'>
							<h3 className='text-2xl font-bold mb-4 text-blue-900'>
								Our Commitment
							</h3>
							<p className='text-blue-800 mb-4'>
								Founded by educators and parents, ApprentieMalin is trusted by
								over 10,000 students weekly. We're committed to academic
								excellence with 93% of users reporting improved understanding of
								difficult concepts.
							</p>
							<p className='text-blue-800'>
								Child safety is our priority. We employ advanced content
								monitoring and align all educational guidance with current
								curricula across math, sciences, languages, and humanities for
								grades 1-9.
							</p>
						</div>
						<div className='w-full md:w-1/3 flex justify-center'>
							<div className='w-40 h-40 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center'>
								<div className='w-32 h-32 rounded-full bg-white border border-blue-200 flex items-center justify-center'>
									<span className='text-4xl'>🛡️</span>
								</div>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

const aboutFeatures = [
	{
		icon: '📚',
		title: 'Academic Support',
		description:
			'Instant homework help and explanations for complex topics available 24/7, with responses in under 2 minutes.',
	},
	{
		icon: '💬',
		title: 'WhatsApp Integration',
		description:
			'Access tutoring directly through WhatsApp—no new apps to download, just message and learn immediately.',
	},
	{
		icon: '🔍',
		title: 'Curriculum-Aligned',
		description:
			'All content follows official educational standards for primary and middle school subjects across multiple disciplines.',
	},
];

export default AboutSection;
