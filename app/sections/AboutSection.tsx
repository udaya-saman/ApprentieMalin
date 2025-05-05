'use client';

import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import WaveDivider from '../components/ui/WaveDivider';

const AboutSection = () => {
	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	// Content data
	const aboutPoints = [
		{
			title: 'Smart AI Support',
			description:
				'Our AI tutor understands school curriculum and provides personalized explanations.',
			icon: '🧠',
			bgColor: 'bg-blue-50',
			hoverColor: 'hover:bg-blue-100',
		},
		{
			title: 'On WhatsApp',
			description:
				'No extra apps needed! Just chat with our assistant on the platform you already use.',
			icon: '📱',
			bgColor: 'bg-green-50',
			hoverColor: 'hover:bg-green-100',
		},
		{
			title: 'Safe for Children',
			description:
				'Designed with student safety in mind, with content filtering and age-appropriate responses.',
			icon: '🛡️',
			bgColor: 'bg-red-50',
			hoverColor: 'hover:bg-red-100',
		},
		{
			title: 'All Subjects Covered',
			description:
				'From math to science, history to literature - help across the primary and middle school curriculum.',
			icon: '📚',
			bgColor: 'bg-yellow-50',
			hoverColor: 'hover:bg-yellow-100',
		},
	];

	return (
		<Section id='about' variant='white' className='relative'>
			{/* Section title */}
			<SectionTitle
				title='About ApprentieMalin'
				subtitle='We help students master their schoolwork with friendly AI-powered tutoring that makes learning easier and more accessible.'
			/>

			{/* About cards */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
				{aboutPoints.map((point, index) => (
					<motion.div
						key={point.title}
						variants={cardVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ delay: 0.1 * index }}
						whileHover={{ scale: 1.03 }}
						className='h-full'>
						<Card
							variant='glass'
							className={`h-full ${point.bgColor} ${point.hoverColor} transition-all duration-300 border-2 border-blue-200`}>
							<div className='flex flex-col items-center text-center h-full'>
								<div className='text-5xl mb-4 transform transition-transform duration-300 hover:scale-110'>
									{point.icon}
								</div>
								<h3 className='text-xl font-bold mb-2 text-blue-800'>
									{point.title}
								</h3>
								<p className='text-sm text-blue-700'>{point.description}</p>
							</div>
						</Card>
					</motion.div>
				))}
			</div>

			{/* Fun decorative elements */}
			<div className='absolute top-1/2 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse' />
			<div className='absolute bottom-20 -right-24 w-56 h-56 bg-blue-400/20 rounded-full blur-3xl animate-pulse' />

			{/* Wave divider at bottom */}
			<WaveDivider position='bottom' />
		</Section>
	);
};

export default AboutSection;
