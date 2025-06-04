'use client';

import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FeaturesSection from './sections/FeaturesSection';
import PricingSection from './sections/PricingSection';
import ParentsSection from './sections/ParentsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from './components/Footer';

export default function Home() {
	const separatorVariants = {
		hidden: { opacity: 0, scaleX: 0 },
		visible: {
			opacity: 1,
			scaleX: 1,
			transition: {
				duration: 0.5,
				ease: [0.25, 0.46, 0.45, 0.94],
				delay: 0.2,
			},
		},
	};

	return (
		<main className='relative overflow-hidden'>
			<Header />
			<HeroSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<AboutSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<HowItWorksSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<FeaturesSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<PricingSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<ParentsSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<TestimonialsSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<FAQSection />
			<motion.div
				className='hidden dark:block w-full h-[0.3px] border-t border-dashed border-white'
				style={{
					borderImage:
						'repeating-linear-gradient(to right, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 7px, transparent 7px, transparent 14px) 1',
					opacity: '0.15 !important',
				}}
				variants={separatorVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}></motion.div>
			<CTASection />
			<Footer />
		</main>
	);
}
