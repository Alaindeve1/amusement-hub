// 1. Import the LocationCard component we'll create next
import LocationCard from './LocationCard.jsx';

// 2. Define the structure of a location object
interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
}

// 3. Define what props this component will receive
interface LocationsGridProps {
  locations: Location[];
}

// 4. Create the grid component
export default function LocationsGrid({ locations }: LocationsGridProps) {
  return (
    // 5. Create a responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* 6. Loop through each location and create a card for it */}
      {locations.map((location) => (
        // 7. Each card needs a unique key for React to track changes
        <LocationCard key={location.id} location={location} />
      ))}
    </div>
  );
}