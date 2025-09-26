export default function HomePage() {
	return (
		<main style={{ padding: 24, display: 'grid', gap: 24 }}>
			<section style={{ padding: 24, border: '1px solid #e5e7eb', borderRadius: 12 }}>
				<h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 8 }}>Discover parks near you</h1>
				<p style={{ color: '#6b7280' }}>Find theme parks, water parks, and attractions. Plan your visit with real-time info.</p>
			</section>
			<section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
				{Array.from({ length: 6 }).map((_, i) => (
					<div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, minHeight: 120 }}>
						<div style={{ height: 80, background: '#f3f4f6', borderRadius: 8, marginBottom: 8 }} />
						<div style={{ width: '60%', height: 12, background: '#e5e7eb', borderRadius: 6, marginBottom: 6 }} />
						<div style={{ width: '40%', height: 12, background: '#e5e7eb', borderRadius: 6 }} />
					</div>
				))}
			</section>
		</main>
	);
}
