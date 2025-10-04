import { Suspense } from 'react';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading destinations...</div>}>
        <Featured />
      </Suspense>
      
      {/* Add more sections here as needed */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Amusement Hub?
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Easy Booking',
                  description: 'Simple and fast booking process for all attractions and events.',
                  icon: '🎟️',
                },
                {
                  title: 'Verified Reviews',
                  description: 'Read authentic reviews from real visitors.',
                  icon: '⭐',
                },
                {
                  title: 'Best Prices',
                  description: 'Competitive pricing and special offers.',
                  icon: '💰',
                },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="pt-6"
                >
                  <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8 h-full shadow-lg">
                    <div className="-mt-6">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto text-xl">
                        {feature.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
