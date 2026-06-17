import type { TProductQuery } from '@/shared/schema';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
interface Props<K extends Extract<keyof TProductQuery, string>> {
	filters: TProductQuery;
	setParam: ({ key, value }: { key: K; value: TProductQuery[K] }) => void;
	setParamsDebounce: any;
}
export const useCatalogActions = <K extends Extract<keyof TProductQuery, string>>({
	filters,
	setParam,
	setParamsDebounce,
}: Props<K>) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [params, setParams] = useState<TProductQuery | null>(filters);

	useEffect(() => {
		setParams(filters || null);
	}, [filters]);

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setParams((prev) => {
			const val = name === 'maxPrice' ? Number(value) : value;
			return {
				...prev,
				[name]: val,
			};
		});

		if (name === 'maxPrice') {
			setParamsDebounce({ key: name, value: String(value) });
		} else {
			setParam({ key: name, value });
		}
	};

	const clearAllFilters = () => {
		setSearchParams({});
	};

	return {
		handleChanges,
		params,
		clearAllFilters,
	};
};
