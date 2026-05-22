import { Link } from 'react-router';
import { ProductGrid } from './product.grid';
import type { TProduct } from '@product';
interface Props {
	title: string;
	actionLabel?: string;
	path?: string;
	products: TProduct;
}
export const ProductSection = ({ title = 'Products', actionLabel, products, path }: Props) => {
	return (
		<section className="px-6 py-10 w-full max-w-7xl mx-auto">
			<section className="flex gap-2 items-end">
				<h2 className="text-5xl font-heading">{title}</h2>

				{actionLabel && (
					<Link to={path ?? '#'}>
						<small className="font-heading underline">{actionLabel}</small>
					</Link>
				)}
			</section>

			<section className="w-full mt-4">
				<ProductGrid products={products} />
			</section>
		</section>
	);
};
