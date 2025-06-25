import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_TITLE } from '../utils/constants';

export default function About() {
  return (
    <div className="bg-white">
      <Head>
        <title>{`About Us | ${SITE_TITLE}`}</title>
        <meta name="description" content="Learn more about Amusement Hub and our mission to help you discover amazing amusement locations" />
      </Head>

      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover the story behind Amusement Hub and our mission to bring joy through amazing experiences.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 text-gray-600 space-y-6">
              <p>
                Founded in 2023, Amusement Hub was born out of a passion for fun and adventure. Our team of travel enthusiasts and amusement park fanatics came together with a simple goal: to help people discover the most amazing amusement locations around the world.
              </p>
              <p>
                What started as a small project has grown into a comprehensive platform featuring hundreds of theme parks, water parks, and family entertainment centers. We're proud to help millions of visitors plan their perfect day of fun and adventure.
              </p>
              <p>
                Our mission is to provide accurate, up-to-date information about amusement locations worldwide, making it easy for families and thrill-seekers alike to find their next adventure.
              </p>
            </div>
          </div>
          <div className="relative h-96 lg:h-full">
            <Image
              src="/images/about-park.jpg"
              alt="Amusement park"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'Passion for Fun',
                description: 'We believe in the power of fun and adventure to bring people together and create lasting memories.'
              },
              {
                name: 'Honest Reviews',
                description: 'We provide honest, unbiased reviews to help you make informed decisions about where to visit.'
              },
              {
                name: 'Community Focused',
                description: 'We value our community of amusement park enthusiasts and strive to create a welcoming space for all.'
              },
              {
                name: 'Continuous Improvement',
                description: 'We\'re always looking for ways to improve our platform and provide better experiences for our users.'
              },
              {
                name: 'Accessibility',
                description: 'We believe that fun should be accessible to everyone, and we work to highlight accessible options.'
              },
              {
                name: 'Sustainability',
                description: 'We support and promote parks that prioritize environmental responsibility and sustainability.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to explore?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Start discovering amazing amusement locations today and create unforgettable memories with your loved ones.
          </p>
          <div className="mt-8">
            <Link
              href="/locations"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Browse Locations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
