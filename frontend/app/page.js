'use client';

import { useState, useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import FeaturedLocations from '@/components/sections/FeaturedLocations';
import CategoriesGrid from '@/components/sections/CategoriesGrid';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/utils/constants';

// Import sample data
import categoriesData from '@/data/categories.json';
import locationsData from '@/data/locations.json';

export default function Home() {
  const [featuredLocations, setFeaturedLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    setFeaturedLocations(locationsData.locations);
    setCategories(categoriesData);
  }, []);

  return (
    <div>
      <main>
        <Hero />
        <FeaturedLocations locations={featuredLocations} />
        <CategoriesGrid categories={categories} />
      </main>
    </div>
  );
}
