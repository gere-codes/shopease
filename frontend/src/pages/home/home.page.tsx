import { ProductArraivals, HeroSlides } from '@home';
import { CarouselSection, PromoBanner } from '@common';
import { BASE_URL } from '@/shared/api';
import { categoryQuerySchema, type TCategory } from '@/shared/schema/category.schema';
import { categoryThunks } from '@/shared/store/category/category.thunks';
import { selectCategoriesItems, selectCategoriesStatus } from '@/shared/store';
import { useStaticFilteredFetch } from '@/shared/hooks';

export const HomePage = () => {
	const { data: categories } = useStaticFilteredFetch({
		staticParams: { isPaginated: false },
		schema: categoryQuerySchema,
		selectData: selectCategoriesItems,
		selectStatus: selectCategoriesStatus,
		thunkAction: categoryThunks.getCollection,
	});

	return (
		<section>
			{/* Slides */}
			<HeroSlides />

			{/* Categories */}
			<CarouselSection
				items={categories}
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
