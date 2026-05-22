import { Link } from 'react-router';

export const ProductItem = ({ product }) => {
	return (
		<li key={product.id}>
			<Link to={`/product/${product.id}`} className="block group relative overflow-hidden ">
				<div className="relative h-64 md:h-72 lg:h-96">
					<img
						src={product?.image[0]}
						alt={product.name}
						loading="lazy"
						className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					/>
				</div>

				<div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1">
					<h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
					<p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
				</div>
			</Link>
		</li>
	);
};
