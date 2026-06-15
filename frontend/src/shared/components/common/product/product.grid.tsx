import type { TProduct } from '@/shared/schema';
import { ProductItem } from './product.item';

export const ProductGrid = ({ products, baseUrl }: { products: TProduct[]; baseUrl: string }) => {
	return (
		<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			{products.map((product) => (
				<ProductItem key={product.id} product={product} baseUrl={baseUrl} />
			))}
		</ul>
	);
};
