import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { Pagination } from 'swiper/modules';

interface Props<T extends object> {
	items: T[];
	component: React.ComponentType<T>;
}

export const Carousel = <T extends object>({ items, component: Component }: Props<T>) => {
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
			{items.map((item, i) => (
				<SwiperSlide key={i}>
					<Component {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
