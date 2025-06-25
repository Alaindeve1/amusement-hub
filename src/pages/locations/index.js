import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_TITLE } from '../../utils/constants';
import { filterLocations } from '../../utils/helpers';
import LocationCard from '../../components/ui/LocationCard';
import FilterBar from '../../components/ui/FilterBar';

// Import sample data
import locationsData from '../../data/locations.json';
import categoriesData from '../../data/categories.json';

export default function LocationsPage() {
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    category: '',
  });

  useEffect(() => {
    // Get query parameters
    const { search, category } = router.query;
    
    setFilters({
      search: search || '',
      category: category || '',
    });

    // In a real app, you would fetch filtered data from an API
    const filtered = filterLocations(locationsData.locations, {
      search: search || '',
      category: category || '',
    });

    setLocations(filtered);
    setIsLoading(false);
  }, [router.query]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{`${SITE_TITLE} - All Locations`}</title>
        <meta name="description" content="Browse all amusement locations" />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Locations</h1>
          <p className="text-gray-600">
            Browse through our collection of amazing amusement locations
          </p>
        </div>

        <FilterBar categories={categoriesData} />

        {locations.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No locations found</h3>
            <p className="mt-2 text-gray-500">
              We couldn't find any locations matching your criteria.
            </p>
            <div className="mt-6">
              <Link
                href="/locations"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Clear filters
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
