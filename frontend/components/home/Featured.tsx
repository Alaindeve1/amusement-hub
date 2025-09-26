type Place = { name: string; city: string; category: string; image_url: string };

const featured: Place[] = [
	{ name: 'Nyandungu Eco Park', city: 'Kigali', category: 'Park', image_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop' },
	{ name: 'Kigali Convention Centre', city: 'Kigali', category: 'Landmark', image_url: 'https://images.unsplash.com/photo-1589802829985-817e51171b34?q=80&w=1400&auto=format&fit=crop' },
	{ name: 'Lake Kivu Shores', city: 'Rubavu', category: 'Nature', image_url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop' },
	{ name: 'Volcanoes Region Vibes', city: 'Musanze', category: 'Adventure', image_url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop' },
	{ name: 'Kandt House Museum Area', city: 'Kigali', category: 'Culture', image_url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop' },
	{ name: 'Children Fun Center', city: 'Kigali', category: 'Amusements', image_url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1400&auto=format&fit=crop' },
];

export default function Featured() {
	return (
		<section id="featured" style={{ display: 'grid', gap: 16 }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h2 style={{ fontSize: 24, fontWeight: 800 }}>Featured in Rwanda</h2>
				<a href="/explore" style={{ color: '#0ea5e9', fontWeight: 700 }}>See all</a>
			</div>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 16 }}>
				{featured.map((p, i) => (
					<a key={i} href="/explore" style={{ display: 'block', border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }} className="card-animate">
						<div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
							<img src={p.image_url} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', transition: 'transform .6s ease' }} className="card-img" />
						</div>
						<div style={{ padding: 12 }}>
							<div style={{ fontWeight: 800 }}>{p.name}</div>
							<div style={{ fontSize: 12, color: '#6b7280' }}>{p.city} • {p.category}</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

