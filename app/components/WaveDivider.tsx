'use client';

import { motion } from 'framer-motion';

interface WaveDividerProps {
	className?: string;
}

const WaveDivider = ({ className }: WaveDividerProps) => {
	return (
		<div className={`w-full overflow-hidden ${className || ''}`}>
			<motion.div
				className='relative h-24 w-full'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.2 }}>
				<svg
					viewBox='0 0 1440 100'
					className='w-full h-auto fill-navy-600'
					preserveAspectRatio='none'>
					<motion.path
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 1.5, ease: 'easeInOut' }}
						d='M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,58.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z'></motion.path>
				</svg>
			</motion.div>
		</div>
	);
};

export default WaveDivider;
