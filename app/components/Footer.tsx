'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import config from '../config';
import { FooterLink } from '../types';

const Footer = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const currentYear = new Date().getFullYear();
	
	// Social media icon mapping
	const socialIcons = {
		twitter: '/images/icon/sm_icon1.png',
		facebook: '/images/icon/sm_icon2.png',
		instagram: '/images/icon/sm_icon3.png',
		linkedin: '/images/icon/sm_icon4.png',
	};
	
	// Prepare footer sections from config
	const footerSections = [
		{
			title: 'Product',
			links: config.nav.main.filter(link => link.name !== 'Home'),
		},
		{
			title: 'Resources',
			links: [
				{ name: 'Help Center', href: '#' },
				{ name: 'Blog', href: '#' },
				...config.nav.legal,
			],
		},
		{
			title: 'Company',
			links: [
				{ name: 'About Us', href: '#about' },
				{ name: 'Contact', href: `mailto:${config.contact.email}` },
				{ name: 'Careers', href: '#' },
			],
		},
	];

	return (
		<footer className='bg-navy-500 dark:bg-[#18191c] pt-16 pb-8'>
			<div className='container'>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
					{/* Logo and description */}
					<motion.div 
						variants={itemVariants} 
						className='lg:col-span-2'
					>
						<Link href='#' className='inline-block'>
							<h2 className='text-2xl font-bold text-white mb-4'>
								{config.site.name}
							</h2>
						</Link>
						<p className='text-white/70 mb-6 max-w-md'>
							{config.site.description}
						</p>
						<div className='flex space-x-4'>
							{/* Social media icons */}
							{Object.entries(config.social).map(([platform, url]) => (
								<Link
									key={platform}
									href={url}
									className='w-10 h-10 flex items-center justify-center rounded-full bg-whiteAlpha-100 hover:bg-whiteAlpha-200 transition-colors'
									aria-label={`Follow us on ${platform}`}
									tabIndex={0}>
									<Image
										src={socialIcons[platform as keyof typeof socialIcons]}
										alt={`${platform} icon`}
										width={32}
										height={32}
										className='w-8 h-8'
									/>
								</Link>
							))}
						</div>
					</motion.div>

					{/* Footer sections */}
					{footerSections.map((section) => (
						<motion.div key={section.title} variants={itemVariants}>
							<h3 className='text-white font-semibold mb-4'>{section.title}</h3>
							<ul className='space-y-2'>
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className='text-white/70 hover:text-white transition-colors'
											tabIndex={0}
											aria-label={link.name}>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom copyright section */}
				<motion.div
					variants={itemVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					className='pt-8 mt-8 border-t border-whiteAlpha-100 text-center md:text-left md:flex items-center justify-between'>
					<p className='text-white/60 text-sm mb-4 md:mb-0'>
						© {currentYear} {config.site.name}. All rights reserved.
					</p>
					<div className='flex flex-wrap justify-center md:justify-end space-x-4'>
						{config.nav.legal.map(link => (
							<Link
								key={link.name}
								href={link.href}
								className='text-white/60 hover:text-white text-sm'
								tabIndex={0}>
								{link.name}
							</Link>
						))}
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
