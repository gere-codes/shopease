import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SlideContent } from './slide.content';
import type { ISlide } from './slide.type';

export const SlideSection = ({ data }: { data: ISlide[] }) => {
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
				style={{
					height: 'calc(100vh - 4.5rem)',
				}}
			>
				{data.map((slide, index) => (
					<SwiperSlide>
						<SlideContent {...slide} isActive={activeIndex === index} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
