import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'ApprentieMalin - AI-Powered Academic Support for Students',
	description:
		'ApprentieMalin offers personalized academic support for primary and middle school students through WhatsApp. Get instant homework help, explanations, and interactive learning anytime, anywhere.',
	keywords:
		'AI tutor, academic support, homework help, primary school, middle school, WhatsApp tutor, personalized learning, ApprentieMalin',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang='en'
			className={`${inter.variable} scroll-smooth`}
			style={{ scrollPaddingTop: '60px' }}>
			<body className='bg-background-dark font-sans text-white overflow-x-hidden'>
				{children}
			</body>
		</html>
	);
}
