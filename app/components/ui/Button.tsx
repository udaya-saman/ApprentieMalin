'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import useAnimationVariants from '@/app/hooks/useAnimationVariants';

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	variant?: 'primary' | 'secondary';
	className?: string;
	onClick?: () => void;
	animate?: boolean;
}

const Button = ({
	children,
	href,
	variant = 'primary',
	className = '',
	onClick,
	animate = true,
}: ButtonProps) => {
	const animations = useAnimationVariants();

	// Base button styles
	const baseStyles = 'btn';

	// Variant-specific styles
	const variantStyles = {
		primary: 'btn-primary',
		secondary: 'btn-secondary',
	};

	// Combined styles
	const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	// Framer Motion props for animation
	const motionProps = animate
		? {
				variants: animations.fadeUp(),
				initial: 'hidden',
				animate: 'visible',
				whileHover: animations.hover,
				whileTap: animations.tap,
		  }
		: {};

	// If href is provided, render as Link
	if (href) {
		return (
			<motion.div {...motionProps}>
				<Link
					href={href}
					onClick={onClick}
					className={buttonStyles}
					tabIndex={0}
					aria-label={typeof children === 'string' ? children : undefined}>
					{children}
				</Link>
			</motion.div>
		);
	}

	// Otherwise, render as button
	return (
		<motion.button
			{...motionProps}
			onClick={onClick}
			className={buttonStyles}
			tabIndex={0}
			aria-label={typeof children === 'string' ? children : undefined}>
			{children}
		</motion.button>
	);
};

export default Button;
