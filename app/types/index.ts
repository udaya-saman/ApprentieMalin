export interface NavLink {
	name: string;
	href: string;
	onClick?: (e: React.MouseEvent) => void;
}

export interface FooterLink {
	name: string;
	href: string;
}

export interface AnimationSequence {
	animate: {
		x?: number[];
		y: number[];
		rotate?: number[];
		scale?: number[];
	};
	transition: {
		x?: { duration: number; repeat: number; ease: string };
		y: { duration: number; repeat: number; ease: string };
		rotate?: { duration: number; repeat: number; ease: string };
		scale?: { duration: number; repeat: number; ease: string };
	};
	filter: string;
}

export interface TestimonialType {
	id: number;
	name: string;
	role: string;
	content: string;
	rating: number;
	image?: string;
}

export interface FAQItemType {
	question: string;
	answer: string;
}

export interface FeatureType {
	title: string;
	description: string;
	details?: {
		howItWorks: string;
		benefits: string;
		bestFor: string;
	};
	icon: string;
}
