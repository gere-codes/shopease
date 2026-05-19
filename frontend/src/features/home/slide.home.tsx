import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.jpg';
import banner3 from '../../assets/images/banner_3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const SlideHome = () => {
	return (
		<>
			<Swiper
				navigation={false}
				modules={[Autoplay, Pagination, Navigation]}
				loop
				autoplay={{
					delay: 3500,
					disableOnInteraction: false,
				}}
				slidesPerView={1}
				onSlideChange={() => {}}
				className="h-[80vh]"
				style={{}}
			>
				<SwiperSlide>
					<section className="relative h-full">
						<img
							className=" h-full w-full object-cover absolute top-0 left-0 bottom-0 right-0 -z-10 "
							src={banner1}
							alt=""
						/>
						<h2 className="z-10 font-heading "></h2>
					</section>
				</SwiperSlide>
				<SwiperSlide>
					<img className="h-full w-full object-cover" src={banner2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img className="h-full w-full object-cover" src={banner3} alt="" />
				</SwiperSlide>
			</Swiper>
		</>
	);
};
