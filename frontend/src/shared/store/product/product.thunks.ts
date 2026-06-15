import { createBaseThunks } from '@/shared/base/base.thunk';
import type { TProduct, TProductQuery } from '@/shared/schema';
import { productService } from './product.service';

export const productThunks = createBaseThunks<TProduct, TProductQuery>('product', productService);
