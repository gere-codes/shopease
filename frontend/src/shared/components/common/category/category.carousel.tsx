import { Link } from 'react-router';
import { Carousel } from '../carousel/carousel';
import { categories } from './data';
import { Container } from '../container.common';

export const CategoryCarousel = () => {
	return (
		<Container>
			<h2 className="text-4xl mb-12 text-center capitalize font-medium">Shop by Categories</h2>
			<Carousel component={CategoryItem} items={categories} />
		</Container>
	);
};

const CategoryItem = ({ title, image, path }: { title: string; image: string; path: string }) => {
	return (
		<li className="">
			<Link to={path} className="overflow-hidden">
				<div className="group block relative rounded-full overflow-hidden">
					<img
						className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
						src={image}
						alt={title}
						loading="lazy"
					/>
				</div>
			</Link>

			<span className="capitalize text-center w-full mt-2 font-medium flex justify-center">
				<Link to={path} className="capitalize text-center w-fit block mt-2 font-medium lg:text-xl">
					{title}
				</Link>
			</span>
		</li>
	);
};
