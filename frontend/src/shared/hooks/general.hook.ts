import type { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect, useMemo } from 'react';
import { useAppDispatch } from './redux.hook';
import type { TBaseQuery } from '../schema';
import type { ICollectionResult } from '../types';
import { useSearchParams } from 'react-router';

export const useFetchData = <T, TQuery extends TBaseQuery = TBaseQuery>({
	filter,
	thunkAction,
}: {
	filter: TQuery;
	thunkAction: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
}) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(thunkAction(filter as unknown as TQuery & undefined));
	}, [dispatch]);
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
