import { createSlice } from '@reduxjs/toolkit';
import type { TBaseQuery, TPagination } from '../schema';
import type { BaseThunksResult } from './base.thunk';
import { castDraft } from 'immer';

export type BaseSliceState<T, TExtra = {}> = {
	items: {
		data: T[];
		status: 'idle' | 'pending' | 'succeeded' | 'failed';
		error: string | null;
	};
	item: {
		data: T | null;
		status: 'idle' | 'pending' | 'succeeded' | 'failed';
		error: string | null;
	};

	pagination: TPagination;
} & TExtra;

export const createBaseSlice = <T, TQuery extends TBaseQuery>(
	resource: string,
	thunks: BaseThunksResult<T, TQuery>,
) => {
	const initialState: BaseSliceState<T> = {
		items: {
			data: [],
			status: 'idle',
			error: null,
		},
		item: {
			data: null,
			status: 'idle',
			error: null,
		},

		pagination: {
			limit: 4,
			page: 1,
			totalItems: 1,
			totalPages: 1,
		},
	};

	return createSlice({
		name: resource,
		initialState,
		reducers: {
			clearItemsError: (state) => {
				state.items.error = null;
			},
			reset: () => initialState,
		},
		extraReducers: (builder) => {
			builder
				// get by id
				.addCase(thunks.getById.pending, (state) => {
					state.item.status = 'pending';
					state.item.error = null;
				})
				.addCase(thunks.getById.fulfilled, (state, action) => {
					state.item.status = 'succeeded';
					state.item.data = action.payload as typeof state.item.data;
				})
				.addCase(thunks.getById.rejected, (state, action) => {
					state.item.status = 'failed';
					state.item.error = action.payload || 'Unknown error';
				})
				// get collecion
				.addCase(thunks.getCollection.pending, (state) => {
					state.items.status = 'pending';
					state.items.error = null;
				})
				.addCase(thunks.getCollection.fulfilled, (state, action) => {
					state.items.status = 'succeeded';
					state.items.data = castDraft(action.payload.data);
					state.pagination = action.payload.pagination as typeof state.pagination;
				})
				.addCase(thunks.getCollection.rejected, (state, action) => {
					state.items.status = 'failed';
					state.items.error = action.payload || 'Unknown error';
				});
		},
	});
};
