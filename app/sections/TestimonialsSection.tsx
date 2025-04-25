'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Pagination,
	Autoplay,
	Navigation,
	EffectCoverflow,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const TestimonialsSection = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const testimonials = [
		{
			quote:
				"ApprentieMalin helped me understand fractions in a way that my textbook couldn't. The explanations are so clear and easy to follow!",
			name: 'Liam, 10 years old',
			role: '5th Grade Student',
			image: '/images/student1.jpg',
			rating: 5,
		},
		{
			quote:
				"My daughter's confidence in math has improved so much since using ApprentieMalin. It's like having a personal tutor available whenever she needs help.",
			name: 'Marie Dupont',
			role: 'Parent of Emma, 11',
			image: '/images/parent1.jpg',
			rating: 5,
		},
		{
			quote:
				'I love that I can ask questions while doing my homework and get help right away. The AI tutor is really friendly and explains things well.',
			name: 'Sophie, 12 years old',
			role: '7th Grade Student',
			image: '/images/student2.jpg',
			rating: 5,
		},
		{
			quote:
				"As a busy parent, I appreciate that my son can get homework help instantly through WhatsApp. It's convenient and the explanations are age-appropriate.",
			name: 'Thomas Martin',
			role: 'Parent of Noah, 9',
			image: '/images/parent2.jpg',
			rating: 5,
		},
		{
			quote:
				'The practice questions helped me prepare for my science test. I got an A! Thank you ApprentieMalin!',
			name: 'Lucas, 11 years old',
			role: '6th Grade Student',
			image: '/images/student3.jpg',
			rating: 5,
		},
	];

	return (
		<section
			id='testimonials'
			className='py-24 section-blue relative overflow-hidden'
			style={{ backgroundColor: '#0c1330' }}>
			<div className='container mx-auto px-4'>
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.6 }}
					className='max-w-3xl mx-auto text-center mb-[38px]'>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
						What Our Students <span className='text-white'>Are Saying</span>
					</h2>
					<p className='text-lg text-white/80 max-w-2xl mx-auto'>
						Discover how ApprentieMalin makes learning enjoyable and effective.
						Students and parents share their success stories with our AI-powered
						learning assistant.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={inView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='relative mx-auto'
					style={{ maxWidth: '950px', height: '380px' }}>
					{/* Left large quotation mark */}
					<div className='absolute left-6 top-1/3 z-30 text-4xl text-blue-800/20 font-serif'>
						"
					</div>

					{/* Right large quotation mark */}
					<div className='absolute right-6 top-1/3 z-30 text-4xl text-blue-800/20 font-serif'>
						"
					</div>

					<div className='relative h-full'>
						{/* Custom prev button - styled exactly like in the image */}
						<button
							className='swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-50 text-white/60 hover:text-white transition-colors'
							style={{ left: '-10px' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-10 h-10'>
								<path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' />
							</svg>
						</button>

						{/* Main Swiper */}
						<Swiper
							modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
							effect='coverflow'
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={1.5}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								depth: 100,
								modifier: 3,
								slideShadows: false,
							}}
							loop={true}
							pagination={{
								el: '.testimonial-pagination',
								clickable: true,
								bulletActiveClass: 'active',
							}}
							navigation={{
								prevEl: '.swiper-button-prev-custom',
								nextEl: '.swiper-button-next-custom',
							}}
							className='testimonial-swiper h-full'>
							{testimonials.map((testimonial, index) => (
								<SwiperSlide key={index} className='py-8'>
									<div
										className='testimonial-card bg-[#0c1c54] rounded-xl shadow-lg mx-auto overflow-hidden'
										style={{ maxWidth: '800px', height: '290px' }}>
										{/* Left quotation mark in the card */}
										<div className='absolute left-6 top-10 text-5xl text-white/10 font-serif'>
											"
										</div>

										{/* Right quotation mark in the card */}
										<div className='absolute right-6 bottom-10 text-5xl text-white/10 font-serif'>
											"
										</div>

										<div className='px-14 py-8 text-center h-full flex flex-col justify-between'>
											{/* Profile image at top */}
											<div className='mb-3'>
												<Image
													src={testimonial.image}
													alt={testimonial.name}
													width={55}
													height={55}
													className='rounded-full mx-auto border-2 border-white/10'
												/>
											</div>

											{/* Star rating - reduced size */}
											<div className='flex justify-center mb-3'>
												{[...Array(5)].map((_, i) => (
													<svg
														key={i}
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 24 24'
														fill='currentColor'
														className='w-4 h-4 text-yellow-400 mx-0.5'>
														<path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
													</svg>
												))}
											</div>

											{/* Quote text - slightly smaller */}
											<p className='text-white/90 text-sm leading-relaxed line-clamp-2 max-w-2xl mx-auto mb-4'>
												{testimonial.quote}
											</p>

											{/* Name and role - reduced by half */}
											<div>
												<p className='font-medium text-white text-sm'>
													{testimonial.name}
												</p>
												<p className='text-white/60 text-xs'>
													{testimonial.role}
												</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Custom next button - styled exactly like in the image */}
						<button
							className='swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-50 text-white/60 hover:text-white transition-colors'
							style={{ right: '-10px' }}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='w-10 h-10'>
								<path d='M8.59 7.41L10 6l6 6-6 6-1.41-1.41L13.17 12z' />
							</svg>
						</button>
					</div>

					{/* Custom pagination exactly as in the image */}
					<div className='testimonial-pagination flex justify-center space-x-3 mt-6 mb-[50px]'></div>
				</motion.div>
			</div>

			{/* Styles for pagination and custom navigation */}
			<style jsx global>{`
				/* Slide styling for 3D effect */
				.testimonial-swiper .swiper-slide {
					opacity: 0.6;
					transform: scale(0.85);
					transition: all 0.5s ease;
					filter: blur(1px);
				}

				.testimonial-swiper .swiper-slide-active {
					opacity: 1;
					transform: scale(1);
					z-index: 10;
					filter: blur(0);
				}

				.testimonial-swiper .swiper-slide-prev,
				.testimonial-swiper .swiper-slide-next {
					z-index: 5;
				}

				/* Custom pagination bullets */
				.testimonial-pagination {
					margin-top: 20px;
				}

				.testimonial-pagination .swiper-pagination-bullet {
					width: 8px;
					height: 8px;
					background-color: rgba(255, 255, 255, 0.3);
					border-radius: 50%;
					opacity: 1;
					transition: all 0.3s ease;
				}

				.testimonial-pagination .active {
					background-color: #dbd957;
					transform: scale(1.2);
				}

				/* Remove default button styles */
				.swiper-button-next-custom,
				.swiper-button-prev-custom {
					background: none;
					border: none;
					outline: none;
					cursor: pointer;
				}

				/* Hide default Swiper arrows */
				.swiper-button-next,
				.swiper-button-prev {
					display: none;
				}
			`}</style>
		</section>
	);
};

export default TestimonialsSection;
