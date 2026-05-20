import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from '../constants';
import { SlideItem } from './slide.item';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SlideList = () => {
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
				onSlideChange={() => {}}
				className="h-[90vh]"
			>
				{slides.map((slide) => (
					<SwiperSlide>
						<SlideItem
							title={slide.title}
							img={slide.img}
							cta={slide.cta}
							textAlign={slide.textAlign}
							badge={slide.badge}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
