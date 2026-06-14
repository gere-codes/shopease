import { ProductArraivals, HeroSlides } from '@home';
import { CarouselSection, PromoBanner } from '@common';
import { categories } from '@/shared/components/common/category/data';
import { BASE_URL } from '@/shared/api';
import type { TCategory } from '@/shared/schema/category.schema';

export const HomePage = () => {
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
