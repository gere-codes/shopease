import { memo, useEffect } from 'react';
import { useParams } from 'react-router';
import { Container, ProductDetails, ProductImages } from '@common';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.hook';
import { selectProductItemData } from '@/shared/store/product/product.selector';
import { productThunks } from '@/shared/store/product/product.thunks';
import { BASE_URL } from '@/shared/api';

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
	return (
		<Container>
			{/* Main layout container */}
			<section className="flex flex-col gap-6 md:flex-row items-start py-6">
				{/* Left: Product images*/}
				<ProductImages product={product} baseUrl={BASE_URL} />
				{/* Right: product details */}
				<ProductDetails product={product} />
			</section>
		</Container>
	);
});
