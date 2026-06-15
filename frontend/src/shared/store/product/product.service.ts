import { BaseService } from '@/shared/base/base.service';
import { productQuerySchema, productSchema, type TProduct, type TProductQuery } from '@/shared/schema';

export class ProductService extends BaseService<TProduct, TProductQuery> {
	constructor() {
		super(productSchema, productQuerySchema, 'product');
	}
}
