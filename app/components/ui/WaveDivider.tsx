import React from 'react';

interface WaveDividerProps {
	position?: 'top' | 'bottom';
	color?: string;
	className?: string;
	height?: number;
}

const WaveDivider = ({
	position = 'bottom',
	color = '#0062E6',
	className = '',
	height = 80,
}: WaveDividerProps) => {
	// Position-specific styles and transformations
	const positionStyles = {
		top: 'top-0 -mt-1',
		bottom: 'bottom-0 -mb-1',
	};

	// SVG transformation based on position
	const transform = position === 'top' ? 'rotate(180)' : '';

	return (
		<div
			className={`absolute left-0 right-0 w-full overflow-hidden ${positionStyles[position]} ${className}`}
			style={{ height: `${height}px` }}>
			<svg
				viewBox='0 0 1440 320'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute w-full h-full'
				preserveAspectRatio='none'>
				<path
					transform={transform}
					fill={color}
					fillOpacity='1'
					className='dark:fill-[#1e1f23]'
					d='M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,208C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
			</svg>
		</div>
	);
};

export default WaveDivider;
