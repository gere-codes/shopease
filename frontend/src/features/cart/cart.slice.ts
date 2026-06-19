import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TCart } from './cart.schema';

interface CartState {
	cart: TCart[];
}

const initialState: CartState = {
	cart: [],
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<TCart>) => {
			const payload = action.payload;

			const itemIndex = state.cart.findIndex((item) => item.product.id === payload.product.id);
			if (itemIndex !== -1) {
				const item = state.cart[itemIndex];
				if (item.quantity < item.product.quantity) {
					item.quantity += 1;
				}
			} else {
				state.cart.push({ ...payload, quantity: 1 });
			}
		},
	},
});
