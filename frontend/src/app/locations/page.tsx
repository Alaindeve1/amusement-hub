import LocationsBrowser from '@/components/sections/locations-browser';
import { api } from '@/lib/api';

export default async function LocationsPage() {
  const [categories, locations] = await Promise.all([
    api.listCategories(),
    api.listLocations(),
  ]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Locations</h1>
      <LocationsBrowser categories={categories} locations={locations} />
    </main>
  );
}
