import Link from 'next/link';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer bg-white">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
        <p className="text-gray-600">{category.description}</p>
      </div>
    </Link>
  );
}
