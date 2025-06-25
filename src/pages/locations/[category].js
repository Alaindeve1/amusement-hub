import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { SITE_TITLE } from '../../../utils/constants';
import LocationCard from '../../../components/ui/LocationCard';

// Import sample data
import locationsData from '../../../data/locations.json';
import categoriesData from '../../../data/categories.json';

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  // Find the category details
  const categoryData = categoriesData.find(
    (cat) => cat.slug === category
  );

  // Filter locations by category
  const categoryLocations = locationsData.locations.filter(
    (location) => location.category.toLowerCase() === categoryData?.name.toLowerCase()
  );

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
          <Link
            href="/locations"
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Back to all locations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>{`${categoryData.name} | ${SITE_TITLE}`}</title>
        <meta name="description" content={categoryData.description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <nav className="flex mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <Link
                    href="/locations"
                    className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >
                    Locations
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="flex-shrink-0 h-5 w-5 text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    {categoryData.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {categoryData.name}
          </h1>
          <p className="text-gray-600">{categoryData.description}</p>
        </div>

        {categoryLocations.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">
              No locations found in this category
            </h3>
            <p className="mt-2 text-gray-500">
              We couldn't find any locations in this category.
            </p>
            <div className="mt-6">
              <Link
                href="/locations"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Browse all locations
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
