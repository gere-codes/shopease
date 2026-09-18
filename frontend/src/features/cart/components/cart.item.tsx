import type { TProduct } from '@/shared/schema';
import { Trash2 } from 'lucide-react';
import type { TCart } from '../cart.schema';

interface Props {
	baseUrl: string;
	item: TCart;
	updateQuantity: (item: TCart, qty: string) => void;
	onRemove: (item: { product: TProduct; quantity: number }) => void;
}
export const CartItem = ({ item, baseUrl, updateQuantity, onRemove }: Props) => {
	return (
		<li key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
			{/* Product Image */}
			<div className="w-full sm:w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
				<img
					src={`${baseUrl}${item.product.images[0]}`}
					alt={item.product.name}
					className="w-full h-full object-cover"
				/>
			</div>
			{/* Product Details & Actions */}
			<div className="flex-1 flex flex-col justify-between">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="text-base font-semibold text-gray-900">{item.product.name}</h3>
						{/* <p className="mt-1 text-sm text-gray-500">{item.product.features}</p> */}
					</div>
					<p className="text-base font-medium text-gray-900 sm:ml-4">${item.product.price.toFixed(2)}</p>
				</div>
				{/* Quantity Dropdown Select & Delete Button */}
				<div className="flex items-center justify-between mt-4">
					<div className="flex items-center gap-2">
						<label htmlFor={`quantity-${item.product.id}`} className="text-sm text-gray-500">
							Qty:
						</label>
						<select
							id={`quantity-${item.product.id}`}
							value={item.quantity}
							onChange={(e) => updateQuantity(item, e.target.value)}
							className="rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-gray-900 "
						>
							{Array.from({ length: item.product.quantity }, (_, i) => i + 1).map((num) => (
								<option key={num} value={num}>
									{num}
								</option>
							))}
						</select>
					</div>
					<button
						onClick={() => onRemove(item)}
						className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm font-medium transition-colors"
					>
						<Trash2 size={16} />
						<span className="hidden sm:inline">Remove</span>
					</button>
				</div>
			</div>
		</li>
	);
};
