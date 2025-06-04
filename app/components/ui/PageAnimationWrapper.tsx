'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import useAnimationVariants from '@/app/hooks/useAnimationVariants';

interface PageAnimationWrapperProps {
	children: React.ReactNode;
}

const PageAnimationWrapper = ({ children }: PageAnimationWrapperProps) => {
	const pathname = usePathname();
	const animations = useAnimationVariants();

	// Don't animate the home page
	if (pathname === '/') {
		return <>{children}</>;
	}

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				key={pathname}
				variants={animations.fadeIn()}
				initial='hidden'
				animate='visible'
				exit='hidden'
				transition={{
					duration: 0.3,
					ease: [0.22, 1, 0.36, 1],
				}}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageAnimationWrapper;
