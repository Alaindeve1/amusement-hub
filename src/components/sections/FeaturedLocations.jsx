'use client';

import Link from 'next/link';

export default function FeaturedLocations({ locations = [] }) {
  if (!locations.length) return null;

  return (
    <section id="featured" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Locations
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Check out some of our most popular amusement destinations
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {locations.slice(0, 3).map((location) => (
            <div key={location.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  src={location.imageUrl}
                  alt={location.name}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {location.category}
                  </p>
                  <Link href={`/locations/${location.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                      {location.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {location.description.substring(0, 100)}...
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {location.rating}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {location.reviewCount} reviews
                    </p>
                    <div className="flex space-x-1 text-sm text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}>
                          {star <= Math.round(location.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/locations"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Locations
            <svg
              className="ml-3 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
