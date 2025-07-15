// src/components/sections/CategoriesGrid.tsx

import CategoryCard from "../ui/CategoryCard";
import categories from "@/data/categories.json";

export default function CategoriesGrid() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        Explore by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} name={cat.name} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
}
