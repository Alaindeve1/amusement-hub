export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function getAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function filterLocations(locations, filters = {}) {
  return locations.filter((location) => {
    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        location.name.toLowerCase().includes(searchLower) ||
        location.description.toLowerCase().includes(searchLower) ||
        location.category.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    // Filter by category slug
    if (filters.category) {
      // First check if the location has a category slug that matches
      if (location.categorySlug === filters.category) {
        return true;
      }
      // Then check if the category name matches (case-insensitive)
      if (location.category.toLowerCase() === filters.category.toLowerCase()) {
        return true;
      }
      // If we have a category filter but no match, exclude this location
      return false;
    }

    return true;
  });
}
