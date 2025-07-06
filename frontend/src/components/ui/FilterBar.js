import { useRouter } from 'next/router';

export default function FilterBar({ categories = [] }) {
  const router = useRouter();
  const { category: activeCategory } = router.query;

  const handleFilter = (categorySlug) => {
    if (categorySlug === 'all') {
      const { category, ...rest } = router.query;
      router.push({
        pathname: '/locations',
        query: { ...rest }
      });
    } else {
      router.push({
        pathname: '/locations',
        query: { ...router.query, category: categorySlug }
      });
    }
  };

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => handleFilter('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium ${
          !activeCategory
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => handleFilter(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === category.slug
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
