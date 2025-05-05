'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import Section from '../components/ui/Section';
import TestimonialCard from '../components/ui/TestimonialCard';
import config from '../config';
import styles from '../styles/testimonials.module.css';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isClient, setIsClient] = useState(false);
	const swiperRef = useRef(null);
	const totalSlides = config.testimonials.length;

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleDotClick = (index) => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideToLoop(index);
		}
	};

	if (!isClient) {
		return null;
	}

	return (
		<Section
			id='testimonials'
			variant='blue'
			className='relative overflow-hidden py-16 lg:py-20'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-12'>
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className='text-4xl lg:text-5xl font-bold text-white mb-4'>
						What they says about us
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.1 }}
						className='text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto'>
						Discover how our AI tutor is transforming education and helping
						students achieve their academic goals
					</motion.p>
				</div>

				<div className='max-w-7xl mx-auto'>
					<Swiper
						ref={swiperRef}
						modules={[Pagination, Autoplay]}
						spaceBetween={24}
						slidesPerView={1}
						loop={true}
						onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
						autoplay={{
							delay: 5000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 24,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 32,
							},
						}}
						className='mb-8'>
						{config.testimonials.map((testimonial) => (
							<SwiperSlide key={testimonial.id} className='h-full'>
								<TestimonialCard testimonial={testimonial} />
							</SwiperSlide>
						))}
					</Swiper>

					{/* Custom pagination */}
					<div className='flex justify-center mt-10'>
						<div className='flex items-center gap-1'>
							{Array.from({ length: totalSlides }).map((_, index) => (
								<button
									key={index}
									type='button'
									onClick={() => handleDotClick(index)}
									aria-label={`Go to slide ${index + 1}`}
									className={`${styles.customBullet} ${
										activeIndex === index ? styles.customBulletActive : ''
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Background decorations */}
			<div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
				<div className='absolute top-1/4 -left-64 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob' />
				<div className='absolute top-3/4 -right-64 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000' />
			</div>
		</Section>
	);
};

export default TestimonialsSection;
