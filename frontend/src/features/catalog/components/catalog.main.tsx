import { ProductGrid } from '@/shared/components/common';
import type { TProduct } from '@/shared/schema';

interface Props {
	data: TProduct[];
	baseUrl: string;
	clearAllFilters: () => void;
}
export const CatalogMain = ({ data, baseUrl, clearAllFilters }: Props) => {
	return (
		<main className="flex-1">
			{data.length > 0 ? (
				<ProductGrid products={data} baseUrl={baseUrl} />
			) : (
				<div className="text-center py-24 bg-gray-50 rounded-xl border border-dashed">
					<p className="text-gray-500 text-lg">No products match your current criteria.</p>
					<button onClick={clearAllFilters} className="mt-3 text-gray-600 font-medium hover:underline">
						Reset all parameters
					</button>
				</div>
			)}
		</main>
	);
};
