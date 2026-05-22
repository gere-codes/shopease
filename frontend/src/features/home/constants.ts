import type { ISlide } from './types';
import banner1 from '../../assets/images/banner_1.jpg';
import banner2 from '../../assets/images/banner_2.jpg';
import banner3 from '../../assets/images/banner_3.jpg';

export const slides: ISlide[] = [
	{
		id: 1,
		title: 'summer sales',
		img: banner1,
		cta: 'shop now',
		badge: '50% off',
	},
	{
		id: 2,
		title: 'buy 1 get 1 free',
		img: banner2,
		cta: 'grab offer',
		badge: 'limited offer',
		textAlign: 'right',
	},
	{
		id: 3,
		title: 'new arrivals',
		img: banner3,
		cta: 'browse collection',
		badge: 'grab offer',
	},
];
