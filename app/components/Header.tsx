'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';
import config from '../config';
import { usePathname, useRouter } from 'next/navigation';
import DarkModeToggle from './ui/DarkModeToggle';

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
	// Get the current pathname for navigation highlighting
	const pathname = usePathname();
	const router = useRouter();

	// Add isHomePage constant to check if we're on home page
	const isHomePage = pathname === '/';

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

	// Setup Intersection Observer for section highlighting (only on homepage)
	useEffect(() => {
		// Only apply observation on homepage
		if (pathname !== '/') return;

		const sectionIds = [
			...config.nav.main.map((link) => getSectionIdFromHash(link.href)),
			'get-started',
		].filter(Boolean);

		const observerCallback: IntersectionObserverCallback = (entries) => {
			let mostVisibleSection: VisibleSection | null = null;

			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const currentSection: VisibleSection = {
						id: entry.target.id,
						ratio: entry.intersectionRatio,
					};

					if (
						mostVisibleSection === null ||
						currentSection.ratio > mostVisibleSection.ratio
					) {
						mostVisibleSection = currentSection;
					}
				}
			});

			// Type guard function to ensure TypeScript knows the type
			const isValidSection = (section: VisibleSection | null): section is VisibleSection => {
				return section !== null && typeof section.ratio === 'number' && section.ratio > 0.2;
			};

			// Only update state if a section is clearly visible and different from current
			if (isValidSection(mostVisibleSection)) {
				if (activeSection !== mostVisibleSection.id) {
					setActiveSection(mostVisibleSection.id);
					lastObservedSection.current = mostVisibleSection.id;
				}
			}
		};

		const observerOptions: IntersectionObserverInit = {
			root: null,
			rootMargin: '0px',
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
					sectionRefs.current[id] = element;
					currentObserver.observe(element);
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
	}, [pathname, activeSection]);

	// Toggle mobile menu
	const handleToggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Scroll to top when clicking home link
	const handleHomeClick = (e: React.MouseEvent) => {
		e.preventDefault();

		// If we're not on the homepage, navigate to it
		if (!isHomePage) {
			router.push('/');
			return;
		}

		// If we're on homepage, just scroll to top
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

	// Check if a link is active based on pathname or section
	const isLinkActive = (link: NavLink): boolean => {
		// For home link
		if (link.name === 'Home' && pathname === '/' && activeSection === '') {
			return true;
		}

		// For hash links on homepage
		if (pathname === '/' && link.href.startsWith('#')) {
			const sectionId = getSectionIdFromHash(link.href);
			return activeSection === sectionId;
		}

		// For page links
		if (!link.href.startsWith('#')) {
			return pathname === link.href;
		}

		return false;
	};

	// Render a navigation link
	const renderNavLink = (link: NavLink, isMobile = false) => {
		const isActive = isLinkActive(link);

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
					isMobile ? 'text-2xl py-3' : 'text-base'
				} font-medium transition-colors duration-300 ${
					isActive
						? 'text-[#ffd400] dark:text-[#ffd400]'
						: 'text-white/80 dark:text-white hover:text-white dark:hover:text-white'
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
		const isActive = pathname === '/create-account';
		return (
			<Link
				href='/create-account'
				className={`btn ${isMobile ? 'text-xl mt-6' : 'text-base'}
					bg-blue-500 hover:bg-blue-600 dark:bg-[#1d1f23] dark:hover:bg-[#1d1f23] border border-white/20 dark:border-white px-6 py-2.5 rounded-full
					transition-all duration-300 ${
						isActive
							? 'text-[#ffd400] dark:text-[#ffd400]'
							: 'text-white dark:text-white'
					}`}
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
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
				isScrolled || !isHomePage
					? 'bg-background-dark/90 dark:bg-[#1d1f23]/90 backdrop-blur-md shadow-lg py-4'
					: 'bg-transparent py-6'
			}`}
			style={{
				transitionProperty: 'background-color, backdrop-filter, box-shadow, padding',
			}}>
			<div className='container mx-auto px-4 max-w-7xl'>
				<div className='flex items-center justify-between'>
					{/* Logo */}
					<Link
						href='/'
						onClick={handleHomeClick}
						className='relative z-10 flex items-center space-x-2'
						tabIndex={0}
						aria-label='ApprentieMalin Home'>
						<Image
							src='/images/logo.png'
							alt='ApprentieMalin Logo'
							width={160}
							height={40}
							priority
							className='h-8 w-auto'
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex items-center space-x-8'>
						{navLinks.map((link) => renderNavLink(link))}
						<DarkModeToggle className='mr-2' />
						<GetStartedButton />
					</nav>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden relative z-10 p-2'
						onClick={handleToggleMobileMenu}
						aria-label='Toggle mobile menu'
						tabIndex={0}>
						<div
							className={`w-6 h-0.5 bg-white dark:bg-white mb-1.5 transition-all duration-500 ${
								isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
							}`}></div>
						<div
							className={`w-6 h-0.5 bg-white dark:bg-white mb-1.5 transition-all duration-500 ${
								isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
							}`}></div>
						<div
							className={`w-6 h-0.5 bg-white dark:bg-white transition-all duration-500 ${
								isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
							}`}></div>
					</button>

					{/* Mobile Menu */}
					<AnimatePresence>
						{isMobileMenuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
								className='fixed inset-0 z-40 bg-background-dark/98 dark:bg-[#1d1f23]/98 backdrop-blur-lg md:hidden pt-20'
								style={{
									transition: 'background-color 0.5s ease-in-out',
								}}>
								<div className='flex flex-col items-center justify-start h-full p-8'>
									<nav className='flex flex-col items-center space-y-4'>
										{navLinks.map((link) => renderNavLink(link, true))}
										<div className='flex items-center space-x-4 mt-4'>
											<DarkModeToggle />
											<GetStartedButton isMobile={true} />
										</div>
									</nav>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</header>
	);
};

export default Header;
