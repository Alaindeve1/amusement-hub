import SearchBar from '../ui/SearchBar';

export default function Hero() {
  return (
    <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4 w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Discover Amazing Amusement Locations
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Find the best theme parks, water parks, and family entertainment centers near you
        </p>
        <div className="max-w-2xl mx-auto">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
