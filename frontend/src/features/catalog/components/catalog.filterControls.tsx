import type { TProductQuery } from '@/shared/schema';

export const FilterControls = ({
	clearAllFilters,
	filters,
	handleChanges,
}: {
	filters: TProductQuery;
	handleChanges: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>) => void;
	clearAllFilters: () => void;
}) => (
	<div className="space-y-6">
		<div>
			<h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
			<div className="space-y-2">
				{['all', 'men', 'women', 'kids'].map((cat) => (
					<label
						key={cat}
						className="flex items-center gap-2 text-gray-600 capitalize cursor-pointer hover:text-gray-600"
					>
						<input
							type="radio"
							name="category"
							value={cat}
							checked={filters?.category === cat}
							onChange={handleChanges}
							className="text-gray-600 focus:ring-gray-500"
						/>
						{cat}
					</label>
				))}
			</div>
		</div>

		<div>
			<h3 className="font-semibold text-gray-900 mb-3">Max Price: ${filters.maxPrice}</h3>
			<input
				name="maxPrice"
				type="range"
				min="0"
				max="300"
				value={filters.maxPrice || 300}
				onChange={handleChanges}
				className="w-full accent-gray-600 cursor-pointer"
				step={10}
			/>
			<div className="flex justify-between text-xs text-gray-500 mt-1">
				<span>$0</span>
				<span>$300</span>
			</div>
		</div>

		<button
			onClick={clearAllFilters}
			className="w-full text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 py-2 rounded-md hover:bg-gray-50 transition"
		>
			Clear All Filters
		</button>
	</div>
);
