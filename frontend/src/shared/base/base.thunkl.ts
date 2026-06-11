import { createAsyncThunk, type AsyncThunk } from '@reduxjs/toolkit';
import type { TBaseQuery } from '../schema';
import type { IBaseService } from './base.service';
import type { ICollectionResult } from '../types';
import { isAxiosError } from 'axios';

export interface BaseThunksResult<T, TQuery> {
	getCollection: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
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
	TQuery extends TBaseQuery,
	TService extends IBaseService<T, TQuery> = IBaseService<T, TQuery>,
>(
	resource: string,
	service: TService,
): BaseThunksResult<T, TQuery> => {
	const getCollection = createAsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>(
		`${resource}/getCollection`,
		async (params, { rejectWithValue }) => {
			try {
				return await service.getCollection(params);
			} catch (error) {
				return rejectWithValue(handleThunkError(error, `Error fetching ${resource}s`));
			}
		},
	);

	return { getCollection };
};
