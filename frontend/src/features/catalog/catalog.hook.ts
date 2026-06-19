import { useUrlParams } from '@/shared/hooks';
import { productQuerySchema, type TProductQuery } from '@/shared/schema';
import { useState } from 'react';

export const useCatalogActions = () => {
	const { filters, setParam, setParamsDebounce, searchParams, clearAllParams } = useUrlParams<TProductQuery>({
		schema: productQuerySchema,
	});

	const [localFilters, setLocalFilters] = useState<TProductQuery>(filters);

	const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		const val = name === 'maxPrice' || name === 'minPrice' ? Number(value) : value;

		setLocalFilters((prev) => ({
			...prev,
			[name]: val,
		}));

		if (name === 'maxPrice' || name === 'minPrice') {
			setParamsDebounce<TProductQuery>({ [name]: Number(val) });
		} else {
			setParam({ [name]: val });
		}
	};

	return {
		// Data
		localFilters,
		searchParams,

		// Actions
		handleChanges,
		clearAllFilters: () => {
			clearAllParams();
			setLocalFilters({ maxPrice: 300, category: 'all' } as TProductQuery);
		},
	};
};
