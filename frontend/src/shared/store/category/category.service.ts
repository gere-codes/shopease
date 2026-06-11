import { BaseService } from '@/shared/base/base.service';
import {
	categoryQuerySchema,
	categorySchema,
	type TCategory,
	type TCategoryQuery,
} from '@/shared/schema/category.schema';

export class CategoryService extends BaseService<TCategory, TCategoryQuery> {
	constructor() {
		super(categorySchema, categoryQuerySchema, 'category');
	}
}

export const categoryService = new CategoryService();
