import type { RootState } from '@/store';

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalItems = (state: RootState) =>
	state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectTotalCost = (state: RootState) => {
	const subtotal = state.cart.items.reduce((total, item) => total + item.quantity * item.product.price, 0);
	const shippingEst = subtotal > 150 || subtotal === 0 ? 0 : 9.99;
	const taxRate = 0.13;
	const taxEst = taxRate * subtotal;
	const totalCost = subtotal + shippingEst + taxEst;

	return {
		subtotal,
		shippingEst,
		totalCost,
		taxEst,
	};
};
export const selectCartItemQuantity = (state: RootState, id: string) => {
	const item = state.cart.items.find((i) => i.product.id === id);
	return item ? item.quantity : 0;
};

export const selectCartLastAction = (state: RootState) => state.cart.lastAction;
