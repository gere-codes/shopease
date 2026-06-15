import type { RootState } from '@/store';

export const selectProductItems = (state: RootState) => state.products.items.data;
export const selectProductStatus = (state: RootState) => state.products.items.status;
