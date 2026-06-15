import type { RootState } from '@/store';

export const selectCategoriesItems = (state: RootState) => state.categories.items.data;
export const selectCategoriesStatus = (state: RootState) => state.categories.items.status;
