import { createBaseSlice } from '@/shared/base/base.slice';
import { categoryThunks } from './category.thunks';
import type { TCategory, TCategoryQuery } from '@/shared/schema/category.schema';
import type { TCategoryKey } from './category.type';

export const categorySlice = createBaseSlice<TCategory, TCategoryKey, TCategoryQuery>('category', categoryThunks);
