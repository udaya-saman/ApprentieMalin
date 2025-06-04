import type { Metadata } from 'next';
import { Suspense } from 'react';
import { preloadModules } from './config/component-loader';

// Styles
import './globals.css';
import 'swiper/css';
import BackToTop from './components/ui/BackToTop';
import VerticalNavWrapper from './components/ui/VerticalNavWrapper';
import Header from './components/Header';
import PageAnimationWrapper from './components/ui/PageAnimationWrapper';

// Metadata
export const metadata: Metadata = {
	title: 'Apprenti Malin',
	description: 'Learn smarter, not harder',
};

// Font optimization
const fontSans = { subsets: ['latin'], display: 'swap' };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Preload heavy modules
	if (typeof window !== 'undefined') {
		preloadModules();
	}

	return (
		<html lang='en' className='scroll-smooth'>
			<head>
				<link
					rel='preload'
					href='/fonts/your-main-font.woff2'
					as='font'
					type='font/woff2'
					crossOrigin='anonymous'
				/>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
			</head>
			<body className='min-h-screen bg-background antialiased'>
				<Suspense fallback={null}>
					<Header />
					<PageAnimationWrapper>{children}</PageAnimationWrapper>
					<VerticalNavWrapper />
					<BackToTop />
				</Suspense>
			</body>
		</html>
	);
}
