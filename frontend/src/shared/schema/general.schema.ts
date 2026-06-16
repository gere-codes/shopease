import z from 'zod';

export const paginationSchema = z
	.object({
		page: z.number(),
		limit: z.number(),
		totalPages: z.number(),
		totalItems: z.number(),
	})
	.nullish();

export type TPagination = z.infer<typeof paginationSchema>;

export const apiResponseSchema = z.object({
	data: z.object({
		data: z.unknown(),
		pagination: z.unknown(),
	}),
});
