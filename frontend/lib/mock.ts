export const mockCategories = [
	{ id: 1, name: 'Theme Parks' },
	{ id: 2, name: 'Water Parks' },
	{ id: 3, name: 'Adventure Parks' }
];

export const mockLocations = Array.from({ length: 9 }).map((_, i) => ({
	id: i + 1,
	name: 'Park ' + (i + 1),
	city: 'City ' + ((i % 3) + 1),
	country: 'Country',
}));
