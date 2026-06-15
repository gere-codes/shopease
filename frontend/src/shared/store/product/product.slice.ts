import { createBaseSlice } from '@/shared/base/base.slice';
import type { TProduct, TProductQuery } from '@/shared/schema';
import { productThunks } from './product.thunks';

export const productSlice = createBaseSlice<TProduct, TProductQuery>('product', productThunks);
