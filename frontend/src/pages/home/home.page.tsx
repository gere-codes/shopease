import { ProductArraivals, HeroSlides } from '@home';
import { CarouselSection, ProductSection, PromoBanner } from '@common';
import { BASE_URL } from '@/shared/api';
import { categoryQuerySchema, type TCategory } from '@/shared/schema/category.schema';
import { categoryThunks } from '@/shared/store/category/category.thunks';
import { selectCategoriesItems, selectCategoriesStatus } from '@/shared/store';
import { useStaticFilteredFetch } from '@/shared/hooks';
import { productThunks } from '@/shared/store/product/product.thunks';
import { selectProductItems, selectProductStatus } from '@/shared/store/product/product.selector';
import { productQuerySchema } from '@/shared/schema';

export const HomePage = () => {
	// Fetch's categories
	const { data: categories } = useStaticFilteredFetch({
		staticParams: { isPaginated: false },
		schema: categoryQuerySchema,
		selectData: selectCategoriesItems,
		selectStatus: selectCategoriesStatus,
		thunkAction: categoryThunks.getCollection,
	});
	// Fetch's men
	const { data: men } = useStaticFilteredFetch({
		staticParams: { isPaginated: false },
		schema: productQuerySchema,
		selectData: selectProductItems,
		selectStatus: selectProductStatus,
		thunkAction: productThunks.getCollection,
	});
	// Fetch's women
	const { data: women } = useStaticFilteredFetch({
		staticParams: { isPaginated: false },
		schema: productQuerySchema,
		selectData: selectProductItems,
		selectStatus: selectProductStatus,
		thunkAction: productThunks.getCollection,
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
