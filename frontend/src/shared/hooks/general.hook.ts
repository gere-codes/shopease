import type { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './redux.hook';
import type { TBaseQuery } from '../schema';
import type { ICollectionResult } from '../types';
import { useSearchParams } from 'react-router';
import type { RootState } from '@/store';
import type z from 'zod';

export const useFetch = <T, TQuery extends TBaseQuery = TBaseQuery>({
	filters,
	thunkAction,
	selectData,
	selectStatus,
}: {
	filters: TQuery;
	thunkAction: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
	selectData: (state: RootState) => T[];
	selectStatus: (state: RootState) => string;
}) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(thunkAction(filters as unknown as TQuery & undefined));
	}, [dispatch]);

	const data = useAppSelector(selectData);
	const status = useAppSelector(selectStatus);

	return {
		data,
		status,
	};
};

export const useQueryParams = <TQuery extends TBaseQuery = TBaseQuery>({
	schema,
	isPaginated = true,
	limit = 10,
}: {
	schema: z.ZodSchema<TQuery>;
	isPaginated?: boolean;
	limit?: number;
}) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const filters = useMemo(() => {
		try {
			if (!isPaginated) {
				const payload = { isPaginated, limit };
				return schema.parse(payload);
			} else {
				const queryParams = Object.fromEntries(searchParams.entries());
				return schema.parse(queryParams);
			}
		} catch (error) {
			console.error(error);
			return schema.parse({});
		}
	}, [searchParams, schema]);

	return { filters, searchParams, setSearchParams };
};

export const useFilteredFetch = <T, TQuery extends TBaseQuery = TBaseQuery>({
	isPaginated = true,
	limit = 10,
	schema,
	thunkAction,
	selectData,
	selectStatus,
}: {
	limit?: number;
	isPaginated?: boolean;
	schema: z.ZodSchema<TQuery>;
	thunkAction: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
	selectData: (state: RootState) => T[];
	selectStatus: (state: RootState) => string;
}) => {
	const { filters } = useQueryParams({ schema, isPaginated, limit });
	const { data, status } = useFetch({ filters, thunkAction, selectData, selectStatus });

	return {
		data,
		status,
	};
};
