import type { RootState } from '@/store';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalItems = (state: RootState) =>
	state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartItemQuantity = (state: RootState, id: string) => {
	const item = state.cart.items.find((i) => i.product.id === id);
	return item ? item.quantity : 0;
};

export const selectCartLastAction = (state: RootState) => state.cart.lastAction;
