import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
	title: string;
	subtitle?: string;
	align?: 'left' | 'center' | 'right';
	withAnimation?: boolean;
	className?: string;
	subtitleClassName?: string;
	titleClassName?: string;
}

const SectionTitle = ({
	title,
	subtitle,
	align = 'center',
	withAnimation = true,
	className = '',
	titleClassName = '',
	subtitleClassName = '',
}: SectionTitleProps) => {
	// Define alignment classes
	const alignmentClasses = {
		left: 'text-left',
		center: 'text-center mx-auto',
		right: 'text-right ml-auto',
	};

	// Animation variants
	const titleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	// Combined styles
	const containerStyles = `${alignmentClasses[align]} ${className}`;
	const titleStyles = `section-title ${titleClassName}`;
	const subtitleStyles = `section-subtitle ${subtitleClassName}`;

	// Content with or without animation
	if (withAnimation) {
		return (
			<div className={containerStyles}>
				<motion.h2
					className={titleStyles}
					variants={titleVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}>
					{title}
				</motion.h2>
				{subtitle && (
					<motion.p
						className={subtitleStyles}
						variants={titleVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}>
						{subtitle}
					</motion.p>
				)}
			</div>
		);
	}

	return (
		<div className={containerStyles}>
			<h2 className={titleStyles}>{title}</h2>
			{subtitle && <p className={subtitleStyles}>{subtitle}</p>}
		</div>
	);
};

export default SectionTitle;
