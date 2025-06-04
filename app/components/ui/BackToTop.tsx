'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Handle scroll event
	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when page is scrolled up 300px
			if (window.pageYOffset > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	// Dark mode detection
	useEffect(() => {
		const checkDarkMode = () => {
			setIsDarkMode(document.documentElement.classList.contains('dark'));
		};

		// Initial check
		checkDarkMode();

		// Listen for changes to the class
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	}, []);

	// Scroll to top with smooth behavior
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 20 }}
					onClick={scrollToTop}
					className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group ${
						isDarkMode
							? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm'
							: 'bg-blue-600 hover:bg-blue-700 text-white'
					}`}
					aria-label='Back to top'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 transform group-hover:-translate-y-1 transition-transform duration-300'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M5 10l7-7m0 0l7 7m-7-7v18'
						/>
					</svg>
				</motion.button>
			)}
		</AnimatePresence>
	);
};

export default BackToTop;
