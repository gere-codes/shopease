import { productSchema } from '@schema';
import z from 'zod';

export const cartSchema = z.object({
	product: productSchema,
	quantity: z.coerce.number().int().positive(),
});

export type TCart = z.infer<typeof cartSchema>;
