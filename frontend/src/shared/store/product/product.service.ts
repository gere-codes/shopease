import { BaseService } from '@/shared/base/base.service';
import { productQuerySchema, productSchema, type TProduct, type TProductQuery } from '@/shared/schema';

class ProductService extends BaseService<TProduct, TProductQuery> {
	constructor() {
		super(productSchema, productQuerySchema, 'product');
	}
}

export const productService = new ProductService();
