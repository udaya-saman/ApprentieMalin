import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
	id?: string;
	className?: string;
	children: React.ReactNode;
	variant?: 'blue' | 'white' | 'default';
	withContainer?: boolean;
	withAnimation?: boolean;
}

const Section = ({
	id,
	className = '',
	children,
	variant = 'default',
	withContainer = true,
	withAnimation = true,
}: SectionProps) => {
	// Define base section styles
	const baseStyles = 'section relative';

	// Variant-specific styles
	const variantStyles = {
		blue: 'section-blue',
		white: 'section-white',
		default: '',
	};

	// Combined styles
	const sectionStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
				duration: 0.5,
			},
		},
	};

	// The main content
	const content = withContainer ? (
		<div className='container'>{children}</div>
	) : (
		children
	);

	// Return the section with or without animation
	return withAnimation ? (
		<motion.section
			id={id}
			className={sectionStyles}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}>
			{content}
		</motion.section>
	) : (
		<section id={id} className={sectionStyles}>
			{content}
		</section>
	);
};

export default Section;
