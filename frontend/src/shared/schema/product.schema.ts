import z from 'zod';
import { commonQuery, withOffset } from './query.schema';

export const productSchema = z.object({
	id: z.uuid(),
	name: z.string().min(2).max(100),
	price: z.coerce.number().positive(),
	description: z.string().max(1000).nullable().optional(),
	quantity: z.coerce.number().int().nonnegative(),
	category: z.object({
		id: z.uuid(),
		name: z.string(),
		slug: z.string(),
	}),
	categoryId: z.uuid(),
	sku: z.string().min(3).max(36),
	images: z.array(z.string()).optional().nullable(),
	createdAt: z.coerce.date().transform((v) => v.toISOString()),
	updatedAt: z.coerce.date().transform((v) => v.toISOString()),
});

export type TProduct = z.infer<typeof productSchema>;

export const productQuerySchema = commonQuery
	.extend({
		category: z.string().optional(),
		sort: z.enum(['createdAt', 'price', 'name']).default('createdAt'),
		minPrice: z.coerce.number().min(0).optional().default(0),
		maxPrice: z.coerce.number().min(0).optional(),
	})
	.transform(withOffset);

export type TProductQuery = z.infer<typeof productQuerySchema>;
