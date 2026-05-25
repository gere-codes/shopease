import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from '@data';
import { Container, ProductDetails, ProductImages } from '@common';
import type { TProduct } from '@/features/product';

export const ProductPage = memo(() => {
	const { id } = useParams();
	const [product, setProduct] = useState({} as TProduct);

	useEffect(() => {
		const item = products.find((p) => p.id === id);
		if (item) {
			setProduct(item);
		}
	}, [id]);

	return (
		<Container>
			{/* Main layout container */}
			<section className="flex flex-col gap-6 md:flex-row items-start py-6">
				{/* Left: Product images*/}
				<ProductImages product={product} />
				{/* Right: product details */}
				<ProductDetails product={product} />
			</section>
		</Container>
	);
});
