import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '../constants';
import { SlideItem } from './slide.item';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SlideList = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<>
			<Swiper
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				loop
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				speed={500}
				slidesPerView={1}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				className="h-[90vh]"
			>
				{slides.map((slide, index) => (
					<SwiperSlide>
						<SlideItem {...slide} isActive={activeIndex === index} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
