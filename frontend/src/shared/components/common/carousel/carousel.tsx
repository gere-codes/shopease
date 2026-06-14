import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { Pagination } from 'swiper/modules';
import type { CarouselItemProps } from './carousel.section';

interface Props<T extends { id: string | number; name: string; image: string }> {
	items: T[];
	baseUrl: string;
	route: (item: T) => string;
	component: React.ComponentType<CarouselItemProps<T>>;
}

export const Carousel = <T extends { id: string | number; name: string; image: string }>({
	items,
	component: Component,
	...props
}: Props<T>) => {
	return (
		<Swiper
			style={{ paddingBottom: 40 }}
			navigation={false}
			pagination={{
				clickable: true,
				renderBullet: (index, className) => `<span class="${className}" style="margin: 0 6px;"></span>`,
			}}
			modules={[Pagination]}
			breakpoints={{
				0: { slidesPerView: 2, spaceBetween: 10 },
				640: { slidesPerView: 3, spaceBetween: 15 },
				1024: { slidesPerView: 4, spaceBetween: 20 },
			}}
		>
			{items.map((item) => (
				<SwiperSlide key={item.id}>
					<Component item={item} {...props} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
