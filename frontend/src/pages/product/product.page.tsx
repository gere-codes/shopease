import { memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, ProductDetails, ProductImages } from '@common';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.hook';
import { selectProductItemData } from '@/shared/store/product/product.selector';
import { productThunks } from '@/shared/store/product/product.thunks';
import { BASE_URL } from '@/shared/api';
import { cartAction, type TCart } from '@/features/cart';
import type { TProduct } from '@/shared/schema';

export const ProductPage = memo(() => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const product = useAppSelector(selectProductItemData);

	useEffect(() => {
		dispatch(productThunks.getById(id as string));
	}, [id, dispatch]);

	if (!product) {
		return <h3>loading...</h3>;
	}

	const handleAddToCart = (item: TProduct) => {
		const newCart: TCart = {
			product: item,
			quantity: 1,
		};
		dispatch(cartAction.add(newCart));
	};
	return (
		<Container>
			{/* Main layout container */}
			<section className="flex flex-col w-full gap-16 md:flex-row items-start py-6 mx-auto">
				{/* Left: Product images*/}
				<ProductImages product={product} baseUrl={BASE_URL} />
				{/* Right: product details */}
				<ProductDetails product={product} add={handleAddToCart} />
			</section>
		</Container>
	);
});
