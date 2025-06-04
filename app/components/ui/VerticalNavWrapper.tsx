'use client';

import { usePathname } from 'next/navigation';
import VerticalNav from './VerticalNav';

const VerticalNavWrapper = () => {
	const pathname = usePathname();
	const isHomepage = pathname === '/';

	if (!isHomepage) {
		return null;
	}

	return <VerticalNav />;
};

export default VerticalNavWrapper;
