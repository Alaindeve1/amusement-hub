'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const current = theme === 'system' ? systemTheme : theme;

	return (
		<button
			onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
			style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #e5e7eb' }}
		>
			{current === 'dark' ? 'Light' : 'Dark'}
		</button>
	);
}
