import { createAsyncThunk, type AsyncThunk } from '@reduxjs/toolkit';
import type { TBaseQuery } from '../schema';
import type { IBaseService } from './base.service';
import type { ICollectionResult } from '../types';
import { isAxiosError } from 'axios';

export interface BaseThunksResult<T, TKey extends string, TQuery> {
	getCollection: AsyncThunk<
		{ collection: ICollectionResult<T>; key: TKey },
		{ filters: TQuery; key: TKey },
		{ rejectValue: string }
	>;
	getById: AsyncThunk<T, string, { rejectValue: string }>;
}

export const handleThunkError = (error: unknown, defaultMessage: string): string => {
	if (isAxiosError(error) && error.response?.data) {
		const data = error.response.data;
		return typeof data === 'string' ? data : data.message || defaultMessage;
	}
	return defaultMessage;
};

export const createBaseThunks = <
	T,
	TKey extends string,
	TQuery extends TBaseQuery,
	TService extends IBaseService<T, TQuery> = IBaseService<T, TQuery>,
>(
	resource: string,
	service: TService,
): BaseThunksResult<T, TKey, TQuery> => {
	const getCollection = createAsyncThunk<
		{ collection: ICollectionResult<T>; key: TKey },
		{ filters: TQuery; key: TKey },
		{ rejectValue: string }
	>(`${resource}/getCollection`, async ({ filters, key }, { rejectWithValue }) => {
		try {
			const collection = await service.getCollection(filters);
			return {
				collection: collection,
				key: key,
			};
		} catch (error) {
			return rejectWithValue(handleThunkError(error, `Error fetching ${resource}s`));
		}
	});
	const getById = createAsyncThunk<T, string, { rejectValue: string }>(
		`${resource}/getById`,
		async (id, { rejectWithValue }) => {
			try {
				return await service.getById(id);
			} catch (error) {
				return rejectWithValue(handleThunkError(error, `Error fetching ${resource}s`));
			}
		},
	);

	return { getCollection, getById };
};
