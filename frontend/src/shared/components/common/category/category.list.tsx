import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../../../assets/images/banner_3.jpg';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { CategoryItem } from './category.item';

export const categories = [
	{
		title: 'trending',
		image: image,
		path: '/trending',
	},
	{
		title: 'men',
		image: image,
		path: '/men',
	},
	{
		title: 'women',
		image: image,
		path: '/women',
	},
	{
		title: 'kids',

		image: image,
		path: '/kids',
	},
];

export const CategoriesList = () => {
	return (
		<section className="max-w-7xl mx-auto my-28 px-6">
			<h2 className="text-4xl mb-12 text-center capitalize font-medium">Shop by Categories</h2>
			<Swiper
				style={{
					paddingBottom: 40,
				}}
				className=""
				navigation={false}
				pagination={{
					clickable: true,

					renderBullet: (index, className) => {
						return `<span class="${className}" style="margin: 0 6px;"></span>`;
					},
				}}
				modules={[Pagination]}
				breakpoints={{
					0: {
						slidesPerView: 2,
						spaceBetween: 10,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 15,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 20,
					},
				}}
			>
				{categories?.map((category, index) => (
					<SwiperSlide key={index}>
						<CategoryItem {...category} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
