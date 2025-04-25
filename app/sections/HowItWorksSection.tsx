'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
	const features = [
		{
			title: 'Click to start a chat with Vevy',
			icon: '💬',
			position: 'top-left',
		},
		{
			title: 'Integrate Vevy in minutes',
			icon: '🔧',
			position: 'top-right',
		},
		{
			title: 'Vevy understands and responds instantly',
			icon: '👂',
			position: 'left',
		},
		{
			title: 'Get quick answers or support right away',
			icon: '⚡',
			position: 'bottom-left',
		},
		{
			title: 'Use data to enhance service',
			icon: '📊',
			position: 'bottom-right',
		},
		{
			title: 'Handle common queries effortlessly',
			icon: '🤖',
			position: 'right',
		},
	];

	return (
		<section
			id='how-it-works'
			className='section section-blue relative overflow-hidden pt-20 pb-32'>
			<div className='container mx-auto relative z-10'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
						How It <span className='text-gradient'>Works?</span>
					</h2>
					<p className='text-lg text-white/80 max-w-3xl mx-auto'>
						Exploring the mechanics and functionality of ApprentieMalin Bot:
						providing insight into how they interact and respond to user and
						business inputs.
					</p>
				</div>

				<div
					className='relative mx-auto my-16'
					style={{ height: '600px', maxWidth: '900px' }}>
					{/* Center bot container - absolute center position */}
					<div
						className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center'
						style={{ width: '220px' }}>
						<div className='flex items-center justify-center w-full'>
							<Image
								src='/images/howIt.png'
								alt='ApprentieMalin Bot'
								width={220}
								height={220}
								className='object-contain'
								priority
							/>
						</div>
						<div className='mt-1'>
							<p className='text-sm font-medium text-white whitespace-nowrap'>
								ApprentieMalin Bot
							</p>
						</div>
					</div>

					{/* Feature boxes - positioned in a circular layout */}
					{features.map((feature, index) => (
						<motion.div
							key={index}
							className='feature-box absolute bg-blue-600/30 backdrop-blur-lg rounded-xl p-6 
							border border-white/20 flex flex-col items-center justify-center text-center w-44 h-44 
							shadow-lg'
							style={getCircularPosition(index, features.length)}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.05,
								boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
								borderColor: 'rgba(255, 255, 255, 0.3)',
							}}>
							<div className='text-3xl mb-3'>{feature.icon}</div>
							<p className='text-white text-sm font-medium'>{feature.title}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Subtle background elements */}
			<div className='absolute inset-0 opacity-5 pointer-events-none'>
				<div className='absolute w-full h-full bg-grid-pattern'></div>
			</div>
		</section>
	);
};

// Helper function to position elements in a circle
const getCircularPosition = (index: number, total: number) => {
	// Calculate angle based on index and total number of items
	// Start from the top (-90 degrees or -π/2 radians) and go clockwise
	const angleStep = (2 * Math.PI) / total;
	const angle = -Math.PI / 2 + index * angleStep;

	// Radius of the circle - Adjust this value based on your layout needs
	const radius = 280;

	// Calculate position relative to the center (50%, 50%)
	const centerX = 50;
	const centerY = 50;

	// Convert polar coordinates (angle, radius) to cartesian (x, y) percentages
	// We use radius directly to determine the offset from the center.
	// The offsets need to be scaled relative to the container dimensions.
	// Assuming container width is approx 900px and height 600px. A direct pixel radius might be better.
	// Let's stick to pixels relative to center for now for predictability.
	const xOffset = radius * Math.cos(angle);
	const yOffset = radius * Math.sin(angle);

	// Calculate final position using calc() for centering relative to the parent
	return {
		left: `calc(50% + ${xOffset}px)`,
		top: `calc(50% + ${yOffset}px)`,
		transform: 'translate(-50%, -50%)', // Center the box itself on the calculated point
	};
};

export default HowItWorksSection;
