import { CarouselSection, ProductSection, PromoBanner, SlideSection } from '@common';
import { BASE_URL } from '@/shared/api';
import { categoryQuerySchema, type TCategory } from '@/shared/schema/category.schema';
import { categoryThunks } from '@/shared/store/category/category.thunks';
import { selectCategorySlice } from '@/shared/store';
import { useStaticFilteredFetch } from '@/shared/hooks';
import { productThunks } from '@/shared/store/product/product.thunks';
import { selectProductSlice } from '@/shared/store/product/product.selector';
import { productQuerySchema } from '@/shared/schema';
import { slides } from '@/features/home/constants';

export const HomePage = () => {
	// Fetch's categories
	const { data: categories } = useStaticFilteredFetch({
		staticParams: { isPaginated: false },
		schema: categoryQuerySchema,
		thunkAction: categoryThunks.getCollection,
		selectSlice: selectCategorySlice,
		key: 'home-all',
	});
	// Fetch's men
	const { data: men } = useStaticFilteredFetch({
		staticParams: { isPaginated: false, limit: 4, category: 'men' },
		schema: productQuerySchema,
		selectSlice: selectProductSlice,
		thunkAction: productThunks.getCollection,
		key: 'home-men',
	});
	// Fetch's women
	const { data: women } = useStaticFilteredFetch({
		staticParams: { isPaginated: false, limit: 4, category: 'women' },
		schema: productQuerySchema,
		thunkAction: productThunks.getCollection,
		selectSlice: selectProductSlice,
		key: 'home-women',
	});

	return (
		<section>
			{/* Hero Slides */}
			<SlideSection data={slides} />

			{/* Categories */}
			<CarouselSection
				items={categories}
				title="Shop by Categories"
				baseUrl={BASE_URL}
				route={(item: TCategory) => `/catalog?category=${item.slug}`}
			/>

			{/* Men */}
			<ProductSection
				products={men}
				baseUrl={BASE_URL}
				catalog={`/catalog?category=men`}
				title="Men"
				actionLabel="View All"
			/>

			{/* Banner */}
			<PromoBanner title="50% OFF" badge="ONLY THIS WEEK" cta="/arrivals" />

			{/* Women */}
			<ProductSection
				products={women}
				baseUrl={BASE_URL}
				catalog={`/catalog?category=women`}
				title="Women"
				actionLabel="View All"
			/>
		</section>
	);
};
