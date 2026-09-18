import type { TCart } from '../cart.schema';
import { CartItem } from './cart.item';

interface Props {
	cart: TCart[];
	baseUrl: string;
	onRemove: (item: TCart) => void;
	updateQuantity: (item: TCart, qty: string) => void;
}

export const CartList = ({ cart, baseUrl, onRemove, updateQuantity }: Props) => {
	return (
		<ul className="lg:col-span-2 bg-white rounded-lg shadow-xs border border-gray-100 divide-y divide-gray-200">
			{cart.map((item) => (
				<CartItem baseUrl={baseUrl} item={item} onRemove={onRemove} updateQuantity={updateQuantity} />
			))}
		</ul>
	);
};
