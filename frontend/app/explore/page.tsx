export default function ExplorePage() {
	return (
		<main style={{ padding: 24 }}>
			<h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Explore</h1>
			<div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
				<aside style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>Filters</aside>
				<section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
					{Array.from({ length: 12 }).map((_, i) => (
						<div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16, minHeight: 120 }}>Card {i + 1}</div>
					))}
				</section>
			</div>
		</main>
	);
}
