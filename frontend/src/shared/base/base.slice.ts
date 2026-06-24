import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit';
import type { TBaseQuery, TPagination } from '../schema';
import type { BaseThunksResult } from './base.thunk';
interface IAsyncState<T> {
	data: T;
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
}
interface IItemsByKeys<T> {
	items: IAsyncState<T[]>;
	pagination?: TPagination;
}
export type TBaseSliceState<T, TKey extends string, TExtra = {}> = {
	itemsByKey: Record<TKey, IItemsByKeys<T>>;
	item: IAsyncState<T | null>;
} & TExtra;

const getOrCreateBucket = <T, TKey extends string>(
	state: Draft<TBaseSliceState<T, TKey>>,
	key: TKey,
): IItemsByKeys<T> => {
	const map = state.itemsByKey as Record<TKey, IItemsByKeys<T>>;

	if (!map[key]) {
		map[key] = {
			items: {
				data: [],
				status: 'idle',
				error: null,
			},
			pagination: {
				limit: 0,
				page: 0,
				totalItems: 0,
				totalPages: 0,
			},
		};
	}

	return map[key];
};

export const createBaseSlice = <T, TKey extends string, TQuery extends TBaseQuery>(
	resource: string,
	thunks: BaseThunksResult<T, TKey, TQuery>,
) => {
	const initialState: TBaseSliceState<T, TKey> = {
		itemsByKey: {} as Record<TKey, IItemsByKeys<T>>,
		item: {
			data: null,
			status: 'idle',
			error: null,
		},
	};

	return createSlice({
		name: resource,
		initialState,
		reducers: {
			clearItemsError: (state, action: PayloadAction<TKey>) => {
				const bucket = getOrCreateBucket(state, action.payload);
				bucket.items.error = null;
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
				.addCase(thunks.getCollection.pending, (state, action) => {
					const key = action.meta.arg.key as TKey;
					const bucket = getOrCreateBucket(state, key);

					bucket.items.status = 'pending';
					bucket.items.error = null;
				})
				.addCase(thunks.getCollection.fulfilled, (state, action) => {
					const key = action.payload.key as TKey;
					const collection = action.payload.collection;
					const { items, pagination } = collection;

					const bucket = getOrCreateBucket(state, key);
					bucket.items.status = 'succeeded';
					bucket.items.data = items;
					bucket.pagination = pagination;
				})
				.addCase(thunks.getCollection.rejected, (state, action) => {
					const key = action.meta.arg.key as TKey;

					const bucket = getOrCreateBucket(state, key);
					bucket.items.status = 'failed';
					bucket.items.error = action.payload || 'unknown error';
				});
		},
	});
};
