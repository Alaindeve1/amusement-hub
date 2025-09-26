'use client';

import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { api } from './apiClient';
import { CategorySchema, LocationSchema } from './types';

export function useCategories() {
	return useQuery({
	queryKey: ['categories'],
	queryFn: async () => {
	const res = await api.get('/api/categories');
	const arr = z.array(CategorySchema).parse(res.data);
	return arr;
	},
	});
}

export function useLocations() {
	return useQuery({
	queryKey: ['locations'],
	queryFn: async () => {
	const res = await api.get('/api/locations');
	const arr = z.array(LocationSchema).parse(res.data);
	return arr;
	},
	});
}
