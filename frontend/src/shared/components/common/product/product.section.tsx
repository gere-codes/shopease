import { Link } from 'react-router';
import { ProductGrid } from './product.grid';
import { Container } from '../container.common';
import type { TProduct } from '@/shared/schema';
interface Props {
	title: string;
	actionLabel?: string;
	catalog: string;

	baseUrl: string;
	products: TProduct[];
}
export const ProductSection = ({ title = 'Products', actionLabel, products, catalog, baseUrl }: Props) => {
	return (
		<Container>
			<section className="flex gap-2 items-end  justify-center">
				<section className="mb-6 flex gap-2 items-end">
					<h4 className="text-4xl font-medium text-center ">{title}</h4>

					{actionLabel && (
						<Link to={catalog}>
							<small className="underline text-sm">{actionLabel}</small>
						</Link>
					)}
				</section>
			</section>

			<section className="w-full mt-4">
				<ProductGrid products={products} baseUrl={baseUrl} />
			</section>
		</Container>
	);
};
