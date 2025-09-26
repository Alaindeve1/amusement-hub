export default function Hero() {
	return (
		<section style={{ position: 'relative', overflow: 'hidden', borderRadius: 16, height: 360, background: 'linear-gradient(135deg,#0ea5e9,#22c55e)' }}>
			<img
				src="https://images.unsplash.com/photo-1546707012-1ecb3c4abecc?q=80&w=1600&auto=format&fit=crop"
				alt="Kigali cityscape"
				style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }}
			/>
			<div style={{ position: 'relative', padding: '48px 28px', color: 'white' }} className="fade-in">
				<h1 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.1, marginBottom: 8 }}>Discover Rwanda’s most beautiful places</h1>
				<p style={{ maxWidth: 720, opacity: 0.95 }}>Explore curated restaurants, parks, and family amusements across Rwanda. Plan your visit, read details, and book with ease.</p>
				<div style={{ marginTop: 18, display: 'flex', gap: 12 }}>
					<a href="/explore" style={{ background: 'white', color: '#111827', padding: '10px 14px', borderRadius: 10, fontWeight: 700 }}>Explore now</a>
					<a href="#featured" style={{ border: '2px solid white', color: 'white', padding: '8px 14px', borderRadius: 10, fontWeight: 700 }}>Featured</a>
				</div>
			</div>
		</section>
	);
}
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
