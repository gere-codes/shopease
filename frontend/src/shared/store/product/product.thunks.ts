import { createBaseThunks } from '@/shared/base/base.thunk';
import type { TProduct, TProductQuery } from '@/shared/schema';
import { productService } from './product.service';
import type { TProductKey } from './product.type';

export const productThunks = createBaseThunks<TProduct, TProductKey, TProductQuery>('product', productService);
