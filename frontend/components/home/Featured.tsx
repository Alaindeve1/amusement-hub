import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Link from 'next/link';

type Place = {
  id: string;
  name: string;
  city: string;
  category: string;
  image_url: string;
  rating: number;
  reviews: number;
  price: string;
};

const featured: Place[] = [
  {
    id: '1',
    name: 'Nyandungu Eco Park',
    city: 'Kigali',
    category: 'Park',
    image_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    rating: 4.8,
    reviews: 124,
    price: 'Free',
  },
  {
    id: '2',
    name: 'Kigali Convention Centre',
    city: 'Kigali',
    category: 'Landmark',
    image_url: 'https://images.unsplash.com/photo-1589802829985-817e51171b34?q=80&w=1400&auto=format&fit=crop',
    rating: 4.7,
    reviews: 98,
    price: '$10',
  },
  {
    id: '3',
    name: 'Lake Kivu Shores',
    city: 'Rubavu',
    category: 'Nature',
    image_url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
    rating: 4.9,
    reviews: 215,
    price: '$5',
  },
  {
    id: '4',
    name: 'Volcanoes Region',
    city: 'Musanze',
    category: 'Adventure',
    image_url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1400&auto=format&fit=crop',
    rating: 4.9,
    reviews: 342,
    price: '$90',
  },
  {
    id: '5',
    name: 'Kandt House Museum',
    city: 'Kigali',
    category: 'Culture',
    image_url: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop',
    rating: 4.5,
    reviews: 87,
    price: '$8',
  },
  {
    id: '6',
    name: 'Children Fun Center',
    city: 'Kigali',
    category: 'Amusements',
    image_url: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1400&auto=format&fit=crop',
    rating: 4.6,
    reviews: 156,
    price: '$15',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Featured() {
  return (
    <section id="featured" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Explore Rwanda's Best Destinations
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover the most popular and highly-rated destinations across Rwanda
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {featured.map((place) => (
          <motion.div
            key={place.id}
            variants={item}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/destinations/${place.id}`} className="block">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image_url}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">
                      {place.category}
                    </span>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900">
                    <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                    <span>{place.rating}</span>
                    <span className="text-gray-500 text-xs ml-1">({place.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{place.name}</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {place.city}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                    {place.price}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/explore"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          View All Destinations
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

