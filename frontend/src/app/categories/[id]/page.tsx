// 1. Import Next.js params for getting the category ID from the URL
import { Params } from 'next/navigation';

// 2. Import categories data (we'll use this to find the specific category)
import categories from '@/data/categories.json';

// 3. Import a component we'll create to display locations in this category
import LocationsGrid from '@/components/ui/LocationGrid';

// 4. Create the page component that Next.js will automatically call
export default function CategoryDetailsPage({ params }: { params: Params }) {
  // 5. Extract the category ID from the URL parameters
  const categoryId = parseInt(params.id);

  // 6. Find the specific category from our data
  const category = categories.find(cat => cat.id === categoryId);

  // 7. If category doesn't exist, show error message
  if (!category) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Category Not Found</h1>
        <p>Sorry, this category doesn't exist.</p>
      </main>
    );
  }

  // 8. For now, we'll use dummy data for locations (later we'll fetch from backend)
  const locationsInCategory = [
    {
      id: 1,
      name: "Roller Coaster Adventure",
      description: "Thrilling roller coaster experience",
      image: "/globe.svg",
      rating: 4.5
    },
    {
      id: 2,
      name: "Ferris Wheel Delight",
      description: "Scenic views from above",
      image: "/window.svg",
      rating: 4.2
    }
  ];

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