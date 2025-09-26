import { Button } from '../ui/Button';

export function Hero() {
	return (
		<section className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-8 md:p-12">
			<h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Discover parks near you</h1>
			<p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">Find theme parks, water parks, and attractions. Plan your visit with real-time info.</p>
			<div className="mt-6 flex gap-3">
				<Button>Explore now</Button>
				<Button variant="secondary">See events</Button>
			</div>
		</section>
	);
}
