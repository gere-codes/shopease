import { useState } from 'react';
import { useUrlFilteredFetch } from '@/shared/hooks';
import { productQuerySchema, type TProduct, type TProductQuery } from '@/shared/schema';
import { selectProductSlice } from '@/shared/store/product/product.selector';
import { productThunks } from '@/shared/store/product/product.thunks';
import { BASE_URL } from '@/shared/api';
import { useCatalogActions } from '@/features/catalog/catalog.hook';
import type { TProductKey } from '@/shared/store';
import { CatalogHeader, CatalogMain, DesktopFilter, MobileFilter } from '@/features/catalog';

export const CatalogPage = () => {
	const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

	// Fetch's catalog
	const { data } = useUrlFilteredFetch<TProduct, TProductKey, TProductQuery>({
		schema: productQuerySchema,
		thunkAction: productThunks.getCollection,
		key: 'catalog',
		selectSlice: selectProductSlice,
	});

	// Handle catalog events
	const { handleChanges, localFilters, clearAllFilters, searchParams } = useCatalogActions();

	const handleMobileFilterOpen = (isOpen: boolean) => {
		setIsMobileFilterOpen(isOpen);
	};

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{/* Catalog Header */}
			<CatalogHeader
				handleMobileFilterOpen={handleMobileFilterOpen}
				searchParams={searchParams}
				onSort={handleChanges}
				localFilters={localFilters}
			/>

			<div className="flex gap-8">
				{/* Desktop: Filter Contoroller */}
				<DesktopFilter clearAllFilters={clearAllFilters} localFilters={localFilters} onFilter={handleChanges} />

				{/* Main: Products */}
				<CatalogMain baseUrl={BASE_URL} clearAllFilters={clearAllFilters} data={data} />
			</div>

			{/*  Mobile: Filter Controller */}
			<MobileFilter
				isMobileFilterOpen={isMobileFilterOpen}
				clearAllFilters={clearAllFilters}
				localFilters={localFilters}
				onFilter={handleChanges}
				handleMobileFilterOpen={handleMobileFilterOpen}
			/>
		</div>
	);
};
