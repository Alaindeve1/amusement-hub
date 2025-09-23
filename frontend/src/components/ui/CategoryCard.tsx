import Link from 'next/link';
import type { Category } from '@/lib/api';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const img = category.image_url || '/globe.svg';

  return (
    <Link href={`/categories/${category.id}`}>
      <div className="group border rounded-lg shadow-sm hover:shadow-lg transition-all p-4 cursor-pointer bg-white/80 backdrop-blur-sm hover:-translate-y-0.5">
        <img
          src={img}
          alt={category.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h2 className="text-lg font-semibold mb-1 tracking-tight group-hover:text-pink-600 transition-colors">{category.name}</h2>
        {category.description && (
          <p className="text-gray-600 text-sm line-clamp-2">{category.description}</p>
        )}
      </div>
    </Link>
  );
}
