'use client';

import Link from 'next/link';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-6 md:py-10' variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
							Contact Us
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Have questions about ApprentieMalin? We&apos;re here to help.
							Reach out to our team through any of the channels below.
						</p>
					</div>
				</div>
			</AnimatedSection>

			{/* Contact Options */}
			<AnimatedSection
				className='w-full pt-6 pb-12 bg-gray-50'
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
						{/* Email Contact */}
						<AnimatedCard variant='scale'>
							<motion.div
								className='bg-white p-6 rounded-xl shadow-md text-center h-full flex flex-col dark:border dark:border-white'
								whileHover={{ y: -5, transition: { duration: 0.2 } }}>
								<motion.div
									className='w-16 h-16 bg-blue-100 dark:bg-transparent rounded-full flex items-center justify-center mb-4 mx-auto'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.4, delay: 0.6 }}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-blue-600'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</motion.div>
								<h3 className='text-xl font-bold mb-2'>Email Us</h3>
								<p className='text-gray-600 mb-4 flex-grow'>
									For general inquiries, customer support, or partnership
									opportunities.
								</p>
								<motion.a
									href='mailto:support@apprentiemalin.com'
									className='text-blue-600 font-medium hover:text-blue-800'
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}>
									support@apprentiemalin.com
								</motion.a>
							</motion.div>
						</AnimatedCard>

						{/* Phone Contact */}
						<AnimatedCard variant='scale'>
							<motion.div
								className='bg-white p-6 rounded-xl shadow-md text-center h-full flex flex-col dark:border dark:border-white'
								whileHover={{ y: -5, transition: { duration: 0.2 } }}>
								<motion.div
									className='w-16 h-16 bg-green-100 dark:bg-transparent rounded-full flex items-center justify-center mb-4 mx-auto'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.4, delay: 0.7 }}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-green-600'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
										/>
									</svg>
								</motion.div>
								<h3 className='text-xl font-bold mb-2'>Call Us</h3>
								<p className='text-gray-600 mb-4 flex-grow'>
									Speak with our customer support team during business hours.
								</p>
								<div>
									<motion.a
										href='tel:+11234567890'
										className='text-green-600 font-medium hover:text-green-800'
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}>
										+1 (123) 456-7890
									</motion.a>
									<p className='text-sm text-gray-500 mt-2'>
										Monday - Friday: 9AM - 6PM CET
									</p>
								</div>
							</motion.div>
						</AnimatedCard>

						{/* Social Media */}
						<AnimatedCard variant='scale'>
							<motion.div
								className='bg-white p-6 rounded-xl shadow-md text-center h-full flex flex-col dark:border dark:border-white'
								whileHover={{ y: -5, transition: { duration: 0.2 } }}>
								<motion.div
									className='w-16 h-16 bg-purple-100 dark:bg-transparent rounded-full flex items-center justify-center mb-4 mx-auto'
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ duration: 0.4, delay: 0.8 }}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-purple-600'
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
								</motion.div>
								<h3 className='text-xl font-bold mb-2'>Follow Us</h3>
								<p className='text-gray-600 mb-4 flex-grow'>
									Connect with us on social media for updates and educational
									content.
								</p>
								<div className='flex justify-center space-x-4'>
									<motion.a
										href='https://twitter.com/apprentiemalin'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-400 hover:text-blue-600'
										aria-label='Twitter'
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
										</svg>
									</motion.a>
									<motion.a
										href='https://facebook.com/apprentiemalin'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 hover:text-blue-800'
										aria-label='Facebook'
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
										</svg>
									</motion.a>
									<motion.a
										href='https://instagram.com/apprentiemalin'
										target='_blank'
										rel='noopener noreferrer'
										className='text-pink-600 hover:text-pink-800'
										aria-label='Instagram'
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
										</svg>
									</motion.a>
									<motion.a
										href='https://linkedin.com/company/apprentiemalin'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-700 hover:text-blue-900'
										aria-label='LinkedIn'
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='currentColor'
											viewBox='0 0 24 24'>
											<path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
										</svg>
									</motion.a>
								</div>
							</motion.div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* FAQ Link */}
			<AnimatedSection
				className='w-full py-12 bg-gray-50'
				delay={0.1}
				variant='slideUp'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-2xl font-bold text-blue-600 mb-4'>
						Common Questions?
					</h2>
					<p className='text-lg mb-6'>
						Before reaching out, you might find the answer to your question in
						our frequently asked questions.
					</p>
					<div>
						<Link
							href='/faq'
							className='inline-block bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition-all'>
							Visit our FAQ
						</Link>
					</div>
				</div>
			</AnimatedSection>

			{/* Contact Form */}
			<AnimatedSection
				className='w-full py-12'
				delay={0.2}
				variant='slideInLeft'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto'>
						<h2 className='text-2xl md:text-3xl font-bold text-blue-600 text-center mb-8'>
							Send Us a Message
						</h2>

						<AnimatedCard variant='slideUp' delay={0.3}>
							<motion.form
								className='bg-white p-8 rounded-xl shadow-md dark:border dark:border-white'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}>
								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<motion.div
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.7 }}>
										<label
											htmlFor='firstName'
											className='block text-sm font-medium text-gray-700 mb-1'>
											First Name
										</label>
										<input
											type='text'
											id='firstName'
											name='firstName'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
											required
										/>
									</motion.div>

									<motion.div
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.7 }}>
										<label
											htmlFor='lastName'
											className='block text-sm font-medium text-gray-700 mb-1'>
											Last Name
										</label>
										<input
											type='text'
											id='lastName'
											name='lastName'
											className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
											required
										/>
									</motion.div>
								</div>

								<motion.div
									className='mb-6'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.8 }}>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Email Address
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required
									/>
								</motion.div>

								<motion.div
									className='mb-6'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.9 }}>
									<label
										htmlFor='subject'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Subject
									</label>
									<select
										id='subject'
										name='subject'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required>
										<option value=''>Select a subject</option>
										<option value='general'>General Inquiry</option>
										<option value='support'>Customer Support</option>
										<option value='billing'>Billing Question</option>
										<option value='partnership'>Partnership Opportunity</option>
										<option value='feedback'>Feedback</option>
									</select>
								</motion.div>

								<motion.div
									className='mb-6'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 1 }}>
									<label
										htmlFor='message'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Your Message
									</label>
									<textarea
										id='message'
										name='message'
										rows={5}
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required></textarea>
								</motion.div>

								<motion.div
									className='flex items-start mb-6'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 1.1 }}>
									<div className='flex items-center h-5'>
										<input
											id='privacy'
											name='privacy'
											type='checkbox'
											className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:!text-[#333333]'
											required
										/>
									</div>
									<div className='ml-3 text-sm'>
										<label
											htmlFor='privacy'
											className='font-medium text-gray-700'>
											I agree to the{' '}
											<Link
												href='/privacy'
												className='text-blue-600 hover:text-blue-800'>
												Privacy Policy
											</Link>{' '}
											and consent to having my data processed.
										</label>
									</div>
								</motion.div>

								<motion.button
									type='submit'
									className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-all'
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}>
									Send Message
								</motion.button>
							</motion.form>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
