// 1. Import React (optional in Next.js 13+), categories data, and CategoriesGrid component
import categories from '@/data/categories.json';
import CategoriesGrid from '@/components/ui/CategoriesGrid';

// 2. Create the page component
export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* 3. Heading */}
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {/* 4. Render the categories grid */}
      <CategoriesGrid categories={categories} />
    </main>
  );
}
