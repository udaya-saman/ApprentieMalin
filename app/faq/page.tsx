'use client';

import Link from 'next/link';
import config from '../config';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function FAQPage() {
	const faqItems = config.faq;

	// Group FAQ items by category
	const generalFAQs = faqItems.slice(0, 3); // First 3 items
	const servicesFAQs = faqItems.slice(3, 6); // Next 3 items
	const pricingFAQs = faqItems.slice(6, 9); // Next 3 items
	const technicalFAQs = faqItems.slice(9); // Remaining items

	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-6 md:py-10' variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto text-center'>
						<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
							Frequently Asked Questions
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Find answers to common questions about ApprentieMalin. If you
							can&apos;t find what you&apos;re looking for, feel free to{' '}
							<Link
								href='/contact'
								className='text-blue-600 hover:text-blue-800'>
								contact our support team
							</Link>
							.
						</p>
					</div>
				</div>
			</AnimatedSection>

			{/* FAQ Quick Links */}
			<AnimatedSection
				className='w-full pt-8 pb-2 bg-gray-50'
				delay={0.1}
				variant='fadeUp'
				staggerChildren>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto flex flex-wrap justify-center gap-4'>
						<AnimatedCard variant='scale'>
							<motion.a
								href='#general'
								className='px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-blue-600 hover:bg-blue-50 transition-colors'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								General Questions
							</motion.a>
						</AnimatedCard>
						<AnimatedCard variant='scale'>
							<motion.a
								href='#services'
								className='px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-blue-600 hover:bg-blue-50 transition-colors'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Our Services
							</motion.a>
						</AnimatedCard>
						<AnimatedCard variant='scale'>
							<motion.a
								href='#pricing'
								className='px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-blue-600 hover:bg-blue-50 transition-colors'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Pricing & Subscriptions
							</motion.a>
						</AnimatedCard>
						<AnimatedCard variant='scale'>
							<motion.a
								href='#technical'
								className='px-4 py-2 bg-white shadow-sm border border-gray-200 rounded-full text-blue-600 hover:bg-blue-50 transition-colors'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								Technical Support
							</motion.a>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* General FAQ Section */}
			<AnimatedSection
				id='general'
				className='w-full pt-2 pb-6 -mt-8'
				delay={0.2}
				variant='fadeUp'
				staggerChildren>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
							General Questions
						</h2>

						<div className='space-y-6'>
							{generalFAQs.map((faq, index) => (
								<AnimatedCard
									key={index}
									variant='slideUp'
									delay={0.1 * (index + 1)}>
									<div className='bg-white p-6 rounded-lg shadow-md'>
										<h3 className='text-xl font-semibold mb-3'>
											{faq.question}
										</h3>
										<p className='text-gray-700'>{faq.answer}</p>
									</div>
								</AnimatedCard>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Services FAQ Section */}
			<AnimatedSection
				id='services'
				className='w-full py-12 bg-gray-50'
				delay={0.2}
				variant='slideInLeft'
				staggerChildren>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
							Our Services
						</h2>

						<div className='space-y-6'>
							{servicesFAQs.map((faq, index) => (
								<AnimatedCard
									key={index}
									variant='slideUp'
									delay={0.1 * (index + 1)}>
									<div className='bg-white p-6 rounded-lg shadow-md'>
										<h3 className='text-xl font-semibold mb-3'>
											{faq.question}
										</h3>
										<p className='text-gray-700'>{faq.answer}</p>
									</div>
								</AnimatedCard>
							))}
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Pricing FAQ Section */}
			<AnimatedSection
				id='pricing'
				className='w-full py-12'
				delay={0.2}
				variant='slideInRight'
				staggerChildren>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
							Pricing & Subscriptions
						</h2>

						<div className='space-y-6'>
							{pricingFAQs.map((faq, index) => (
								<AnimatedCard
									key={index}
									variant='slideUp'
									delay={0.1 * (index + 1)}>
									<div className='bg-white p-6 rounded-lg shadow-md'>
										<h3 className='text-xl font-semibold mb-3'>
											{faq.question}
										</h3>
										<p className='text-gray-700'>{faq.answer}</p>
									</div>
								</AnimatedCard>
							))}

							{/* Additional Pricing FAQ */}
							<AnimatedCard variant='slideUp' delay={0.4}>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<h3 className='text-xl font-semibold mb-3'>
										Can I change my subscription plan?
									</h3>
									<p className='text-gray-700'>
										Yes, you can upgrade, downgrade, or cancel your subscription
										at any time from your account settings. Changes to your
										subscription will take effect at the start of your next
										billing cycle.
									</p>
								</div>
							</AnimatedCard>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Technical FAQ Section */}
			<AnimatedSection
				id='technical'
				className='w-full py-12 bg-gray-50'
				delay={0.2}
				variant='slideInLeft'
				staggerChildren>
				<div className='container mx-auto px-4'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
							Technical Support
						</h2>

						<div className='space-y-6'>
							{technicalFAQs.map((faq, index) => (
								<AnimatedCard
									key={index}
									variant='slideUp'
									delay={0.1 * (index + 1)}>
									<div className='bg-white p-6 rounded-lg shadow-md'>
										<h3 className='text-xl font-semibold mb-3'>
											{faq.question}
										</h3>
										<p className='text-gray-700'>{faq.answer}</p>
									</div>
								</AnimatedCard>
							))}

							{/* Additional Technical FAQs */}
							<AnimatedCard variant='slideUp' delay={0.4}>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<h3 className='text-xl font-semibold mb-3'>
										What devices are compatible with ApprentieMalin?
									</h3>
									<p className='text-gray-700'>
										ApprentieMalin is fully responsive and works on any device
										with a web browser, including computers, tablets, and
										smartphones. For the best experience, we recommend using the
										latest version of Chrome, Firefox, Safari, or Edge.
									</p>
								</div>
							</AnimatedCard>

							<AnimatedCard variant='slideUp' delay={0.5}>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<h3 className='text-xl font-semibold mb-3'>
										How do I reset my password?
									</h3>
									<p className='text-gray-700'>
										If you&apos;ve forgotten your password, you can reset it by
										clicking on the &quot;Forgot Password&quot; link on the
										login page. You will receive an email with instructions to
										create a new password. If you don&apos;t receive the email,
										please check your spam folder or contact our support team.
									</p>
								</div>
							</AnimatedCard>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Still Have Questions */}
			<AnimatedSection
				className='w-full py-16 bg-blue-600 text-white'
				delay={0.3}
				variant='slideUp'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-6 text-white'>
						Still Have Questions?
					</h2>
					<p className='text-xl mb-8 max-w-4xl mx-auto text-white'>
						Our support team is here to help. We&apos;ll get back to you as
						quickly as possible.
					</p>
					<div>
						<Link
							href='/contact'
							className='inline-block bg-white text-[#1e1f23] hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all'>
							Contact Us
						</Link>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
