import { ProductArraivals, SlideList } from '@home';
import { CategoriesList, PromoBanner } from '@common';

export const HomePage = () => {
	return (
		<section>
			{/* Slides */}
			<SlideList />

			{/* Categories */}
			<CategoriesList />

			{/* New Arrivales */}
			<ProductArraivals />

			{/* Banner */}
			<PromoBanner title="50% OFF" badge="ONLY THIS WEEK" cta="/arrivals" />
		</section>
	);
};
