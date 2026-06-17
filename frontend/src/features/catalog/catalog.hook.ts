import { useUrlParams } from '@/shared/hooks';
import { productQuerySchema, type TProductQuery } from '@/shared/schema';
import { useEffect, useState } from 'react';

type SortKey = 'createdAt' | 'price-low' | 'price-high';
type SortConfig = {
	sort: TProductQuery['sort'];
	order: TProductQuery['order'];
};

const sortMap: Record<SortKey, SortConfig> = {
	createdAt: { sort: 'createdAt', order: 'desc' },
	'price-low': { sort: 'price', order: 'asc' },
	'price-high': { sort: 'price', order: 'desc' },
};

export const useCatalogActions = () => {
	const { filters, setParam, setParamsDebounce, searchParams, clearAllParams } = useUrlParams<TProductQuery>({
		schema: productQuerySchema,
	});

	const [localFilters, setLocalFilters] = useState<TProductQuery>(filters);
	console.log('re-rendered', localFilters?.sort, localFilters?.order);

	useEffect(() => {
		setLocalFilters(filters);
	}, [filters]);

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		const val = name === 'maxPrice' ? Number(value) : value;

		setLocalFilters((prev) => ({
			...prev,
			[name]: val,
		}));

		if (name === 'maxPrice') {
			setParamsDebounce({ [name]: val });
		} else if (name === 'sort') {
			const sort = sortMap[value as SortKey];
			setParam(sort);
		} else {
			setParam({ [name]: val });
		}
	};

	return {
		handleChanges,
		localFilters,
		clearAllFilters: clearAllParams,
		searchParams,
	};
};
