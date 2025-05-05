import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'standard' | 'glass' | 'feature';
	withAnimation?: boolean;
	onClick?: () => void;
}

const Card = ({
	children,
	className = '',
	variant = 'standard',
	withAnimation = true,
	onClick,
}: CardProps) => {
	// Base card styles
	const baseStyles = 'rounded-lg p-6';

	// Variant-specific styles
	const variantStyles = {
		standard: 'card',
		glass: 'glass-card',
		feature:
			'bg-white/5 shadow-lg backdrop-blur-sm rounded-lg border border-white/10 hover:border-white/20',
	};

	// Combined styles
	const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	// Animation variants
	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 100, damping: 15 },
		},
	};

	// Card with animation
	if (withAnimation) {
		return (
			<motion.div
				className={cardStyles}
				variants={cardVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.1 }}
				whileHover={{ y: -5, transition: { duration: 0.2 } }}
				onClick={onClick}
				tabIndex={onClick ? 0 : undefined}
				onKeyDown={
					onClick
						? (e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									onClick();
								}
						  }
						: undefined
				}
				role={onClick ? 'button' : undefined}
				aria-label={onClick ? 'Card action' : undefined}>
				{children}
			</motion.div>
		);
	}

	// Card without animation
	return (
		<div
			className={cardStyles}
			onClick={onClick}
			tabIndex={onClick ? 0 : undefined}
			onKeyDown={
				onClick
					? (e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								onClick();
							}
					  }
					: undefined
			}
			role={onClick ? 'button' : undefined}
			aria-label={onClick ? 'Card action' : undefined}>
			{children}
		</div>
	);
};

export default Card;
