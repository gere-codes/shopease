import { ProductGrid } from '@common';
import { products } from '@data';

export const ProductArraivals = () => {
	return (
		<>
			<section className="px-6 py-10 w-full max-w-7xl mx-auto">
				<section className="flex gap-2 items-end">
					<h2 className="text-5xl font-heading">New Arrivals</h2>
					<small className="font-heading underline">View All</small>
				</section>

				{/* List of Products */}
				<section className="w-full mt-4">
					<ProductGrid products={products} />
				</section>
			</section>
		</>
	);
};
