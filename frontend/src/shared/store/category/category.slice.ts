import { createBaseSlice } from '@/shared/base/base.slice';
import { categoryThunks } from './category.thunks';
import type { TCategory, TCategoryQuery } from '@/shared/schema/category.schema';

export const categorySlice = createBaseSlice<TCategory, TCategoryQuery>('category', categoryThunks);
