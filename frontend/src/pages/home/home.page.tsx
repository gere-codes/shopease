import { ProductArraivals, SlideList } from '@home';

export const HomePage = () => {
	return (
		<section>
			{/* Slides */}
			<SlideList />

			{/* New Arrivales */}
			<ProductArraivals />
		</section>
	);
};
