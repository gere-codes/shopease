import { createBaseSlice } from '@/shared/base/base.slice';
import type { TProduct, TProductQuery } from '@/shared/schema';
import { productThunks } from './product.thunks';
import type { TProductKey } from './product.type';
export const productSlice = createBaseSlice<TProduct, TProductKey, TProductQuery>('product', productThunks);
