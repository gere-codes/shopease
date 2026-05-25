import z from 'zod';

export const productBaseSchema = z.object({
	id: z.uuid(),
	name: z.string(),
	price: z.number().nonnegative(),
	images: z.array(z.string()).optional(),
	quantity: z.number().nonnegative(),
	description: z.string().optional().nullable(),
	createdAt: z.string().optional().nullable(),
	updatedAt: z.string().optional().nullable(),
});

export type TProduct = z.infer<typeof productBaseSchema>;
