import { api } from '@/lib/api';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/breadcrumbs';

interface PageProps {
  params: { id: string };
}

export default async function LocationDetailsPage({ params }: PageProps) {
  const id = parseInt(params.id);
  let location: Awaited<ReturnType<typeof api.getLocation>> | null = null;
  try {
    location = await api.getLocation(id);
  } catch (e) {
    location = null;
  }

  if (!location) {
    notFound();
  }

  const rating = Number(location.average_rating || 0).toFixed(1);

  return (
    <main className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Locations', href: '/locations' },
        { label: location.name },
      ]} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
            {/* Placeholder image; can be replaced by first LocationImage when available */}
            <img src="/globe.svg" alt={location.name} className="w-full h-full object-cover" />
          </div>
          <section className="mt-6 space-y-4">
            <h1 className="text-3xl font-extrabold tracking-tight">{location.name}</h1>
            {location.description && (
              <p className="text-gray-700 leading-relaxed">{location.description}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center"><span className="text-yellow-500">★</span><span className="ml-1">{rating}</span></div>
              {location.total_reviews != null && (
                <div>{location.total_reviews} reviews</div>
              )}
            </div>
          </section>

          <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg border bg-white/70 backdrop-blur">
              <h2 className="font-semibold mb-2">Contact</h2>
              <div className="space-y-1 text-sm text-gray-700">
                {location.phone && <div>Phone: {location.phone}</div>}
                {location.email && <div>Email: {location.email}</div>}
                {location.website && (
                  <div>
                    Website: <a href={location.website.startsWith('http') ? location.website : `https://${location.website}`} className="text-pink-600 hover:underline" target="_blank" rel="noreferrer">{location.website}</a>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 rounded-lg border bg-white/70 backdrop-blur">
              <h2 className="font-semibold mb-2">Address</h2>
              <div className="space-y-1 text-sm text-gray-700">
                {location.address && <div>{location.address}</div>}
                <div>
                  {[location.city, location.state, location.postal_code, location.country].filter(Boolean).join(', ')}
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-1 space-y-4">
          <div className="p-4 rounded-lg border bg-white/70 backdrop-blur shadow-sm">
            <h3 className="font-semibold mb-3">Quick Info</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-medium">Featured:</span> {location.is_featured ? 'Yes' : 'No'}</li>
              <li><span className="font-medium">Active:</span> {location.is_active ? 'Yes' : 'No'}</li>
              {location.total_visitors != null && (
                <li><span className="font-medium">Total Visitors:</span> {location.total_visitors}</li>
              )}
            </ul>
          </div>
          {/* Future: ticket types, opening hours, special events, reviews */}
        </aside>
      </div>
    </main>
  );
}
