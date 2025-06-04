'use client';

import Link from 'next/link';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';

export default function CreateAccountPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[50px]'>
			{/* Hero Section */}
			<AnimatedSection
				className='relative py-[100px] pb-[50px] overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white'
				variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
							Create Your ApprentieMalin Account
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Immediately access personalized help from our AI and Callbots for
							10 days, free and without commitment. Help your child understand
							their homework and progress in math, French, history-geography,
							English, and more!
						</p>
					</div>
				</div>
			</AnimatedSection>

			{/* Account Creation Form */}
			<section className='w-full pt-6 pb-12 bg-gray-50'>
				<div className='container mx-auto px-4'>
					<div className='max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg dark:border dark:border-white'>
						<h2 className='text-2xl font-bold text-blue-600 mb-6'>
							Information for Creating Your Account
						</h2>

						<form className='space-y-6'>
							{/* Parent Information */}
							<div className='space-y-4'>
								<h3 className='text-xl font-semibold'>
									Your Information (Parent or Legal Guardian)
								</h3>

								<div>
									<label
										htmlFor='email'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Your email address
									</label>
									<p className='text-sm text-gray-500 mb-2'>
										This address will serve as an identifier and for important
										communications.
									</p>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='password'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Choose a password
									</label>
									<input
										type='password'
										id='password'
										name='password'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='confirmPassword'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Confirm your password
									</label>
									<input
										type='password'
										id='confirmPassword'
										name='confirmPassword'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='parentFirstName'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Your First Name (Optional)
									</label>
									<input
										type='text'
										id='parentFirstName'
										name='parentFirstName'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
									/>
								</div>
							</div>

							{/* Child Information */}
							<div className='space-y-4 pt-4 border-t border-gray-200'>
								<h3 className='text-xl font-semibold'>
									Information About Your Child (the Smart Apprentice!)
								</h3>

								<div>
									<label
										htmlFor='childFirstName'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Your child's first name
									</label>
									<p className='text-sm text-gray-500 mb-2'>
										This first name may be used by the AI to personalize the
										interaction.
									</p>
									<input
										type='text'
										id='childFirstName'
										name='childFirstName'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='grade'
										className='block text-sm font-medium text-gray-700 mb-1'>
										Your child's grade
									</label>
									<p className='text-sm text-gray-500 mb-2'>
										This allows us to adapt the help to your child's school
										curriculum.
									</p>
									<select
										id='grade'
										name='grade'
										className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:!text-[#333333]'
										required>
										<option value=''>Select a grade</option>
										<option value='3rd'>3rd grade</option>
										<option value='4th'>4th grade</option>
										<option value='5th'>5th grade</option>
										<option value='6th'>6th grade</option>
										<option value='7th'>7th grade</option>
										<option value='8th'>8th grade</option>
										<option value='9th'>9th grade</option>
									</select>
								</div>
							</div>

							{/* Terms Acceptance */}
							<div className='pt-4 border-t border-gray-200'>
								<div className='flex items-start'>
									<div className='flex items-center h-5'>
										<input
											id='terms'
											name='terms'
											type='checkbox'
											className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:!accent-[#333333]'
											required
										/>
									</div>
									<div className='ml-3 text-sm'>
										<label
											htmlFor='terms'
											className='font-medium text-gray-700'>
											I have read and accept the{' '}
											<Link
												href='/terms'
												className='text-blue-600 hover:text-blue-800'>
												Terms of Use
											</Link>{' '}
											and the{' '}
											<Link
												href='/privacy'
												className='text-blue-600 hover:text-blue-800'>
												Privacy Policy
											</Link>{' '}
											of ApprentieMalin.
										</label>
									</div>
								</div>
							</div>

							{/* Submit Button */}
							<div className='pt-6'>
								<button
									type='submit'
									className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md shadow-md transition-all'>
									Create My Account and Start the 10-Day Free Trial
								</button>
								<p className='text-center mt-4'>
									Already registered?{' '}
									<Link
										href='/login'
										className='text-blue-600 hover:text-blue-800'>
										Log in here
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
}
