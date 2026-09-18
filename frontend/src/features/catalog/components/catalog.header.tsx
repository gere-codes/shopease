import type { TProductQuery } from '@/shared/schema';
import { FiSliders } from 'react-icons/fi';

interface Props {
	searchParams: URLSearchParams;
	localFilters: TProductQuery;
	onSort: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>) => void;
	handleMobileFilterOpen: (isOpen: boolean) => void;
}

export const CatalogHeader = ({ searchParams, localFilters, onSort, handleMobileFilterOpen }: Props) => {
	return (
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
					onChange={onSort}
					className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-gray-300 focus:outline-none focus:ring-gray-500 bg-white border"
				>
					<option value="featured">Sort by: Featured</option>
					<option value="priceAsc">Price: Low to High</option>
					<option value="priceDesc">Price: High to Low</option>
				</select>
			</div>
		</div>
	);
};
