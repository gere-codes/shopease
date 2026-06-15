import type { TProduct } from '@/shared/schema';
import { Link } from 'react-router';

export const ProductItem = ({ product, baseUrl }: { product: TProduct; baseUrl: string }) => {
	return (
		<li>
			<Link to={`/product/${product.id}`} className="overflow-hidden ">
				<div className="block group relative  overflow-hidden">
					<img
						src={`${baseUrl}${product?.images[0]}`}
						alt={product.name}
						loading="lazy"
						className="h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
					/>
				</div>
			</Link>
			<div className="bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-1">
				<Link to={`/product/${product.id}`}>
					<h3 className="font-semibold text-gray-800 truncate">{product.name}</h3>
				</Link>
				<p className="text-gray-600 font-medium">${product.price.toFixed(2)}</p>
			</div>
		</li>
	);
};
