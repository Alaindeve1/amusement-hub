// src/components/sections/CategoriesGrid.tsx

import CategoryCard from './CategoryCard';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CategoriesGridProps {
  categories: Category[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
