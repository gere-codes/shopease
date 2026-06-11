import type { TProduct } from '@/features/product';
import { ProductItem } from './product.item';

export const ProductGrid = ({ products }: { products: TProduct[] }) => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
