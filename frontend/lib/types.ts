import { z } from 'zod';

export const CategorySchema = z.object({
	id: z.number(),
	name: z.string(),
	slug: z.string().optional(),
	image_url: z.string().url().optional()
});
export type Category = z.infer<typeof CategorySchema>;

export const LocationSchema = z.object({
	id: z.number(),
	name: z.string(),
	slug: z.string().optional(),
	city: z.string().optional(),
	country: z.string().optional(),
	average_rating: z.number().optional().nullable(),
	image_url: z.string().url().optional()
});
export type Location = z.infer<typeof LocationSchema>;
