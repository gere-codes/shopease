import { ProductArraivals, HeroSlides } from '@home';
import { CarouselSection, PromoBanner } from '@common';
import { BASE_URL } from '@/shared/api';
import { categoryQuerySchema, type TCategory } from '@/shared/schema/category.schema';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.hook';
import { useEffect } from 'react';
import { categoryThunks } from '@/shared/store/category/category.thunks';
import { selectCategories } from '@/shared/store';

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectCategories);
	console.log(data);

	useEffect(() => {
		const parsed = categoryQuerySchema.parse({ isPaginated: false });
		console.log(parsed);

		dispatch(categoryThunks.getCollection(parsed));
	}, []);

	return (
		<section>
			{/* Slides */}
			<HeroSlides />

			{/* Categories */}
			<CarouselSection
				items={data}
				title="Shop by Categories"
				baseUrl={BASE_URL}
				route={(item: TCategory) => `/catalog?category=${item.slug}`}
			/>

			{/* New Arrivales */}
			<ProductArraivals />

			{/* Banner */}
			<PromoBanner title="50% OFF" badge="ONLY THIS WEEK" cta="/arrivals" />

			{/* New Arrivales */}
			<ProductArraivals />
		</section>
	);
};
