import { Link } from 'react-router';

export const CategoryItem = ({ title, image, path }: { title: string; image: string; path: string }) => {
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
