import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-800 dark:to-purple-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546707012-1ecb3c4abecc?q=80&w=1600&auto=format&fit=crop"
          alt="Kigali cityscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Discover Rwanda's Most Beautiful Places
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            Explore curated restaurants, parks, and family amusements across Rwanda. 
            Plan your visit, read details, and book with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Explore Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold"
            >
              View Attractions
            </Button>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-2xl max-w-4xl"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="text-blue-100">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">1000+</div>
            <div className="text-blue-100">Happy Visitors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">4.8</div>
            <div className="text-blue-100">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-blue-100">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
