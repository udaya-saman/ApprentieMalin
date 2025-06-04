import { useState, useEffect } from 'react';

export const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	// Initialize dark mode from localStorage or system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;

		if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
			setIsDarkMode(true);
			document.documentElement.classList.add('dark');
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove('dark');
		}
	}, []);

	// Toggle dark mode function
	const toggleDarkMode = () => {
		const newDarkMode = !isDarkMode;
		setIsDarkMode(newDarkMode);

		if (newDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};

	return { isDarkMode, toggleDarkMode };
};
