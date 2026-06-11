import { createBaseSlice } from '@/shared/base/base.slice';
import { categoryThunks } from './category.thunks';

export const categorySlice = createBaseSlice('category', categoryThunks);
