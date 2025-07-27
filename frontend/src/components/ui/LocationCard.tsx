// 1. Import Next.js Link component for navigation
import Link from 'next/link';

// 2. Define the structure of a location object (same as in LocationsGrid)
interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}

// 3. Define what props this component will receive
interface LocationCardProps {
  location: Location;
}

// 4. Create the location card component
export default function LocationCard({ location }: LocationCardProps) {
  return (
    // 5. Make the entire card clickable by wrapping it in a Link
    <Link href={`/locations/${location.id}`}>
      {/* 6. Create the card container with styling */}
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer bg-white">
        {/* 7. Display the location image */}
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
        
        {/* 8. Display the location name */}
        <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
        
        {/* 9. Display the location description */}
        <p className="text-gray-600 mb-2">{location.description}</p>
        
        {/* 10. Display the rating with stars */}
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-sm text-gray-600">{location.rating}</span>
        </div>
      </div>
    </Link>
  );
}