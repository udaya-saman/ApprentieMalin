'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseScrollAnimationProps {
	threshold?: number;
	once?: boolean;
	staggerChildren?: boolean;
}

export const useScrollAnimation = ({
	threshold = 0.1,
	once = true,
	staggerChildren = false,
}: UseScrollAnimationProps = {}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once,
		amount: threshold,
	});

	return {
		ref,
		isInView,
		variants: {
			hidden: { opacity: 0, y: 30 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.7,
					ease: [0.17, 0.55, 0.55, 1],
					...(staggerChildren && {
						staggerChildren: 0.2,
						delayChildren: 0.1,
					}),
				},
			},
		},
		childVariants: {
			hidden: { opacity: 0, y: 20 },
			visible: {
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.5,
					ease: [0.17, 0.55, 0.55, 1],
				},
			},
		},
	};
};

export default useScrollAnimation;
