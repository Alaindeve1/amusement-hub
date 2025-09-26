import { Location } from '../../lib/types';

export function LocationCard({ location }: { location: Location }) {
	return (
		<div style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: 16 }}>
			<div style={{ height: 120, background: '#f3f4f6', borderRadius: 8, marginBottom: 8 }} />

			<div style={{ fontWeight: 700 }}>{location.name}</div>
			<div style={{ color: '#6b7280', fontSize: 12 }}>{[location.city, location.country].filter(Boolean).join(', ')}</div>
		</div>
	);
}
