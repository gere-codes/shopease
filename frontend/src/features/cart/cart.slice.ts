import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TCart } from './cart.schema';

interface CartState {
	items: TCart[];
}

const initialState: CartState = {
	items: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<TCart>) => {
			const payload = action.payload;

			const itemIndex = state.items.findIndex((item) => item.product.id === payload.product.id);
			if (itemIndex !== -1) {
				const item = state.items[itemIndex];
				if (item.quantity < item.product.quantity) {
					item.quantity += 1;
				}
			} else {
				state.items.push({ ...payload, quantity: 1 });
			}
		},

		decrement: (state, action) => {
			const payload = action.payload;

			const itemIndex = state.items.findIndex((item) => item.product.id === payload.product.id);
			if (itemIndex !== -1) {
				const item = state.items[itemIndex];
				if (item.quantity === 1) {
					state.items.splice(itemIndex, 1);
				} else {
					item.quantity--;
				}
			}
		},

		remove: (state, action) => {
			const payload = action.payload;

			const itemIndex = state.items.findIndex((item) => item.product.id === payload.product.id);
			if (itemIndex !== -1) {
				state.items.splice(itemIndex, 1);
			}
		},
	},
});

export const { increment, decrement, remove } = cartSlice.actions;
