import type { RootState } from '@/store';

export const selectProductSlice = (state: RootState) => state.products;

export const selectProductItemData = (state: RootState) => state.products.item.data;
export const selectProductItemStatus = (state: RootState) => state.products.item.status;
