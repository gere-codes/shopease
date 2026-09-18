import { useAppSelector } from '@/shared/hooks/redux.hook';
import { selectTotalCost } from '@/features/cart';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export const OrderSummary = () => {
	const { shippingEst, subtotal, totalCost, taxEst } = useAppSelector(selectTotalCost);
	return (
		<div className="bg-white rounded-lg shadow-xs border border-gray-100 p-6 lg:sticky lg:top-6">
			<h2 className="text-lg font-semibold text-gray-900 mb-6">Order Summary</h2>
			<div className="space-y-4">
				<div className="flex justify-between text-sm text-gray-600">
					<span>Subtotal</span>
					<span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
				</div>
				<div className="flex justify-between text-sm text-gray-600">
					<span>Shipping </span>
					<span className="font-medium text-gray-900">
						{shippingEst === 0 ? 'Free' : `$${shippingEst.toFixed(2)}`}
					</span>
				</div>
				<div className="flex justify-between text-sm text-gray-600">
					<span>Tax </span>
					<span className="font-medium text-gray-900">${taxEst.toFixed(2)}</span>
				</div>
				<div className="border-t border-gray-200 pt-4 flex justify-between text-base font-semibold text-gray-900">
					<span>Order total</span>
					<span>${totalCost.toFixed(2)}</span>
				</div>
			</div>
			<Link
				to={'/checkout'}
				className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 group"
			>
				Checkout
				<ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
			</Link>
			<div className="mt-4 text-center">
				<span className="text-xs text-gray-400">FREE shipping for orders over $150</span>
			</div>
		</div>
	);
};
