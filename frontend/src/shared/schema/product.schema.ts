import z from 'zod';
import { commonQuery, withOffset } from './query.schema';

export const productSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	price: z.number().nonnegative(),
	images: z.array(z.string()),
	quantity: z.number().nonnegative(),
	categoryId: z.string(),
	category: z.string(),
	description: z.string().optional().nullable(),
	createdAt: z.string().optional().nullable(),
	updatedAt: z.string().optional().nullable(),
});

export type TProduct = z.infer<typeof productSchema>;

export const productQuerySchema = commonQuery
	.extend({
		categoryId: z.uuid().optional(),
		sort: z.enum(['createdAt', 'price', 'name']).default('createdAt'),
		minPrice: z.coerce.number().min(0).optional().default(0),
		maxPrice: z.coerce.number().min(0).optional(),
	})
	.transform(withOffset);

export type TProductQuery = z.infer<typeof productQuerySchema>;
