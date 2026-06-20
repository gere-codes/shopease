import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TCart } from './cart.schema';
import { ECartLastAction } from './cart.enum';

interface CartState {
	items: TCart[];
	lastAction: ECartLastAction;
}

const initialState: CartState = {
	items: [],
	lastAction: ECartLastAction.INITIAL,
};
export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<TCart>) => {
			const payload = action.payload;
			const item = state.items.find((i) => i.product.id === payload.product.id);
			const max = payload.product.quantity;

			if (item) {
				const newQty = item.quantity + payload.quantity;

				if (newQty > max) {
					item.quantity = max;
					state.lastAction = ECartLastAction.MAX_REACHED;
				} else {
					item.quantity = newQty;
					state.lastAction = ECartLastAction.ADDED;
				}
			} else {
				const qty = Math.min(payload.quantity, max);
				state.items.push({ ...payload, quantity: qty });

				state.lastAction = qty < payload.quantity ? ECartLastAction.MAX_REACHED : ECartLastAction.ADDED;
			}
		},
		update: (state, action) => {
			const payload = action.payload;
			const item = state.items.find((i) => i.product.id === payload.product.id);
			const max = payload.product.quantity;

			if (item) {
				item.quantity = Math.min(payload.quantity, max);
				state.lastAction = ECartLastAction.UPDATED;
			}
		},

		remove: (state, action) => {
			const payload = action.payload;

			const itemIndex = state.items.findIndex((item) => item.product.id === payload.product.id);
			if (itemIndex !== -1) {
				state.items.splice(itemIndex, 1);
				state.lastAction = ECartLastAction.REMOVED;
			}
		},
	},
});

export const cartAction = cartSlice.actions;
