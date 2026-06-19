import z from 'zod';
import { commonQuery, withOffset } from './query.schema';

export const categorySchema = z.object({
	id: z.uuid(),
	name: z.string(),
	slug: z.string(),
	image: z.string(),
	description: z.string().optional().nullable(),
	createdAt: z.string().optional().nullable(),
	updatedAt: z.string().optional().nullable(),
});

export type TCategory = z.infer<typeof categorySchema>;

export const categoryQuerySchema = commonQuery
	.extend({
		search: z.string().optional(),
		sortBy: z.enum(['featured', 'nameAsc', 'nameDesc']).default('featured'),
	})
	.transform(withOffset);

export type TCategoryQuery = z.infer<typeof categoryQuerySchema>;
