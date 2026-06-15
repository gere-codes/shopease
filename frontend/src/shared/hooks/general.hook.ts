import type { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useAppDispatch } from './redux.hook';
import type { TBaseQuery } from '../schema';
import type { ICollectionResult } from '../types';

export const useFetchData = <T, TQuery extends TBaseQuery = TBaseQuery>({
	filter,
	thunkAction,
}: {
	filter: T;
	thunkAction: AsyncThunk<ICollectionResult<T>, TQuery, { rejectValue: string }>;
}) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(thunkAction(filter as unknown as TQuery & undefined));
	}, [dispatch]);
};
