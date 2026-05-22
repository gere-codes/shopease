import { ProductSection } from '@common';
import { products } from '@data';

export const ProductArraivals = () => {
	return (
		<>
			<ProductSection
				products={products}
				title="New Arrivals"
				actionLabel="View All"
				path="/arrivals"
				limit={4}
			/>
		</>
	);
};
