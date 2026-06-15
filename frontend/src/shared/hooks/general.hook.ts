import type { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from './redux.hook';
import type { TBaseQuery } from '../schema';
import type { ICollectionResult } from '../types';
import { useSearchParams } from 'react-router';
import type { RootState } from '@/store';

export const useFetch = <T, TQuery extends TBaseQuery = TBaseQuery>({
	filter,
	thunkAction,
	selectData,
	selectStatus,
}: {
	filter: TQuery;
	thunkAction: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
	selectData: (state: RootState) => T[];
	selectStatus: (state: RootState) => string;
}) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(thunkAction(filter as unknown as TQuery & undefined));
	}, [dispatch]);

	const data = useAppSelector(selectData);
	const status = useAppSelector(selectStatus);

	return {
		data,
		status,
	};
};

export const useQueryParams = <TQuery extends TBaseQuery = TBaseQuery>({ schema }: { schema: z.ZodSchema<TQuery> }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const filters = useMemo(() => {
		try {
			const queryParams = Object.fromEntries(searchParams.entries());
			return schema.parse(queryParams);
		} catch (error) {
			console.error(error);
			return schema.parse({});
		}
	}, [searchParams, schema]);

	return { filters, searchParams, setSearchParams };
};
