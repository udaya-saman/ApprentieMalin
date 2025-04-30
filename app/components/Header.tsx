'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLink {
	name: string;
	href: string;
	onClick?: (e: React.MouseEvent) => void;
}

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleHomeClick = (e: React.MouseEvent) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};

	const navLinks: NavLink[] = [
		{ name: 'Home', href: '#', onClick: handleHomeClick },
		{ name: 'About', href: '#about' },
		{ name: 'How It Works', href: '#how-it-works' },
		{ name: 'Features', href: '#features' },
		{ name: 'Testimonials', href: '#testimonials' },
		{ name: 'FAQ', href: '#faq' },
	];

	const renderNavLink = (link: NavLink, isMobile = false) => (
		<Link
			key={link.name}
			href={link.href}
			onClick={link.onClick || (isMobile ? toggleMobileMenu : undefined)}
			className={`${
				isMobile ? 'text-xl' : 'text-sm'
			} font-medium transition-all duration-300 ${
				link.name === 'Home'
					? 'text-white hover:text-primary hover:scale-105'
					: 'text-white/80 hover:text-white'
			}`}>
			{link.name}
		</Link>
	);

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
					className='relative z-10 flex items-center space-x-2'>
					<span className='text-2xl font-bold gradient-text'>
						ApprentiMalin
					</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center space-x-8'>
					{navLinks.map((link) => renderNavLink(link))}
					<Link
						href='#get-started'
						className='btn text-sm bg-blue-500 text-white hover:bg-blue-600 border border-white'>
						Get Started
					</Link>
				</nav>

				{/* Mobile Menu Button */}
				<button
					className='md:hidden relative z-10 p-2'
					onClick={toggleMobileMenu}
					aria-label='Toggle mobile menu'>
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
								<Link
									href='#get-started'
									className='btn text-lg mt-4 bg-blue-500 text-white hover:bg-blue-600 border border-white'
									onClick={toggleMobileMenu}>
									Get Started
								</Link>
							</nav>
						</div>
					</motion.div>
				)}
			</div>
		</header>
	);
};

export default Header;
