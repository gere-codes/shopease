import { Link } from 'react-router';

export const CartEmpty = () => {
	return (
		<div className="text-center py-16 bg-white rounded-lg  border border-gray-200">
			<p className="text-gray-500 text-lg">Your cart is empty.</p>
			<Link to={'/catalog'} className="mt-4 text-gray-900 font-medium hover:text-gray-500 cursor-pointer">
				Continue Shopping &rarr;
			</Link>
		</div>
	);
};
