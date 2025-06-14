// Site configuration

export const siteConfig = {
	name: 'ApprentieMalin',
	description:
		'AI-powered academic support for primary and middle school students through WhatsApp. Get instant homework help, explanations, and interactive learning anytime, anywhere.',
	url: 'https://apprentiemalin.com',
	ogImage: 'https://apprentiemalin.com/images/og-image.jpg',
	author: 'ApprentieMalin Team',
};

export const contactInfo = {
	email: 'support@apprentiemalin.com',
	phone: '+1 (123) 456-7890',
	whatsapp: '+1 (123) 456-7890',
	address: {
		street: '123 Education Street',
		city: 'Learning City',
		state: 'Knowledge State',
		zip: '12345',
		country: 'Wisdom Land',
	},
};

export const socialMedia = {
	twitter: 'https://twitter.com/apprentiemalin',
	facebook: 'https://facebook.com/apprentiemalin',
	instagram: 'https://instagram.com/apprentiemalin',
	linkedin: 'https://linkedin.com/company/apprentiemalin',
};

export const navigation = {
	main: [
		{ name: 'Home', href: '#' },
		{ name: 'About', href: '/about' },
		{ name: 'Services', href: '/services' },
		{ name: 'Features', href: '/features' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Client Area', href: '/client-area' },
		{ name: 'FAQ', href: '/faq' },
		{ name: 'Contact', href: '/contact' },
	],
	legal: [
		{ name: 'Privacy Policy', href: '/privacy' },
		{ name: 'Terms of Service', href: '/terms' },
		{ name: 'Cookies', href: '/cookies' },
	],
};

export const features = {
	main: [
		{
			title: 'AI Help via Integrated Chat',
			description: 'What it does: Provides written assistance for all subjects',
			details: {
				howItWorks: 'Send questions or photos of exercises',
				benefits: 'Step-by-step guidance, adapts to emotions, available 24/7',
				bestFor: 'Students who prefer reading explanations and working at their own pace'
			},
			icon: '💬',
		},
		{
			title: 'Homework Help Callbot',
			description: 'What it does: Provides voice-based interactive assistance',
			details: {
				howItWorks: 'Call directly from your ApprentieMalin space',
				benefits: 'Dynamic verbal guidance, perfect for auditory learners',
				bestFor: 'Students who learn better through conversation and explanation'
			},
			icon: '📞',
		},
		{
			title: 'Language Learning Callbot',
			description: 'What it does: Interactive oral practice for foreign languages',
			details: {
				howItWorks: 'Engage in conversations on various topics',
				benefits: 'Builds confidence, improves pronunciation, provides instant feedback',
				bestFor: 'Developing real-world language skills through practice'
			},
			icon: '🗣️',
		},
		{
			title: '"Smart Review" Feature',
			description: 'What it does: Provides quick and targeted revisions before tests',
			details: {
				howItWorks: 'Ask for a review on any topic in your curriculum',
				benefits: 'Consolidates knowledge, perfect for last-minute studying',
				bestFor: 'Test preparation and knowledge reinforcement'
			},
			icon: '🎯',
		},
	],
};

export const testimonials = [
	{
		id: 1,
		name: 'Amélie Dubois',
		role: 'Parent of Élise Moreau, Grade 6',
		content:
			"The AI tutor has been incredible for my daughter's education. She's more confident in her studies and loves the interactive learning experience. The personalized attention has made a huge difference in her academic progress.",
		rating: 5,
		image: '/images/parent1.jpg',
	},
	{
		id: 2,
		name: 'Charlotte Petit',
		role: 'Grade 7',
		content:
			'I love how the AI tutor explains things in a way I can understand. Math used to be hard for me, but now I get better grades and actually enjoy solving problems!',
		rating: 5,
		image: '/images/student2.jpg',
	},
	{
		id: 3,
		name: 'Lucas Bernard',
		role: 'Parent of Lucas Dupont, Grade 4',
		content:
			"Since we started using this AI tutor, my son's grades have improved significantly. The 24/7 availability and patient explanations have been invaluable for his learning journey.",
		rating: 4,
		image: '/images/parent2.jpg',
	},
	{
		id: 4,
		name: 'Théo Martin',
		role: 'Grade 6',
		content:
			"The AI tutor helps me understand my homework better. I can ask questions anytime, and it always explains things clearly. It's like having a friendly teacher available whenever I need help!",
		rating: 5,
		image: '/images/student3.jpg',
	},
	{
		id: 5,
		name: 'Gabriel Rousseau',
		role: 'Grade 5',
		content:
			'Learning with the AI tutor is fun! It helps me with all my subjects and never gets tired of my questions. My parents are really happy with my progress too!',
		rating: 5,
		image: '/images/student1.jpg',
	},
];

export const faqItems = [
	{
		question: 'How does ApprentieMalin work?',
		answer:
			'ApprentieMalin is an AI-powered WhatsApp chatbot that helps students with their homework and academic questions. Simply send your question or homework problem via WhatsApp, and our AI assistant will provide a personalized explanation or solution to help you understand the concept.',
	},
	{
		question: 'What subjects does ApprentieMalin cover?',
		answer:
			'ApprentieMalin covers primary and middle school subjects including math, science, language arts, history, geography, and more. Our AI is designed to understand and assist with grade 1-9 curriculum across all major subjects.',
	},
	{
		question: 'Is ApprentieMalin safe for children?',
		answer:
			'Yes, ApprentieMalin is designed with child safety as a top priority. We have content filters and safeguards in place to ensure age-appropriate responses. All conversations are monitored for safety, and our AI is programmed to provide educational content only.',
	},
	{
		question: 'Do I need to install any software to use ApprentieMalin?',
		answer:
			'No installation required! ApprentieMalin works through WhatsApp, which you likely already have installed. Simply save our number and start chatting with our AI tutor right away on any device that supports WhatsApp.',
	},
	{
		question: 'How much does ApprentieMalin cost?',
		answer:
			'We offer a free starter plan that gives you access to basic features. Premium plans with unlimited questions, advanced explanations, and progress tracking are available at affordable monthly rates. Visit our pricing page for current offers.',
	},
	{
		question: "Can parents monitor their child's learning progress?",
		answer:
			"Yes! Our parent dashboard allows you to track your child's learning activity, view subjects they're studying, monitor progress, and see areas where they might need additional support. It's a great way to stay involved in your child's education.",
	},
	{
		question: 'Is ApprentieMalin available in multiple languages?',
		answer:
			"Currently, ApprentieMalin is available in English and French. We're actively working on adding more languages to support students worldwide. Stay tuned for updates on additional language support.",
	},
	{
		question: 'How quickly will my child receive responses?',
		answer:
			'ApprentieMalin provides instant responses in most cases! Our AI processes questions within seconds and delivers clear, helpful explanations right away. Even during high usage periods, wait times rarely exceed 30 seconds.',
	},
	{
		question: 'Can ApprentieMalin help with exam preparation?',
		answer:
			"Absolutely! ApprentieMalin is excellent for exam prep. Students can ask specific questions about topics they're studying, request practice problems, and get step-by-step explanations that help reinforce their understanding before tests and exams.",
	},
	{
		question: "What if the AI doesn't understand my question?",
		answer:
			'While our AI tutor is very advanced, occasionally it might need clarification. In these cases, it will politely ask for more information or suggest rephrasing your question. For complex issues, our human support team can assist when needed.',
	},
];

// App Configuration
const config = {
	site: siteConfig,
	contact: contactInfo,
	social: socialMedia,
	nav: navigation,
	features,
	testimonials,
	faq: faqItems,
};

export default config;
