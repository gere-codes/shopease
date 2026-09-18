import { useState } from 'react';
import { FiSliders, FiX } from 'react-icons/fi';
import { ProductGrid } from '@common';
import { useUrlFilteredFetch } from '@/shared/hooks';
import { productQuerySchema, type TProduct, type TProductQuery } from '@/shared/schema';
import { selectProductSlice } from '@/shared/store/product/product.selector';
import { productThunks } from '@/shared/store/product/product.thunks';
import { BASE_URL } from '@/shared/api';
import { useCatalogActions } from '@/features/catalog/catalog.hook';
import type { TProductKey } from '@/shared/store';
import { CatalogHeader, FilterControls, MobileFilter } from '@/features/catalog';

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
				{/* Desktop Filter Sidebar */}
				<aside className="hidden md:block w-64 shrink-0 border-r border-gray-100 pr-8">
					<FilterControls
						filters={localFilters}
						handleChanges={handleChanges}
						clearAllFilters={clearAllFilters}
					/>
				</aside>

				{/* Main Product Display Section */}
				<main className="flex-1">
					{data.length > 0 ? (
						<ProductGrid products={data} baseUrl={BASE_URL} />
					) : (
						<div className="text-center py-24 bg-gray-50 rounded-xl border border-dashed">
							<p className="text-gray-500 text-lg">No products match your current criteria.</p>
							<button
								onClick={clearAllFilters}
								className="mt-3 text-gray-600 font-medium hover:underline"
							>
								Reset all parameters
							</button>
						</div>
					)}
				</main>
			</div>

			{/*  Mobile: Filter Controller */}
			<MobileFilter
				isMobileFilterOpen={isMobileFilterOpen}
				clearAllFilters={clearAllFilters}
				localFilters={localFilters}
				onCategories={handleChanges}
				handleMobileFilterOpen={handleMobileFilterOpen}
			/>
		</div>
	);
};
