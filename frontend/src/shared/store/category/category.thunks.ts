import { createBaseThunks } from '@/shared/base/base.thunk';
import { categoryService } from './category.service';
import type { TCategory, TCategoryQuery } from '@/shared/schema/category.schema';
import type { TCategoryKey } from './category.type';

export const categoryThunks = createBaseThunks<TCategory, TCategoryKey, TCategoryQuery>('category', categoryService);
