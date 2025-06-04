'use client';

import { motion } from 'framer-motion';
import useAnimationVariants from '@/app/hooks/useAnimationVariants';

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	staggerChildren?: boolean;
	id?: string;
	variant?:
		| 'fadeUp'
		| 'fadeIn'
		| 'slideInLeft'
		| 'slideInRight'
		| 'slideUp'
		| 'slideDown'
		| 'scale';
}

export default function AnimatedSection({
	children,
	className = '',
	delay = 0,
	staggerChildren = false,
	id,
	variant = 'fadeUp',
}: AnimatedSectionProps) {
	const animations = useAnimationVariants();

	// Get the appropriate animation variant
	const getVariant = () => {
		switch (variant) {
			case 'fadeIn':
				return animations.fadeIn({ delay });
			case 'slideInLeft':
				return animations.slideInLeft({ delay });
			case 'slideInRight':
				return animations.slideInRight({ delay });
			case 'slideUp':
				return animations.slideUp({ delay });
			case 'slideDown':
				return animations.slideDown({ delay });
			case 'scale':
				return animations.scale({ delay });
			default:
				return animations.fadeUp({ delay });
		}
	};

	// Get container variant if staggering children
	const containerVariant = staggerChildren
		? animations.staggerContainer({ delay })
		: getVariant();

	return (
		<motion.section
			id={id}
			className={className}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-5%', amount: 0.3 }}
			variants={containerVariant}>
			{children}
		</motion.section>
	);
}

interface AnimatedCardProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	hover?: boolean;
	variant?: 'fadeUp' | 'scale' | 'slideUp';
}

export function AnimatedCard({
	children,
	className = '',
	delay = 0,
	hover = true,
	variant = 'fadeUp',
}: AnimatedCardProps) {
	const animations = useAnimationVariants();

	// Get the appropriate animation variant
	const getCardVariant = () => {
		switch (variant) {
			case 'scale':
				return animations.scale({ delay });
			case 'slideUp':
				return animations.slideUp({ delay });
			default:
				return animations.fadeUp({ delay });
		}
	};

	return (
		<motion.div
			className={className}
			variants={getCardVariant()}
			whileHover={hover ? animations.hover : undefined}
			whileTap={hover ? animations.tap : undefined}>
			{children}
		</motion.div>
	);
}
