import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TestimonialType } from '../../types';

interface TestimonialCardProps {
	testimonial: TestimonialType;
	className?: string;
}

const TestimonialCard = ({
	testimonial,
	className = '',
}: TestimonialCardProps) => {
	const { name, role, content, rating, image } = testimonial;

	return (
		<motion.div
			className={`bg-white/90 backdrop-blur-md dark:bg-transparent rounded-xl p-6 shadow-lg border border-white/20 dark:border-white h-[280px] flex flex-col ${className}`}
			whileHover={{ y: -5, transition: { duration: 0.2 } }}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ type: 'spring', stiffness: 100, damping: 15 }}>
			{/* Quotation mark */}
			<div className='text-[#0078f0] mb-3'>
				<svg
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
				</svg>
			</div>

			{/* Content */}
			<p className='text-gray-700 text-sm leading-relaxed line-clamp-4 flex-grow'>
				{content}
			</p>

			{/* Author section with white background */}
			<div className='bg-white/80 dark:bg-transparent rounded-lg p-3 mt-4 dark:border dark:border-white/40'>
				<div className='flex items-center gap-2'>
					<div className='h-9 w-9 rounded-full overflow-hidden flex-shrink-0'>
						{image ? (
							<Image
								src={image}
								alt={name}
								width={36}
								height={36}
								className='h-full w-full object-cover'
							/>
						) : (
							<div className='h-full w-full flex items-center justify-center bg-blue-100 text-blue-600'>
								{name.charAt(0)}
							</div>
						)}
					</div>
					<div className='min-w-0'>
						<h4 className='font-medium text-gray-900 text-sm truncate'>
							{name}
						</h4>
						<p className='text-xs text-gray-500 truncate'>{role}</p>
						{/* Rating stars */}
						<div className='flex mt-0.5 gap-0.5'>
							{Array.from({ length: 5 }).map((_, i) => (
								<svg
									key={i}
									className={`w-3 h-3 ${
										i < rating ? 'text-yellow-400' : 'text-gray-200'
									}`}
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
								</svg>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default TestimonialCard;
