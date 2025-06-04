'use client';

import { useDarkMode } from '../../hooks/useDarkMode';
import { motion } from 'framer-motion';

interface DarkModeToggleProps {
	className?: string;
}

const DarkModeToggle = ({ className = '' }: DarkModeToggleProps) => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	const handleToggle = () => {
		toggleDarkMode();
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			handleToggle();
		}
	};

	return (
		<motion.button
			onClick={handleToggle}
			onKeyDown={handleKeyDown}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-all duration-300 focus:outline-none ${
				isDarkMode
					? 'bg-transparent border border-white'
					: 'bg-white/20 border border-white/30 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent'
			} ${className}`}
			aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
			aria-pressed={isDarkMode}
			tabIndex={0}>
			{/* Sun icon with rays animation */}
			<motion.svg
				animate={{
					opacity: isDarkMode ? 0.3 : 1,
					scale: isDarkMode ? 0.5 : 1,
					rotate: isDarkMode ? -180 : 0,
				}}
				transition={{ duration: 0.3 }}
				className={`absolute left-1.5 w-3.5 h-3.5 ${
					isDarkMode ? 'text-white' : 'text-white'
				}`}
				fill='currentColor'
				viewBox='0 0 20 20'>
				<path
					fillRule='evenodd'
					d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
					clipRule='evenodd'
				/>
			</motion.svg>

			{/* Moon icon with stars animation */}
			<motion.svg
				animate={{
					opacity: isDarkMode ? 1 : 0.3,
					scale: isDarkMode ? 1 : 0.5,
					rotate: isDarkMode ? 0 : 180,
				}}
				transition={{ duration: 0.3 }}
				className='absolute right-1.5 w-3.5 h-3.5'
				fill={isDarkMode ? '#f5d312' : 'white'}
				viewBox='0 0 20 20'>
				<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
				{/* Small decorative stars */}
				<circle
					cx='15'
					cy='5'
					r='1'
					fill={isDarkMode ? '#f5d312' : 'white'}
					className='animate-twinkle'
				/>
				<circle
					cx='14'
					cy='8'
					r='0.5'
					fill={isDarkMode ? '#f5d312' : 'white'}
					className='animate-twinkle'
				/>
			</motion.svg>
		</motion.button>
	);
};

export default DarkModeToggle;
