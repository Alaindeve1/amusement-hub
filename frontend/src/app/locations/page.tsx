import LocationsGrid from '@/components/ui/LocationGrid';
import { api } from '@/lib/api';

export default async function LocationsPage() {
  const locations = await api.listLocations();
  // Map to the shape expected by LocationsGrid/LocationCard
  const items = locations.map(l => ({
    id: l.id,
    name: l.name,
    description: l.description || '',
    image: '/globe.svg',
    rating: Number(l.average_rating || 0),
  }));

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Locations</h1>
      <LocationsGrid locations={items} />
    </main>
  );
}
