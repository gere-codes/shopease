import type { TProduct } from '@/features/product';
import image from '../assets/images/banner_2.jpg';
import image2 from '../assets/images/banner_3.jpg';

export const products: TProduct[] = [
	{
		id: '1',
		name: 'Product 1',
		price: 100,
		quantity: 2,
		images: [image, image2],
		category: 'men',
		description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
	},
	{
		id: '2',
		name: 'Product 2 Lorem',
		price: 50,
		quantity: 4,
		images: [image2],
		category: 'men',
		description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
	},
	{
		id: '3',
		name: 'Product 3',
		price: 100,
		quantity: 3,
		images: [image],
		category: 'women',
		description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
	},
	{
		id: '4',
		name: 'Product 4',
		quantity: 11,
		price: 90,
		images: [image],
		category: 'kids',
		description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		createdAt: new Date().toDateString(),
		updatedAt: new Date().toDateString(),
	},
];
