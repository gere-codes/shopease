import { Link } from 'react-router';
import { ProductGrid } from './product.grid';
import type { TProduct } from '@product';
import { Container } from '../container.common';
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
		<Container>
			<section className="flex gap-2 items-end  justify-center">
				<section className="mb-6 flex gap-2 items-end">
					<h4 className="text-4xl font-medium text-center ">{title}</h4>

					{actionLabel && (
						<Link to={path ?? '#'}>
							<small className="underline text-sm">{actionLabel}</small>
						</Link>
					)}
				</section>
			</section>

			<section className="w-full mt-4">
				<ProductGrid products={data} />
			</section>
		</Container>
	);
};
