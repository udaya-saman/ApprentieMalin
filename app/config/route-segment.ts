import { headers } from 'next/headers';

// Use force-static in development for faster page loads
export const dynamic =
	process.env.NODE_ENV === 'production' ? 'force-dynamic' : 'force-static';
export const revalidate = process.env.NODE_ENV === 'production' ? 3600 : false;

export async function generateMetadata() {
	const headersList = headers();
	const domain = headersList.get('host') || '';

	return {
		metadataBase: new URL(
			`http${process.env.NODE_ENV === 'production' ? 's' : ''}://${domain}`,
		),
		alternates: {
			canonical: '/',
		},
		robots: {
			index: process.env.NODE_ENV === 'production',
			follow: process.env.NODE_ENV === 'production',
			googleBot: {
				index: process.env.NODE_ENV === 'production',
				follow: process.env.NODE_ENV === 'production',
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
	};
}

// Dynamic segments configuration
export const dynamicParams = process.env.NODE_ENV === 'production';

// Generate static params for static pages
export async function generateStaticParams() {
	// Only generate in production
	if (process.env.NODE_ENV !== 'production') {
		return [];
	}

	return [
		{ slug: 'about' },
		{ slug: 'features' },
		{ slug: 'pricing' },
		{ slug: 'contact' },
		{ slug: 'faq' },
		{ slug: 'services' },
	];
}
