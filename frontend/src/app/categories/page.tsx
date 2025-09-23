// 1. Import React (optional in Next.js 13+), categories data, and CategoriesGrid component
import CategoriesGrid from '@/components/ui/CategoriesGrid';
import { api } from '@/lib/api';

// 2. Create the page component
export default async function CategoriesPage() {
  const categories = await api.listCategories();
  return (
    <main className="container mx-auto px-4 py-8">
      {/* 3. Heading */}
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      {/* 4. Render the categories grid */}
      <CategoriesGrid categories={categories} />
    </main>
  );
}
