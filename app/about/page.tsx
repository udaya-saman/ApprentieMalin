'use client';

import Image from 'next/image';
import AnimatedSection, {
	AnimatedCard,
} from '../components/ui/AnimatedSection';

export default function AboutPage() {
	return (
		<main className='min-h-screen bg-white text-gray-900 pt-[100px]'>
			{/* Hero Section */}
			<AnimatedSection className='w-full py-6 md:py-10' variant='slideDown'>
				<div className='container mx-auto px-4'>
					<div className='max-w-5xl mx-auto text-center'>
						<h1 className='text-3xl md:text-5xl font-bold text-blue-600 mb-6'>
							Our Story
						</h1>
						<p className='text-lg md:text-xl mb-8'>
							Discover how ApprentieMalin was born and the passion that drives
							us to revolutionize educational support.
						</p>
					</div>
				</div>
			</AnimatedSection>

			{/* Mission Section */}
			<AnimatedSection
				className='w-full py-12 bg-gray-50'
				delay={0.1}
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto'>
						<AnimatedCard className='md:w-1/2' variant='slideUp' delay={0.2}>
							<h2 className='text-2xl md:text-4xl font-bold text-blue-600 mb-4'>
								Our Mission
							</h2>
							<p className='text-lg mb-6'>
								At ApprentieMalin, we believe that every child deserves
								personalized educational support that adapts to their unique way
								of learning. Our mission is to make high-quality academic
								assistance accessible to all students, regardless of their
								location or socioeconomic background.
							</p>
							<p className='text-lg mb-6'>
								We&apos;re committed to leveraging the latest advancements in
								artificial intelligence to create tools that genuinely
								understand students&apos; needs, challenges, and emotions -
								providing support that goes beyond just giving answers to truly
								fostering understanding and autonomy.
							</p>
						</AnimatedCard>
						<AnimatedCard
							className='md:w-1/2 flex justify-center items-center'
							variant='scale'
							delay={0.3}>
							<Image
								src='/images/studying.png'
								alt='Students studying with AI assistance'
								width={450}
								height={300}
							/>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Origin Story */}
			<AnimatedSection
				className='w-full py-12'
				delay={0.2}
				variant='slideInLeft'>
				<div className='container mx-auto px-4'>
					<div className='flex flex-col md:flex-row-reverse gap-8 items-center max-w-6xl mx-auto'>
						<div className='md:w-1/2'>
							<h2 className='text-2xl md:text-4xl font-bold text-blue-600 mb-4'>
								How It All Started
							</h2>
							<p className='text-lg mb-6'>
								ApprentieMalin was founded in 2022 by a team of educators, AI
								researchers, and parents who observed a critical gap in
								educational support. While tutoring services existed, they were
								often expensive, limited in availability, and not tailored to
								individual learning styles.
							</p>
							<p className='text-lg mb-6'>
								Our founders experienced firsthand the challenges of helping
								their own children with homework - the time constraints, the
								frustration when a concept wasn&apos;t understood, and the
								desire to foster independence while providing support. This
								sparked the idea: what if AI could be trained specifically to
								provide the kind of patient, personalized, step-by-step guidance
								that students need?
							</p>
							<p className='text-lg'>
								After two years of research, development, and testing with
								hundreds of students, ApprentieMalin was born - an AI-powered
								learning companion that combines the best of technology and
								pedagogy to help students truly understand their schoolwork.
							</p>
						</div>
						<div className='md:w-1/2'>
							<AnimatedCard variant='slideUp' delay={0.4}>
								<Image
									src='/images/mading.png'
									alt='Founders of ApprentieMalin'
									width={450}
									height={300}
								/>
							</AnimatedCard>
						</div>
					</div>
				</div>
			</AnimatedSection>

			{/* Values Section */}
			<AnimatedSection
				className='w-full py-12 bg-gray-50'
				delay={0.3}
				staggerChildren
				variant='fadeUp'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl md:text-4xl font-bold text-blue-600 text-center mb-10'>
						Our Core Values
					</h2>

					<div className='grid md:grid-cols-3 gap-8'>
						<AnimatedCard variant='scale'>
							<div className='bg-white p-6 rounded-xl shadow-md dark:border dark:border-white'>
								<div className='w-16 h-16 bg-blue-100 dark:bg-transparent rounded-full flex items-center justify-center mb-6 mx-auto'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-blue-600'
										style={{ stroke: '#ffdc05 !important' }}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-center mb-4'>
									Understanding Over Answers
								</h3>
								<p className='text-center'>
									We believe in guiding students to find solutions themselves,
									building critical thinking and problem-solving skills rather
									than simply providing answers.
								</p>
							</div>
						</AnimatedCard>

						<AnimatedCard variant='scale'>
							<div className='bg-white p-6 rounded-xl shadow-md dark:border dark:border-white'>
								<div className='w-16 h-16 bg-green-100 dark:bg-transparent rounded-full flex items-center justify-center mb-6 mx-auto'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-green-600'
										style={{ stroke: '#ffdc05 !important' }}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-center mb-4'>
									Accessibility For All
								</h3>
								<p className='text-center'>
									Education should not be a privilege. We&apos;re committed to
									making quality educational support available to students from
									all backgrounds and learning styles.
								</p>
							</div>
						</AnimatedCard>

						<AnimatedCard variant='scale'>
							<div className='bg-white p-6 rounded-xl shadow-md dark:border dark:border-white'>
								<div className='w-16 h-16 bg-purple-100 dark:bg-transparent rounded-full flex items-center justify-center mb-6 mx-auto'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-8 w-8 text-purple-600'
										style={{ stroke: '#ffdc05 !important' }}
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-center mb-4'>
									Privacy & Safety First
								</h3>
								<p className='text-center'>
									We prioritize the safety and privacy of our young users,
									ensuring all interactions are age-appropriate, secure, and
									respectful of data protection.
								</p>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Team Section */}
			<AnimatedSection
				className='w-full py-12'
				delay={0.2}
				staggerChildren
				variant='slideInRight'>
				<div className='container mx-auto px-4'>
					<h2 className='text-2xl md:text-4xl font-bold text-blue-600 text-center mb-10'>
						Meet Our Team
					</h2>

					<div className='grid md:grid-cols-4 gap-6'>
						{/* Team Member Cards */}
						<AnimatedCard variant='slideUp'>
							<div
								className='bg-white p-4 rounded-xl shadow-md text-center'
								style={{
									border: '0.1px solid white',
								}}>
								<div className='w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center border-[3px] border-blue-300 p-[5px] bg-white'>
									<Image
										src='/images/team-1.jpg'
										alt='Isabelle Lefèvre'
										width={128}
										height={128}
										className='rounded-full'
									/>
								</div>
								<h3 className='text-xl font-bold'>Isabelle Lefèvre</h3>
								<p className='text-blue-600 mb-2'>Co-Founder & CEO</p>
								<p className='text-sm text-gray-600'>
									Former educator with 15 years of experience in EdTech
									innovation.
								</p>
							</div>
						</AnimatedCard>

						<AnimatedCard variant='slideUp'>
							<div
								className='bg-white p-4 rounded-xl shadow-md text-center'
								style={{
									border: '0.1px solid white',
								}}>
								<div className='w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center border-[3px] border-blue-300 p-[5px] bg-white'>
									<Image
										src='/images/team-2.jpg'
										alt='Philippe Moreau'
										width={128}
										height={128}
										className='rounded-full'
									/>
								</div>
								<h3 className='text-xl font-bold'>Philippe Moreau</h3>
								<p className='text-blue-600 mb-2'>Co-Founder & CTO</p>
								<p className='text-sm text-gray-600'>
									AI researcher with a passion for applying machine learning to
									education.
								</p>
							</div>
						</AnimatedCard>

						<AnimatedCard variant='slideUp'>
							<div
								className='bg-white p-4 rounded-xl shadow-md text-center'
								style={{
									border: '0.1px solid white',
								}}>
								<div className='w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center border-[3px] border-blue-300 p-[5px] bg-white'>
									<Image
										src='/images/team-3.jpg'
										alt='Aurélie Martin'
										width={128}
										height={128}
										className='rounded-full'
									/>
								</div>
								<h3 className='text-xl font-bold'>Aurélie Martin</h3>
								<p className='text-blue-600 mb-2'>Head of Pedagogy</p>
								<p className='text-sm text-gray-600'>
									Curriculum specialist ensuring our AI aligns with educational
									standards.
								</p>
							</div>
						</AnimatedCard>

						<AnimatedCard variant='slideUp'>
							<div
								className='bg-white p-4 rounded-xl shadow-md text-center'
								style={{
									border: '0.1px solid white',
								}}>
								<div className='w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 flex items-center justify-center border-[3px] border-blue-300 p-[5px] bg-white'>
									<Image
										src='/images/team-4.jpg'
										alt='Nicolas Bertrand'
										width={128}
										height={128}
										className='rounded-full'
									/>
								</div>
								<h3 className='text-xl font-bold'>Nicolas Bertrand</h3>
								<p className='text-blue-600 mb-2'>Head of Product</p>
								<p className='text-sm text-gray-600'>
									UX expert focused on creating intuitive learning experiences.
								</p>
							</div>
						</AnimatedCard>
					</div>
				</div>
			</AnimatedSection>

			{/* Final Section */}
			<AnimatedSection
				className='w-full py-16 bg-blue-600 text-white'
				delay={0.3}
				variant='slideUp'>
				<div className='container mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold mb-6 text-white'>
						Join Us in Transforming Education
					</h2>
					<p className='text-xl mb-8 max-w-3xl mx-auto text-white'>
						We&apos;re on a mission to make quality education accessible to all.
						With ApprentieMalin, we&apos;re not just helping with homework -
						we&apos;re building the foundation for lifelong learning.
					</p>
				</div>
			</AnimatedSection>
		</main>
	);
}
