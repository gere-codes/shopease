import { createBaseThunks } from '@/shared/base/base.thunk';
import { categoryService } from './category.service';
import type { TCategory, TCategoryQuery } from '@/shared/schema/category.schema';

export const categoryThunks = createBaseThunks<TCategory, TCategoryQuery>('category', categoryService);
