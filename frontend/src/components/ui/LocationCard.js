import Link from 'next/link';
import Image from 'next/image';

export default function LocationCard({ location }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={location.images[0]}
          alt={location.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
        <p className="text-gray-600 mb-3 line-clamp-2">{location.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {location.category}
          </span>
          <Link 
            href={`/locations/${location.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
