import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

export function dynamicComponent<
	T extends ComponentType<Record<string, unknown>>,
>(importFunc: () => Promise<{ default: T }>, options = {}) {
	return dynamic(importFunc, {
		ssr: true,
		loading: () => null,
		...options,
	});
}

// Preload function for components that are likely to be needed
export function preloadComponent(componentPath: string) {
	return () => {
		const component = import(`../components/${componentPath}`);
		return component;
	};
}
