import type { AsyncThunk } from '@reduxjs/toolkit';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from './redux.hook';
import type { TBaseQuery } from '../schema';
import type { ICollectionResult } from '../types';
import { useSearchParams } from 'react-router';
import type { RootState } from '@/store';
import type z from 'zod';
import type { TBaseSliceState } from '../base/base.slice';

export const useDebouncedCallback = <TArgs extends unknown[]>(
	callback: (...args: TArgs) => void,
	delay: number = 300,
) => {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const debouncedCallback = useCallback(
		(...args: TArgs) => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			timeoutRef.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return debouncedCallback;
};

export const useFetch = <T, TKey extends string, TQuery extends TBaseQuery = TBaseQuery>({
	filters,
	key,
	thunkAction,
	selectSlice,
}: {
	filters: TQuery;
	key: TKey;
	thunkAction: AsyncThunk<
		{ collection: ICollectionResult<T>; key: TKey },
		{ filters: TQuery; key: TKey },
		{ rejectValue: string }
	>;

	selectSlice: (state: RootState) => TBaseSliceState<T, TKey>;
}) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(thunkAction({ filters, key }));
	}, [dispatch, filters, thunkAction, key]);

	const slice = useAppSelector(selectSlice);

	const bucket = slice.itemsByKey[key];

	return {
		data: bucket?.items.data ?? [],
		status: bucket?.items.status ?? 'idle',
		pagination: bucket?.pagination,
	};
};

export const useUrlParams = <TQuery extends TBaseQuery = TBaseQuery>({ schema }: { schema: z.ZodSchema<TQuery> }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const filters = useMemo(() => {
		try {
			const urlFilters = Object.fromEntries(searchParams.entries());
			return schema.parse(urlFilters);
		} catch (error) {
			console.error(error);
			return schema.parse({});
		}
	}, [searchParams, schema]);

	// Sets params immediately
	const setParam = <TQuery>(params: Partial<TQuery>) => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev);

			Object.entries(params).forEach(([key, value]) => {
				if (value === undefined || value === null || value === '') {
					newParams.delete(key);
				} else {
					newParams.set(key, String(value));
				}
			});
			return newParams;
		});
	};

	// Sets params with debounce
	const setParamsDebounce = useDebouncedCallback(setParam, 300);

	// Function that results the params:
	const clearAllParams = () => {
		setSearchParams({});
	};

	return { filters, searchParams, setParam, setParamsDebounce, clearAllParams };
};

export const useUrlFilteredFetch = <T, TKey extends string, TQuery extends TBaseQuery = TBaseQuery>({
	schema,
	thunkAction,
	key,
	selectSlice,
}: {
	schema: z.ZodType<TQuery>;
	thunkAction: AsyncThunk<
		{ collection: ICollectionResult<T>; key: TKey },
		{ filters: TQuery; key: TKey },
		{ rejectValue: string }
	>;
	key: TKey;
	selectSlice: (state: RootState) => TBaseSliceState<T, TKey>;
}) => {
	const { filters, searchParams, clearAllParams, setParam, setParamsDebounce } = useUrlParams({ schema });
	const { data, status } = useFetch({ filters, thunkAction, key, selectSlice });

	return {
		filters,
		data,
		status,
		searchParams,
		clearAllParams,
		setParam,
		setParamsDebounce,
	};
};

export const useStaticParams = <TQuery extends TBaseQuery>({
	staticParams,
	schema,
}: {
	staticParams: Partial<TQuery>;
	schema: z.ZodType<TQuery>;
}) => {
	const filters = useMemo(() => {
		try {
			const staticFilters = schema.parse(staticParams);
			return staticFilters;
		} catch (error) {
			console.error(error);
			return schema.parse({});
		}
	}, [staticParams, schema]);

	return { filters };
};

export const useStaticFilteredFetch = <T, TKey extends string, TQuery extends TBaseQuery>({
	staticParams,
	schema,
	thunkAction,
	key,
	selectSlice,
}: {
	staticParams: Partial<TQuery>;
	schema: z.ZodType<TQuery>;
	thunkAction: AsyncThunk<
		{ collection: ICollectionResult<T>; key: TKey },
		{ filters: TQuery; key: TKey },
		{ rejectValue: string }
	>;
	key: TKey;
	selectSlice: (state: RootState) => TBaseSliceState<T, TKey>;
}) => {
	const { filters } = useStaticParams({ schema, staticParams });

	const { data, status } = useFetch({ filters, thunkAction, key, selectSlice });

	return { data, status };
};
