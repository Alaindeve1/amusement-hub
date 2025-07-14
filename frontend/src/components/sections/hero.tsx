
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[60vh] py-16 px-4 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-2xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-200 rounded-full opacity-20 blur-2xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-6">
        Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">Amazing</span> Amusement Parks
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore the best attractions, thrilling rides, and unforgettable experiences near you. Your adventure starts here!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/register"
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </Link>
        <Link
          href="/locations"
          className="bg-white text-blue-600 font-bold px-8 py-3 rounded-lg shadow-lg border border-blue-200 hover:bg-blue-50 hover:scale-105 transition transform"
        >
          Explore Locations
        </Link>
      </div>
    </section>
  );
}

