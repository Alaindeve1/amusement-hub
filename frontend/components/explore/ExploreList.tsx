'use client';

import { useCategories, useLocations } from '../../lib/queries';
import { LocationCard } from './LocationCard';

export default function ExploreList() {
	const { data: categories, isLoading: catLoading, error: catError } = useCategories();
	const { data: locations, isLoading: locLoading, error: locError } = useLocations();

	if (catLoading || locLoading) {
	return <div>Loading...</div>;
	}
	if (catError || locError) {
	return <div style={{ color: 'crimson' }}>Failed to load data.</div>;
	}

	const rwandaLocations = (locations ?? []).filter((l) => (l.country || '').toLowerCase() === 'rwanda');

	return (
		<div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 16 }}>
			<aside style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
				<h3 style={{ fontWeight: 700, marginBottom: 8 }}>Categories</h3>
				<ul style={{ display: 'grid', gap: 6, listStyle: 'none', padding: 0, margin: 0 }}>
					{categories?.map((c) => (
						<li key={c.id} style={{ fontSize: 14 }}>{c.name}</li>
					))}
				</ul>
			</aside>
			<section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
				{rwandaLocations.map((l) => (
					<LocationCard key={l.id} location={l} />
				))}
			</section>
		</div>
	);
}
