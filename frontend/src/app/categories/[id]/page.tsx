// 1. Import categories data (we'll use this to find the specific category)
import { api } from '@/lib/api';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/common/breadcrumbs';

// 2. Import a component we'll create to display locations in this category
import LocationsGrid from '@/components/ui/LocationGrid';

// 3. Define the props interface
interface PageProps {
  params: { id: string };
}

// 4. Create the page component that Next.js will automatically call
export default async function CategoryDetailsPage({ params }: PageProps) {

  // 5. Extract the category ID from the URL parameters
  const categoryId = parseInt(params.id);

  // 6. Fetch the specific category from backend
  let category: any = null;
  try {
    category = await api.getCategory(categoryId);
  } catch (e) {
    category = null;
  }

  // 7. If category doesn't exist, use app-level not-found
  if (!category) {
    notFound();
  }

  // 8. Fetch locations from backend and filter by category
  const allLocations = await api.listLocations();
  const filtered = allLocations.filter(l => Number(l.category_id) === categoryId);
  const locationsInCategory = filtered.map(l => ({
    id: l.id,
    name: l.name,
    description: l.description || '',
    image: '/globe.svg',
    rating: Number(l.average_rating || 0),
  }));

  // 9. Return the page content
  return (
    <main className="container mx-auto px-4 py-8">
      {/* 10. Show the category name as the page title */}
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      
      {/* 11. Show category description */}
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      {/* 12. Display all locations in this category */}
      <LocationsGrid locations={locationsInCategory} />
    </main>
  );
}