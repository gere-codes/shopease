import { ProductArraivals, SlideList } from '@home';
import { PromoBanner } from '@common';

export const HomePage = () => {
	return (
		<section>
			{/* Slides */}
			<SlideList />

			{/* New Arrivales */}
			<ProductArraivals />

			{/* Banner */}
			<PromoBanner title="50% OFF" badge="ONLY THIS WEEK" cta="/arrivals" />
		</section>
	);
};
