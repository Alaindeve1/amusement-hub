import React from 'react';

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={['rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900', className].join(' ')}>{children}</div>;
}
export function CardContent({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={['p-4 md:p-6', className].join(' ')}>{children}</div>;
}
export function CardHeader({ className = '', children }: { className?: string; children: React.ReactNode }) {
	return <div className={['p-4 md:p-6 border-b border-gray-200 dark:border-gray-800', className].join(' ')}>{children}</div>;
}
