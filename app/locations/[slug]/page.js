'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { SITE_TITLE } from '@/utils/constants';

// Import sample data
import locationsData from '@/data/locations.json';

export default function LocationDetails() {
  const router = useRouter();
  const params = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    // In a real app, you would fetch this data from an API using the slug
    const foundLocation = locationsData.locations.find(
      loc => loc.slug === params.slug
    );

    if (foundLocation) {
      setLocation(foundLocation);
    } else {
      // Redirect to 404 if location not found
      router.push('/404');
    }
    setLoading(false);
  }, [params.slug, router]);

  if (loading || !location) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading location details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-30"
            src={location.imageUrl}
            alt={location.name}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {location.name}
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              {location.tagline}
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#tickets"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Buy Tickets
              </a>
              <a
                href="#directions"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative h-96 w-full rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={location.galleryImages[selectedImage]}
                  alt={`${location.name} - ${selectedImage + 1}`}
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {location.galleryImages.map((image, index) => (
                  <button
                    key={index}
                    className={`relative h-20 rounded-md overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt={`${location.name} - ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {['overview', 'rides', 'dining', 'events', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    className={`${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="py-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About {location.name}</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600">{location.description}</p>
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Location</h3>
                        <p className="mt-1 text-gray-600">{location.address}</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Hours</h3>
                        <p className="mt-1 text-gray-600">
                          {location.hours.weekday} (Weekdays)<br />
                          {location.hours.weekend} (Weekends)
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Phone</h3>
                        <p className="mt-1 text-gray-600">{location.phone}</p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Website</h3>
                        <a
                          href={location.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Add other tab content here */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ticket Information</h3>
              <div className="space-y-4">
                {location.ticketTypes.map((ticket, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">{ticket.name}</h4>
                        <p className="text-sm text-gray-500">{ticket.description}</p>
                      </div>
                      <span className="font-medium text-gray-900">${ticket.price}</span>
                    </div>
                    <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm font-medium">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                <div className="h-48 bg-gray-200 rounded-md overflow-hidden">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Map View
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-600">{location.address}</p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-sm text-blue-600 hover:underline"
                >
                  Get Directions
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
