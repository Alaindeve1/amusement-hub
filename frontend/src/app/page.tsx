// app/page.tsx

import Hero from "@/components/sections/hero";
import CategoriesGrid from "@/components/ui/CategoriesGrid";
import LocationsGrid from "@/components/ui/LocationGrid";
import { api } from "@/lib/api";

export default async function HomePage() {
  const [categories, locations] = await Promise.all([
    api.listCategories(),
    api.listLocations(),
  ]);

  const featuredCategories = categories.slice(0, 6);
  const featuredLocations = locations
    .filter(l => l.is_featured)
    .concat(locations)
    .slice(0, 6)
    .map(l => ({
      id: l.id,
      name: l.name,
      description: l.description || "",
      image: "/globe.svg",
      rating: Number(l.average_rating || 0),
    }));

  return (
    <main>
      <Hero />

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Explore by Category</h2>
        <CategoriesGrid categories={featuredCategories} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Featured Locations</h2>
        <LocationsGrid locations={featuredLocations} />
      </section>
    </main>
  );
}