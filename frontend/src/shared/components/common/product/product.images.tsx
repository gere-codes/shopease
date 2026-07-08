import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Thumbs, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import type { TProduct } from '@/shared/schema';

export const ProductImages = ({ product, baseUrl }: { product: NonNullable<TProduct>; baseUrl: string }) => {
	return (
		<section className="w-full md:w-1/2 min-w-0 overflow-hidden">
			{/* Main image */}
			<Swiper
				spaceBetween={10}
				navigation={false}
				modules={[FreeMode, Navigation, Thumbs]}
				className="w-full rounded-lg bg-gray-100 aspect-square"
			>
				{product?.images?.map((img, index) => (
					<SwiperSlide key={`main-${index}`} className="flex items-center justify-center">
						<img
							src={`${baseUrl}${img}`}
							alt="Product display"
							className="w-full h-full object-cover aspect-square"
						/>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Thumbnails */}
			<Swiper
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mt-3 thumbnail-swiper"
			>
				{product?.images?.map((img, index) => (
					<SwiperSlide key={`thumb-${index}`} className="cursor-pointer">
						<div className="aspect-square bg-gray-100 rounded border border-transparent overflow-hidden [[data-swiper-slide-index]].swiper-slide-thumb-active:&:border-black">
							<img src={`${baseUrl}${img}`} alt="Product thumb" className="w-full h-full object-cover" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
