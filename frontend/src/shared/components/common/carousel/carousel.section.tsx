import { Link } from 'react-router';
import { Container } from '../container.common';
import { Carousel } from './carousel';

interface Props<T extends { id: string | number; name: string; image: string }> {
	items: T[];
	title?: string;
	baseUrl: string;
	route: (item: T) => string;
}

export const CarouselSection = <T extends { id: string | number; name: string; image: string }>({
	title,
	...props
}: Props<T>) => {
	return (
		<Container>
			<h2 className="text-4xl mb-12 text-center capitalize font-medium">{title}</h2>
			<Carousel component={CarouselItem} {...props} />
		</Container>
	);
};

export interface CarouselItemProps<T extends { name: string; image: string }> {
	item: T;
	baseUrl: string;
	route: (item: T) => string;
}
const CarouselItem = <T extends { id: string | number; name: string; image: string }>({
	item,
	baseUrl,
	route,
}: CarouselItemProps<T>) => {
	return (
		<div className="">
			<Link to={route(item)} className="overflow-hidden">
				<div className="group block relative rounded-full overflow-hidden">
					<img
						className="object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
						src={`${baseUrl}${item?.image}`}
						alt={item.name}
						loading="lazy"
					/>
				</div>
			</Link>
			<span className="capitalize text-center w-full mt-2 font-medium flex justify-center">
				<Link to={route(item)} className="capitalize text-center w-fit block mt-2 font-medium lg:text-xl">
					{item.name}
				</Link>
			</span>
		</div>
	);
};
