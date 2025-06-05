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
	const swiperRef = useRef<any>(null);
	const totalSlides = config.testimonials.length;

	useEffect(() => {
		setIsClient(true);
	}, []);

	const handleDotClick = (index: number) => {
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
			className='relative overflow-hidden pt-[100px] pb-16 lg:pb-20'
			style={{
				background: 'linear-gradient(135deg, #0071ed 0%, #00a2ff 100%)',
			}}>
			{/* Background glassmorphism effects */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse' />
				<div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-150' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-300' />
				<div className="absolute inset-0 bg-[url('/stars.png')] opacity-10 animate-twinkle" />
			</div>

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
		</Section>
	);
};

export default TestimonialsSection;
