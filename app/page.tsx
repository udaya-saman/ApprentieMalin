'use client';

import Header from './components/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import HowItWorksSection from './sections/HowItWorksSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import CTASection from './sections/CTASection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className='relative overflow-hidden'>
			<Header />
			<HeroSection />
			<AboutSection />
			<HowItWorksSection />
			<FeaturesSection />
			<TestimonialsSection />
			<FAQSection />
			<CTASection />
			<Footer />
		</main>
	);
}
