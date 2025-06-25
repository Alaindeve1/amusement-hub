import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_TITLE } from '../../../utils/constants';
import { formatPrice } from '../../../utils/helpers';

// Import sample data
import locationsData from '../../../data/locations.json';

export async function getStaticPaths() {
  // In a real app, you would fetch this from an API
  const paths = locationsData.locations.map((location) => ({
    params: { slug: location.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // In a real app, you would fetch this from an API
  const location = locationsData.locations.find(
    (loc) => loc.slug === params.slug
  );

  return {
    props: { location },
  };
}

export default function LocationDetail({ location }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Location not found</h1>
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
    <div className="bg-white">
      <Head>
        <title>{`${location.name} | ${SITE_TITLE}`}</title>
        <meta name="description" content={location.description} />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
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
                    {location.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={location.images[0]}
              alt={location.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {location.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg
                      key={rating}
                      className={`h-5 w-5 ${
                        rating < Math.floor(location.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {location.rating} out of 5 stars
                </span>
              </div>

              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-700">{location.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {location.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Ticket Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Adult (12+)
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPrice(location.ticketPrice.adult)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      Child (3-11)
                    </h3>
                    <p className="text-2xl font-bold text-gray-900">
                      {formatPrice(location.ticketPrice.child)}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      Opening Hours
                    </h3>
                    <p className="text-gray-900">{location.openingHours}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">
                      Address
                    </h3>
                    <p className="text-gray-900">{location.address}</p>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Buy Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
