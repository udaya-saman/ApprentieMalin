'use client';

import Link from 'next/link';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { motion } from 'framer-motion';

export default function PricingPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-6 md:py-10' variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
							Our Subscriptions
						</h1>
						<p className='text-lg md:text-xl mb-4'>
							Choose the learning method that suits your child&apos;s needs. All
							our plans include a xx-day free trial, so you can experience the
							benefits of ApprentieMalin before making a commitment.
						</p>
					</div>
				</div>
			</AnimatedSection>

			{/* Pricing Plans */}
			<AnimatedSection
				className='w-full py-6 bg-gray-50'
				delay={0.1}
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<div className='grid md:grid-cols-3 gap-8 items-stretch'>
						{/* Smart Homework Help Plan */}
						<AnimatedCard delay={0.2} variant='scale'>
							<div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full'>
								<div className='p-8 flex flex-col h-full'>
									<h2 className='text-2xl font-bold text-blue-600 mb-2'>
										Smart Homework Help
									</h2>
									<p className='text-gray-600 mb-6'>
										Perfect for students who need homework assistance
									</p>

									<div className='mb-6'>
										<span className='text-4xl font-bold'>€x.xx</span>
										<span className='text-gray-600'>/month</span>
									</div>

									<ul className='space-y-3 mb-8 flex-grow'>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>AI Chat Access</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Homework Help Callbot (xx calls/month)</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Smart Review Feature</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>
												Language Learning Callbot
											</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>Progress Dashboard</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>
												Interactive Exercises
											</span>
										</li>
									</ul>

									<Link
										href='/create-account?plan=homework'
										className='block w-full bg-[#2196f3] hover:bg-[#1976d2] text-white text-center font-bold py-3 px-4 rounded-md transition-all'>
										Start Free Trial
									</Link>
								</div>
							</div>
						</AnimatedCard>

						{/* Smart Polyglot Plan */}
						<AnimatedCard delay={0.4} variant='scale'>
							<div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all h-full'>
								<div className='p-8 flex flex-col h-full'>
									<h2 className='text-2xl font-bold text-purple-600 mb-2'>
										Smart Polyglot
									</h2>
									<p className='text-gray-600 mb-6'>
										Ideal for language learning enthusiasts
									</p>

									<div className='mb-6'>
										<span className='text-4xl font-bold'>€xx.xx</span>
										<span className='text-gray-600'>/month</span>
									</div>

									<ul className='space-y-3 mb-8 flex-grow'>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Language Learning Callbot Access (unlimited)</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Limited Homework Help Callbot (x calls/month)</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Language Progress Tracking</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>AI Chat Access</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>
												Smart Review Feature
											</span>
										</li>
										<li className='flex items-start'>
											<span className='text-red-500 mr-2'>✗</span>
											<span className='text-gray-400'>
												Interactive Exercises
											</span>
										</li>
									</ul>

									<Link
										href='/create-account?plan=polyglot'
										className='block w-full bg-[#7c4dff] hover:bg-[#6200ea] text-white text-center font-bold py-3 px-4 rounded-md transition-all'>
										Start Free Trial
									</Link>
								</div>
							</div>
						</AnimatedCard>

						{/* Premium Plan */}
						<AnimatedCard delay={0.6} variant='scale'>
							<div className='bg-white rounded-xl shadow-md overflow-hidden border border-blue-200 hover:shadow-xl transition-all relative transform hover:-translate-y-1 h-full'>
								<div className='absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg'>
									BEST VALUE
								</div>

								<div className='p-8 flex flex-col h-full'>
									<h2 className='text-2xl font-bold text-blue-800 mb-2'>
										ApprentieMalin Premium
									</h2>
									<p className='text-gray-600 mb-6'>
										Complete access to all features
									</p>

									<div className='mb-6'>
										<span className='text-4xl font-bold'>€xx.xx</span>
										<span className='text-gray-600'>/month</span>
									</div>

									<ul className='space-y-3 mb-8 flex-grow'>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>AI Chat Access (unlimited)</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Unlimited Homework Help Callbot</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Unlimited Language Learning Callbot</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Smart Review Feature</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Complete Progress Dashboard</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Interactive Exercises</span>
										</li>
										<li className='flex items-start'>
											<span className='text-green-500 mr-2'>✓</span>
											<span>Priority Support</span>
										</li>
									</ul>

									<Link
										href='/create-account?plan=premium'
										className='block w-full bg-[#e040fc] hover:bg-[#d500f9] text-white text-center font-bold py-3 px-4 rounded-md shadow-lg transition-all'>
										Start Free Trial
									</Link>
								</div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Comparison Table */}
			<AnimatedSection
				className='w-full py-16'
				delay={0.2}
				staggerChildren
				variant='slideInLeft'>
				<div className='container mx-auto px-4'>
					<motion.h2
						className='text-2xl md:text-3xl font-bold text-blue-600 text-center mb-12'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						Detailed Feature Comparison
					</motion.h2>

					<AnimatedCard delay={0.2} variant='slideUp'>
						<div className='overflow-x-auto'>
							<table className='w-full bg-white rounded-xl overflow-hidden shadow-lg'>
								<thead>
									<tr className='bg-gradient-to-r from-gray-50 to-gray-100'>
										<th className='text-left py-4 px-6 text-sm uppercase tracking-wider text-gray-600 font-semibold'>
											Features
										</th>
										<th className='text-center py-4 px-6 text-sm uppercase tracking-wider text-gray-600 font-semibold'>
											Smart Homework Help
										</th>
										<th className='text-center py-4 px-6 text-sm uppercase tracking-wider text-gray-600 font-semibold'>
											Smart Polyglot
										</th>
										<th className='text-center py-4 px-6 text-sm uppercase tracking-wider text-blue-700 font-semibold bg-gradient-to-r from-blue-50 to-blue-100 relative'>
											<span className='absolute -top-1 right-0 bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-bl-md'>
												BEST VALUE
											</span>
											ApprentieMalin Premium
										</th>
									</tr>
								</thead>
								<tbody className='divide-y divide-gray-100'>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											AI Chat
										</td>
										<td className='text-center py-3 px-6 text-sm text-blue-600 font-medium'>
											Unlimited
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 text-blue-600 font-medium group-hover:bg-blue-50/30'>
											Unlimited
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Homework Help Callbot
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											xx calls/month
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											x calls/month
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 text-blue-600 font-medium group-hover:bg-blue-50/30'>
											Unlimited
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Language Learning Callbot
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm text-blue-600 font-medium'>
											Unlimited
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 text-blue-600 font-medium group-hover:bg-blue-50/30'>
											Unlimited
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Smart Review
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-emerald-500 font-bold'>✓</span>
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 group-hover:bg-blue-50/30'>
											<span className='text-emerald-500 font-bold'>✓</span>
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Progress Dashboard
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											Language only
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 text-blue-600 font-medium group-hover:bg-blue-50/30'>
											Complete
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Interactive Exercises
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 group-hover:bg-blue-50/30'>
											<span className='text-emerald-500 font-bold'>✓</span>
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Photo Analysis
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-emerald-500 font-bold'>✓</span>
										</td>
										<td className='text-center py-3 px-6 text-sm'>
											<span className='text-gray-400'>—</span>
										</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 group-hover:bg-blue-50/30'>
											<span className='text-emerald-500 font-bold'>✓</span>
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-3 px-6 text-sm font-medium text-gray-700'>
											Support
										</td>
										<td className='text-center py-3 px-6 text-sm'>Standard</td>
										<td className='text-center py-3 px-6 text-sm'>Standard</td>
										<td className='text-center py-3 px-6 text-sm bg-blue-50/50 text-blue-600 font-medium group-hover:bg-blue-50/30'>
											Priority
										</td>
									</tr>
									<tr className='hover:bg-gray-50/50 transition-colors group'>
										<td className='py-4 px-6 text-sm font-medium text-gray-700'>
											Monthly Price
										</td>
										<td className='text-center py-4 px-6'>
											<span className='text-lg font-bold text-gray-900'>
												€x.xx
											</span>
										</td>
										<td className='text-center py-4 px-6'>
											<span className='text-lg font-bold text-gray-900'>
												€xx.xx
											</span>
										</td>
										<td className='text-center py-4 px-6 bg-blue-50/50 group-hover:bg-blue-50/30'>
											<span className='text-lg font-bold text-blue-600'>
												€xx.xx
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</AnimatedCard>
				</div>
			</AnimatedSection>

			{/* Call to Action */}
			<AnimatedSection
				className='w-full py-16 bg-blue-600 text-white'
				delay={0.3}
				variant='slideUp'>
				<div className='container mx-auto px-4 text-center'>
					<motion.h2
						className='text-3xl font-bold mb-6 text-white'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}>
						Ready to help your child succeed?
					</motion.h2>
					<motion.p
						className='text-xl mb-8 max-w-3xl mx-auto text-white'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}>
						Try ApprentieMalin for xx days, free and without commitment. Cancel
						anytime.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}>
						<Link
							href='/create-account'
							className='inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full shadow-lg transition-all dark:!bg-white dark:!text-[#1e1f23] dark:hover:!bg-gray-100'>
							Start Your Free Trial Now
						</Link>
					</motion.div>
				</div>
			</AnimatedSection>
		</main>
	);
}
