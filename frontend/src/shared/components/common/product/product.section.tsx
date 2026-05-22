import { Link } from 'react-router';
import { ProductGrid } from './product.grid';
import type { TProduct } from '@product';
interface Props {
	title: string;
	actionLabel?: string;
	path?: string;
	products: TProduct[];
	limit?: number;
}
export const ProductSection = ({ title = 'Products', actionLabel, products, path, limit }: Props) => {
	const safeLimit = typeof limit === 'number' && limit > 0 ? Math.floor(limit) : undefined;
	const data = typeof safeLimit === 'number' ? products.slice(0, safeLimit) : products;
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
				<ProductGrid products={data} />
			</section>
		</section>
	);
};
