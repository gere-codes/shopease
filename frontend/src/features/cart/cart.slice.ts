import { createSlice } from '@reduxjs/toolkit';
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
	reducers: {},
});
