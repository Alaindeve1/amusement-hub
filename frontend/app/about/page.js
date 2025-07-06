import Image from 'next/image';
import Link from 'next/link';
import { SITE_TITLE } from '@/utils/constants';

export const metadata = {
  title: `About Us | ${SITE_TITLE}`,
  description: 'Learn more about Amusement Hub and our mission to help you discover amazing amusement locations',
};

export default function About() {
  return (
    <div className="bg-white">
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
            <div className="mt-6 text-gray-500 space-y-6">
              <p>
                Amusement Hub was founded with a simple mission: to help people discover and enjoy the best amusement locations around the world. 
                Whether you're looking for thrilling roller coasters, family-friendly attractions, or unique entertainment experiences, we've got you covered.
              </p>
              <p>
                Our team of passionate explorers is dedicated to providing you with the most accurate and up-to-date information about amusement parks, 
                water parks, arcades, and other exciting destinations.
              </p>
            </div>
          </div>
          <div className="relative h-64 sm:h-96 lg:h-full">
            <Image
              className="rounded-lg shadow-xl object-cover"
              src="/images/about-park.jpg"
              alt="Amusement park"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
