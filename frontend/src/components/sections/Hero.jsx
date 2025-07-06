'use client';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Amusement park"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Discover Amazing Amusement Locations
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Find the best amusement parks, water parks, and entertainment centers around the world.
          Plan your next adventure with us!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/locations"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
          >
            Explore Locations
          </a>
          <a
            href="#featured"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-300 bg-white bg-opacity-10 hover:bg-opacity-20 md:py-4 md:text-lg md:px-8"
          >
            Featured Parks
          </a>
        </div>
      </div>
    </div>
  );
}
