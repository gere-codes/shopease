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
import { FilterControls, MobileFilter } from '@/features/catalog';

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
			{/* Context Header */}
			<div className="border-b border-gray-200 pb-5 mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
				<div>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
						{searchParams?.get('search')
							? `Results for "${searchParams?.get('search')}"`
							: `${localFilters?.category} Collection`}
					</h1>
				</div>

				{/* Sorting and Mobile Filter Button */}
				<div className="flex items-center justify-between md:justify-end gap-4">
					<button
						onClick={() => handleMobileFilterOpen(true)}
						className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white"
					>
						<FiSliders /> Filters
					</button>

					<select
						value={localFilters?.sortBy}
						name="sortBy"
						onChange={handleChanges}
						className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-gray-300 focus:outline-none focus:ring-gray-500 bg-white border"
					>
						<option value="featured">Sort by: Featured</option>
						<option value="priceAsc">Price: Low to High</option>
						<option value="priceDesc">Price: High to Low</option>
					</select>
				</div>
			</div>

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
