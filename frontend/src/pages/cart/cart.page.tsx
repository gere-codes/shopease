import { cartAction, selectCartItems, selectTotalCost, type TCart } from '@/features/cart';
import { BASE_URL } from '@/shared/api';
import { Container } from '@/shared/components/common';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.hook';

import { Trash2, ArrowRight } from 'lucide-react';

export const CartPage = () => {
	const cart = useAppSelector(selectCartItems);
	const { shippingEst, subtotal, totalCost, taxEst } = useAppSelector(selectTotalCost);
	const dispatch = useAppDispatch();

	const updateQuantity = (cart: TCart, newQuantity: string) => {
		dispatch(cartAction.update({ id: cart.product.id, quantity: Number(newQuantity) }));
	};

	const removeItem = (cart: TCart) => {
		dispatch(cartAction.remove(cart.product.id));
	};

	return (
		<Container>
			<div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
				<>
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">Shopping Cart</h1>
					{cart.length === 0 ? (
						<div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
							<p className="text-gray-500 text-lg">Your cart is empty.</p>
							<button className="mt-4 text-indigo-600 font-medium hover:text-indigo-500">
								Continue Shopping &rarr;
							</button>
						</div>
					) : (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
							{/* Cart Items List */}
							<div className="lg:col-span-2 bg-white rounded-lg shadow-xs border border-gray-100 divide-y divide-gray-200">
								{cart.map((item) => (
									<div
										key={item.product.id}
										className="p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6"
									>
										{/* Product Image */}
										<div className="w-full sm:w-24 h-24 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200 flex items-center justify-center">
											<img
												src={`${BASE_URL}${item.product.images[0]}`}
												alt={item.product.name}
												className="w-full h-full object-cover"
											/>
										</div>
										{/* Product Details & Actions */}
										<div className="flex-1 flex flex-col justify-between">
											<div className="flex justify-between items-start">
												<div>
													<h3 className="text-base font-semibold text-gray-900">
														{item.product.name}
													</h3>
													{/* <p className="mt-1 text-sm text-gray-500">{item.product.features}</p> */}
												</div>
												<p className="text-base font-medium text-gray-900 sm:ml-4">
													${item.product.price.toFixed(2)}
												</p>
											</div>
											{/* Quantity Dropdown Select & Delete Button */}
											<div className="flex items-center justify-between mt-4">
												<div className="flex items-center gap-2">
													<label
														htmlFor={`quantity-${item.product.id}`}
														className="text-sm text-gray-500"
													>
														Qty:
													</label>
													<select
														id={`quantity-${item.product.id}`}
														value={item.quantity}
														onChange={(e) => updateQuantity(item, e.target.value)}
														className="rounded-md border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm font-medium text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
													>
														{/* Loop from 1 up to the product's max available quantity */}
														{Array.from(
															{ length: item.product.quantity },
															(_, i) => i + 1,
														).map((num) => (
															<option key={num} value={num}>
																{num}
															</option>
														))}
													</select>
												</div>
												<button
													onClick={() => removeItem(item)}
													className="text-gray-400 hover:text-red-500 flex items-center gap-1 text-sm font-medium transition-colors"
												>
													<Trash2 size={16} />
													<span className="hidden sm:inline">Remove</span>
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* Order Summary Sidebar */}
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
								<button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md shadow-sm transition-colors flex items-center justify-center gap-2 group">
									Checkout
									<ArrowRight
										size={18}
										className="transform group-hover:translate-x-1 transition-transform"
									/>
								</button>
								<div className="mt-4 text-center">
									<span className="text-xs text-gray-400">
										Complimentary shipping on orders over $150
									</span>
								</div>
							</div>
						</div>
					)}
				</>
			</div>
		</Container>
	);
};
