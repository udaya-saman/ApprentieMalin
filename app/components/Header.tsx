'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';
import config from '../config';

// Define type for the tracking variable
type VisibleSection = { id: string; ratio: number };

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState<string>('');
	const observerRef = useRef<IntersectionObserver | null>(null);
	const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
	// Keep track of the last explicitly set active section by the observer
	const lastObservedSection = useRef<string>('');

	// Function to get section ID from hash
	const getSectionIdFromHash = (hash: string): string => {
		return hash.startsWith('#') ? hash.substring(1) : '';
	};

	// Handle scroll events to change header appearance
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setIsScrolled(currentScrollY > 10);
			// If scrolled near top, always set Home active
			if (currentScrollY < 50) {
				if (activeSection !== '') {
					// Only update if not already home
					setActiveSection('');
					lastObservedSection.current = '';
				}
			}
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // Initial check
		return () => window.removeEventListener('scroll', handleScroll);
	}, [activeSection]); // Keep activeSection dependency here for the check

	// Set initial active section based on URL hash
	useEffect(() => {
		const initialSectionId = getSectionIdFromHash(window.location.hash);
		if (initialSectionId) {
			setActiveSection(initialSectionId);
			lastObservedSection.current = initialSectionId;
		} else if (window.scrollY < 50) {
			setActiveSection('');
			lastObservedSection.current = '';
		}
	}, []);

	// Setup Intersection Observer for section highlighting
	useEffect(() => {
		const sectionIds = [
			...config.nav.main.map((link) => getSectionIdFromHash(link.href)),
			'get-started',
		].filter(Boolean);

		const observerCallback: IntersectionObserverCallback = (entries) => {
			let mostVisibleSection: VisibleSection | null = null;

			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (
						!mostVisibleSection ||
						entry.intersectionRatio > mostVisibleSection.ratio
					) {
						mostVisibleSection = {
							id: entry.target.id,
							ratio: entry.intersectionRatio,
						} as VisibleSection;
					}
				}
			});

			// Only update state if a section is clearly visible and different from current
			if (
				mostVisibleSection &&
				(mostVisibleSection as VisibleSection).ratio > 0.2
			) {
				if (activeSection !== (mostVisibleSection as VisibleSection).id) {
					setActiveSection((mostVisibleSection as VisibleSection).id);
					lastObservedSection.current = (
						mostVisibleSection as VisibleSection
					).id;
				}
			}
			// No 'else' block: If nothing is clearly visible,
			// rely on scroll listener to set Home, or keep the last active section.
		};

		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px', // Reverted to observe full viewport
			threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
		};

		observerRef.current = new IntersectionObserver(
			observerCallback,
			observerOptions,
		);
		const currentObserver = observerRef.current;

		const timeoutId = setTimeout(() => {
			sectionIds.forEach((id) => {
				const element = document.getElementById(id);
				if (element && currentObserver) {
					// Added null check for currentObserver
					sectionRefs.current[id] = element;
					currentObserver.observe(element);
				} else if (!element) {
					console.warn(`Header Observer: Element with ID '${id}' not found.`);
				}
			});
		}, 100);

		return () => {
			clearTimeout(timeoutId);
			const currentObserverInstance = observerRef.current;
			Object.values(sectionRefs.current).forEach((element) => {
				if (element && currentObserverInstance) {
					currentObserverInstance.unobserve(element);
				}
			});
		};
	}, []); // Keep dependencies empty for observer setup

	// Toggle mobile menu
	const handleToggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Scroll to top when clicking home link
	const handleHomeClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
		if (window.location.hash) {
			history.pushState(
				null,
				'',
				window.location.pathname + window.location.search,
			);
		}
		// Ensure state updates happen immediately on click
		if (activeSection !== '') {
			setActiveSection('');
			lastObservedSection.current = '';
		}
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};

	// Extend the navigation items from config
	const navLinks: NavLink[] = config.nav.main.map((link) => {
		if (link.name === 'Home') {
			return { ...link, onClick: handleHomeClick };
		}
		return link;
	});

	// Render a navigation link
	const renderNavLink = (link: NavLink, isMobile = false) => {
		const sectionId = getSectionIdFromHash(link.href);
		const isActive =
			(link.name === 'Home' && activeSection === '') ||
			activeSection === sectionId;

		return (
			<Link
				key={link.name}
				href={link.href}
				onClick={
					link.name === 'Home'
						? link.onClick
						: isMobile
						? handleToggleMobileMenu
						: undefined
				}
				className={`${
					isMobile ? 'text-2xl' : 'text-base'
				} font-medium transition-all duration-300 ${
					isActive ? 'text-[#ffd400]' : 'text-white/80 hover:text-white'
				}`}
				tabIndex={0}
				aria-label={link.name}
				aria-current={isActive ? 'page' : undefined}>
				{link.name}
			</Link>
		);
	};

	// Get Started button link component
	const GetStartedButton = ({ isMobile = false }: { isMobile?: boolean }) => {
		const isActive = activeSection === 'get-started';
		return (
			<Link
				href='#get-started'
				className={`btn ${isMobile ? 'text-xl mt-4' : 'text-base'}
						bg-blue-500 hover:bg-blue-600 border border-white
						${isActive ? 'text-[#ffd400]' : 'text-white'}`}
				onClick={isMobile ? handleToggleMobileMenu : undefined}
				tabIndex={0}
				aria-label='Get Started'
				aria-current={isActive ? 'page' : undefined}>
				Get Started
			</Link>
		);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background-dark/80 backdrop-blur-md shadow-md py-[15px]'
					: 'bg-transparent py-[15px]'
			}`}>
			<div className='container flex items-center justify-between'>
				{/* Logo */}
				<Link
					href='#'
					onClick={handleHomeClick}
					className='relative z-10 flex items-center space-x-2'
					tabIndex={0}
					aria-label='ApprentieMalin Home'>
					<Image
						src='/images/logo.png'
						alt='ApprentieMalin Logo'
						width={180}
						height={40}
						priority
						className='h-auto w-auto'
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center space-x-8'>
					{navLinks.map((link) => renderNavLink(link))}
					<GetStartedButton />
				</nav>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden relative z-10 p-2'
					onClick={handleToggleMobileMenu}
					aria-label='Toggle mobile menu'
					tabIndex={0}>
					<div
						className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
							isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
						}`}></div>
					<div
						className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${
							isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
						}`}></div>
					<div
						className={`w-6 h-0.5 bg-white transition-all ${
							isMobileMenuOpen ? '-rotate-45 translate-y-[-7px]' : ''
						}`}></div>
				</button>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween' }}
							className='fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-lg md:hidden'>
							<div className='flex flex-col items-center justify-center h-full'>
								<nav className='flex flex-col items-center space-y-6'>
									{navLinks.map((link) => renderNavLink(link, true))}
									<GetStartedButton isMobile={true} />
								</nav>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
};

export default Header;
