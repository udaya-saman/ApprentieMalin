'use client';

import Link from 'next/link';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';
import { Metadata } from 'next';
import { motion } from 'framer-motion';

export default function ClientAreaPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900'>
			{/* Welcome Banner */}
			<AnimatedSection
				className='w-full py-10 pt-32 bg-gradient-to-r from-blue-700 to-blue-500 text-white'
				variant='slideDown'>
				<div
					className='container mx-auto px-4'
					style={{ paddingTop: '40px', paddingBottom: '40px' }}>
					<div className='max-w-5xl mx-auto text-center'>
						<motion.h1
							className='text-3xl md:text-5xl font-bold mb-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							Welcome to your ApprentieMalin space
						</motion.h1>
						<motion.p
							className='text-lg md:text-xl opacity-90'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}>
							Hello, Here's what you can access with your subscription:
						</motion.p>
					</div>
				</div>
			</AnimatedSection>

			{/* Quick Access Tools */}
			<AnimatedSection
				className='w-full py-12'
				delay={0.1}
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
						Quick access to help tools
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						{/* AI Chat Card */}
						<AnimatedCard delay={0.2}>
							<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all'>
								<div className='p-6'>
									<div className='flex items-center gap-4 mb-4'>
										<div className='w-12 h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 h-6 text-blue-600'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
												/>
											</svg>
										</div>
										<h3 className='text-xl font-semibold'>
											Chat with ApprentieMalin AI
										</h3>
									</div>
									<p className='text-gray-600 mb-6'>
										Ask your questions in writing, get help with your homework,
										send photos.
									</p>
									<Link
										href='/client-area/chat'
										className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all'>
										Access Chat
									</Link>
								</div>
							</div>
						</AnimatedCard>

						{/* Callbots Card */}
						<AnimatedCard delay={0.4}>
							<div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all'>
								<div className='p-6'>
									<div className='flex items-center gap-4 mb-4'>
										<div className='w-12 h-12 flex-shrink-0 bg-purple-100 dark:bg-transparent rounded-full flex items-center justify-center'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='w-6 h-6 text-purple-600'
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
										</div>
										<h3 className='text-xl font-semibold'>Call our callbots</h3>
									</div>
									<p className='text-gray-600 mb-6'>
										Get voice help for your homework or practice English.
									</p>
									<Link
										href='/client-area/callbots'
										className='inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-all'>
										See available Callbots
									</Link>
								</div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Recent Activity & Progress */}
			<AnimatedSection
				className='w-full py-12 bg-gray-50'
				delay={0.3}
				staggerChildren>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
						Your Learning Journey
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						{/* Recent Activity */}
						<AnimatedCard delay={0.2}>
							<div className='bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100 h-full'>
								<h2 className='text-2xl font-bold text-blue-600 mb-6'>
									Recent Activity
								</h2>

								<div className='space-y-4'>
									<div className='flex items-start gap-4 border-b border-gray-100 pb-4'>
										<div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0'>
											<span className='text-blue-600 text-sm'>📚</span>
										</div>
										<div>
											<p className='font-medium'>Math Practice Session</p>
											<p className='text-sm text-gray-600'>
												Completed 3 exercises on Algebra
											</p>
											<p className='text-xs text-gray-400 mt-1'>2 hours ago</p>
										</div>
									</div>

									<div className='flex items-start gap-4 border-b border-gray-100 pb-4'>
										<div className='w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
											<span className='text-green-600 text-sm'>🗣️</span>
										</div>
										<div>
											<p className='font-medium'>English Conversation</p>
											<p className='text-sm text-gray-600'>
												15-minute speaking practice
											</p>
											<p className='text-xs text-gray-400 mt-1'>Yesterday</p>
										</div>
									</div>

									<div className='flex items-start gap-4'>
										<div className='w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0'>
											<span className='text-purple-600 text-sm'>✍️</span>
										</div>
										<div>
											<p className='font-medium'>History Essay Help</p>
											<p className='text-sm text-gray-600'>
												Got assistance with research
											</p>
											<p className='text-xs text-gray-400 mt-1'>2 days ago</p>
										</div>
									</div>
								</div>
							</div>
						</AnimatedCard>

						{/* Progress Overview */}
						<AnimatedCard delay={0.4}>
							<div className='bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100 h-full'>
								<h2 className='text-2xl font-bold text-blue-600 mb-6'>
									Progress Overview
								</h2>

								<div className='space-y-6'>
									<div>
										<div className='flex justify-between mb-2'>
											<span className='font-medium'>Math</span>
											<span className='text-gray-600'>85%</span>
										</div>
										<motion.div
											className='h-2 bg-gray-100 rounded-full overflow-hidden'
											initial={{ opacity: 0, scaleX: 0 }}
											whileInView={{ opacity: 1, scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.6 }}>
											<div
												className='h-full bg-blue-600 rounded-full'
												style={{ width: '85%' }}></div>
										</motion.div>
									</div>

									<div>
										<div className='flex justify-between mb-2'>
											<span className='font-medium'>English</span>
											<span className='text-gray-600'>70%</span>
										</div>
										<motion.div
											className='h-2 bg-gray-100 rounded-full overflow-hidden'
											initial={{ opacity: 0, scaleX: 0 }}
											whileInView={{ opacity: 1, scaleX: 1 }}
											transition={{ duration: 0.8, delay: 0.8 }}>
											<div
												className='h-full bg-green-600 rounded-full'
												style={{ width: '70%' }}></div>
										</motion.div>
									</div>

									<div>
										<div className='flex justify-between mb-2'>
											<span className='font-medium'>Science</span>
											<span className='text-gray-600'>60%</span>
										</div>
										<motion.div
											className='h-2 bg-gray-100 rounded-full overflow-hidden'
											initial={{ opacity: 0, scaleX: 0 }}
											whileInView={{ opacity: 1, scaleX: 1 }}
											transition={{ duration: 0.8, delay: 1 }}>
											<div
												className='h-full bg-purple-600 rounded-full'
												style={{ width: '60%' }}></div>
										</motion.div>
									</div>

									<div>
										<div className='flex justify-between mb-2'>
											<span className='font-medium'>History</span>
											<span className='text-gray-600'>74%</span>
										</div>
										<motion.div
											className='h-2 bg-gray-100 rounded-full overflow-hidden'
											initial={{ opacity: 0, scaleX: 0 }}
											whileInView={{ opacity: 1, scaleX: 1 }}
											transition={{ duration: 0.8, delay: 1.2 }}>
											<div
												className='h-full bg-orange-600 rounded-full'
												style={{ width: '74%' }}></div>
										</motion.div>
									</div>
								</div>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Account Management */}
			<AnimatedSection className='w-full py-12' delay={0.4} staggerChildren>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl md:text-3xl font-bold text-blue-600 mb-8'>
						Account Management
					</h2>

					<div className='grid md:grid-cols-2 gap-8'>
						{/* Subscription Panel */}
						<AnimatedCard delay={0.2}>
							<div className='bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100'>
								<h2 className='text-2xl font-bold text-blue-600 mb-6'>
									My Subscription
								</h2>

								<div className='space-y-4 mb-6'>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Current plan:</span>
										<span className='font-medium'>[Subscription Type]</span>
									</div>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Expiration date:</span>
										<span className='font-medium'>[Date]</span>
									</div>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Payment method:</span>
										<span className='font-medium'>[Method]</span>
									</div>
								</div>

								<Link
									href='/client-area/subscription'
									className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all'>
									Manage my subscription
								</Link>
							</div>
						</AnimatedCard>

						{/* Account Panel */}
						<AnimatedCard delay={0.4}>
							<div className='bg-white rounded-xl shadow-md overflow-hidden p-6 border border-gray-100'>
								<h2 className='text-2xl font-bold text-blue-600 mb-6'>
									Account Settings
								</h2>

								<div className='space-y-4 mb-6'>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Email:</span>
										<span className='font-medium'>[Email Address]</span>
									</div>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Language:</span>
										<span className='font-medium'>English</span>
									</div>
									<div className='flex justify-between items-center border-b border-gray-100 pb-2'>
										<span className='text-gray-600'>Notifications:</span>
										<span className='font-medium'>Enabled</span>
									</div>
								</div>

								<Link
									href='/client-area/settings'
									className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all'>
									Edit Settings
								</Link>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>
		</main>
	);
}
