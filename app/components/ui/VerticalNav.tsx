'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
	{
		id: 'hero',
		label: 'Home',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
				/>
			</svg>
		),
	},
	{
		id: 'about',
		label: 'About',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
	{
		id: 'how-it-works',
		label: 'How It Works',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
				/>
			</svg>
		),
	},
	{
		id: 'features',
		label: 'Features',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
				/>
			</svg>
		),
	},
	{
		id: 'pricing',
		label: 'Pricing',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
				/>
			</svg>
		),
	},
	{
		id: 'parents',
		label: 'For Parents',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
				/>
			</svg>
		),
	},
	{
		id: 'testimonials',
		label: 'Testimonials',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
				/>
			</svg>
		),
	},
	{
		id: 'faq',
		label: 'FAQ',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>
		),
	},
	{
		id: 'get-started',
		label: 'Get Started',
		icon: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M13 10V3L4 14h7v7l9-11h-7z'
				/>
			</svg>
		),
	},
];

const VerticalNav = () => {
	const [activeSection, setActiveSection] = useState('hero');
	const [isWhiteBackground, setIsWhiteBackground] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		// Check if dark mode is enabled
		const checkDarkMode = () => {
			setIsDarkMode(document.documentElement.classList.contains('dark'));
		};

		// Initial check
		checkDarkMode();

		// Listen for changes to the class
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class'],
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const checkBackground = (element: Element | null) => {
			if (!element) return false;

			const section = element as HTMLElement;
			const computedStyle = window.getComputedStyle(section);
			const bgColor = computedStyle.backgroundColor;
			const bgImage = computedStyle.backgroundImage;

			return (
				section.classList.contains('section-white') ||
				section.dataset.variant === 'white' ||
				bgColor === 'rgb(255, 255, 255)' ||
				bgColor === '#ffffff' ||
				bgColor === '#fff' ||
				bgColor === 'rgba(255, 255, 255, 1)' ||
				bgImage.includes('to-white') ||
				section.classList.contains('bg-white') ||
				section.classList.contains('bg-gray-50') ||
				section.classList.contains('bg-slate-50')
			);
		};

		const calculateVisibility = (element: Element): number => {
			const rect = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			const headerHeight = 60; // Account for fixed header

			// If the element is not in view at all
			if (rect.bottom < headerHeight || rect.top > windowHeight) {
				return 0;
			}

			// Calculate how much of the element is visible, accounting for header
			const visibleTop = Math.max(rect.top, headerHeight);
			const visibleBottom = Math.min(rect.bottom, windowHeight);
			const visibleHeight = visibleBottom - visibleTop;
			const elementHeight = rect.height;

			return visibleHeight / elementHeight;
		};

		const handleScroll = () => {
			let maxVisibility = 0;
			let mostVisibleSection: Element | null = null;

			navItems.forEach(({ id }) => {
				const section = document.getElementById(id);
				if (section) {
					const visibility = calculateVisibility(section);

					// Update the most visible section
					if (visibility > maxVisibility) {
						maxVisibility = visibility;
						mostVisibleSection = section;
					}
				}
			});

			if (!mostVisibleSection || maxVisibility <= 0.3) return;

			// At this point, mostVisibleSection is guaranteed to be a non-null Element
			setActiveSection(mostVisibleSection.id);

			// Only check background in normal mode, not in dark mode
			if (!isDarkMode) {
				setIsWhiteBackground(checkBackground(mostVisibleSection));
			}
		};

		// Initial check
		handleScroll();

		// Add scroll event listener with throttling
		let ticking = false;
		const scrollListener = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', scrollListener);
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', scrollListener);
			window.removeEventListener('resize', handleScroll);
		};
	}, [isDarkMode]);

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			const headerHeight = 60; // Height of the fixed header
			const elementPosition =
				section.getBoundingClientRect().top + window.scrollY;

			window.scrollTo({
				top: elementPosition - headerHeight,
				behavior: 'smooth',
			});
		}
	};

	// In dark mode, always use glassmorphism style
	const shouldUseGlassmorphism = isDarkMode || !isWhiteBackground;

	return (
		<motion.nav
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			className='fixed left-4 top-[calc(50%-100px)] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4'>
			{navItems.map((item) => (
				<div key={item.id} className='relative group'>
					<button
						onClick={() => scrollToSection(item.id)}
						className={`p-2 rounded-full transition-all duration-300 backdrop-blur-sm ${
							activeSection === item.id
								? 'bg-blue-600/90 text-white shadow-lg scale-110'
								: shouldUseGlassmorphism
								? 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
								: 'bg-gray-100/80 text-gray-600 hover:bg-gray-200/80 hover:text-gray-900'
						}`}
						aria-label={item.label}>
						{item.icon}
					</button>

					{/* Tooltip */}
					<div
						className={`absolute left-full ml-3 px-2 py-1 rounded-md text-xs font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-lg ${
							isDarkMode
								? 'bg-gray-900/95 text-white backdrop-blur-sm border border-white/20'
								: shouldUseGlassmorphism
								? 'bg-white/95 text-blue-900 backdrop-blur-sm border border-blue-200/50'
								: 'bg-gray-800/95 text-white backdrop-blur-sm border border-gray-600/30'
						}`}>
						{item.label}
						{/* Arrow */}
						<div
							className={`absolute top-1/2 -left-1 w-1.5 h-1.5 transform -translate-y-1/2 rotate-45 ${
								isDarkMode
									? 'bg-gray-900/95 border-l border-b border-white/20'
									: shouldUseGlassmorphism
									? 'bg-white/95 border-l border-b border-blue-200/50'
									: 'bg-gray-800/95 border-l border-b border-gray-600/30'
							}`}></div>
					</div>
				</div>
			))}
		</motion.nav>
	);
};

export default VerticalNav;
