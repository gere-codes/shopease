import type { RootState } from '@/store';

export const selectProductItems = (state: RootState) => state.products.items.data;
export const selectProductStatus = (state: RootState) => state.products.items.status;

export const selectProductItemData = (state: RootState) => state.products.item.data;
export const selectProductItemStatus = (state: RootState) => state.products.item.status;
