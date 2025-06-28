import Link from 'next/link';
import Image from 'next/image';

export default function CategoryCard({ category }) {
  return (
    <Link href={`/locations?category=${category.slug}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white text-center">{category.name}</h3>
          </div>
        </div>
        <div className="p-4 bg-white">
          <p className="text-gray-600">{category.count} locations</p>
        </div>
      </div>
    </Link>
  );
}
