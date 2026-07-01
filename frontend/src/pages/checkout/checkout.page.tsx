import { selectCartItems, selectTotalCost } from '@/features/cart';
import { BASE_URL } from '@/shared/api';
import { Container } from '@/shared/components/common';
import { useAppSelector } from '@/shared/hooks/redux.hook';
import React, { useState } from 'react';

interface CheckoutFormData {
	email: string;
	firstName: string;
	lastName: string;
	address: string;
	city: string;
	postalCode: string;
	cardNumber: string;
	cardExpiry: string;
	cardCvc: string;
}

export const CheckoutPage: React.FC = () => {
	const [formData, setFormData] = useState<CheckoutFormData>({
		email: '',
		firstName: '',
		lastName: '',
		address: '',
		city: '',
		postalCode: '',
		cardNumber: '',
		cardExpiry: '',
		cardCvc: '',
	});

	const cart = useAppSelector(selectCartItems);
	const { shippingEst, totalCost, subtotal, taxEst } = useAppSelector(selectTotalCost);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Processing order for:', formData);
		alert('Order placed successfully!');
	};

	return (
		<Container>
			<div className="min-h-screen text-slate-800">
				<>
					<h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>
					<form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
						{/* LEFT: Shipping & Payment Information */}
						<div className="lg:col-span-7 space-y-8">
							{/* Contact Information */}
							<section className="bg-white p-6 rounded-xl border border-slate-200 shadown-xs">
								<h2 className="text-xl font-semibold mb-4">Contact Information</h2>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">
										Email Address
									</label>
									<input
										required
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
										placeholder="you@example.com"
									/>
								</div>
							</section>
							{/* Shipping Address */}
							<section className="bg-white p-6 rounded-xl border border-slate-200 shadown-xs">
								<h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="firstName"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											First Name
										</label>
										<input
											required
											type="text"
											id="firstName"
											name="firstName"
											value={formData.firstName}
											onChange={handleInputChange}
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div>
										<label
											htmlFor="lastName"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											Last Name
										</label>
										<input
											required
											type="text"
											id="lastName"
											name="lastName"
											value={formData.lastName}
											onChange={handleInputChange}
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="address"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											Address
										</label>
										<input
											required
											type="text"
											id="address"
											name="address"
											value={formData.address}
											onChange={handleInputChange}
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
											placeholder="123 Main St"
										/>
									</div>
									<div>
										<label htmlFor="city" className="block text-sm font-medium text-slate-600 mb-1">
											City
										</label>
										<input
											required
											type="text"
											id="city"
											name="city"
											value={formData.city}
											onChange={handleInputChange}
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div>
										<label
											htmlFor="postalCode"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											Postal / ZIP Code
										</label>
										<input
											required
											type="text"
											id="postalCode"
											name="postalCode"
											value={formData.postalCode}
											onChange={handleInputChange}
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
								</div>
							</section>
							{/* Payment Details */}
							<section className="bg-white p-6 rounded-xl border border-slate-200 shadown-xs">
								<h2 className="text-xl font-semibold mb-4">Payment Method</h2>
								<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
									<div className="sm:col-span-4">
										<label
											htmlFor="cardNumber"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											Card Number
										</label>
										<input
											required
											type="text"
											id="cardNumber"
											name="cardNumber"
											value={formData.cardNumber}
											onChange={handleInputChange}
											placeholder="•••• •••• •••• ••••"
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="cardExpiry"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											Expiration Date
										</label>
										<input
											required
											type="text"
											id="cardExpiry"
											name="cardExpiry"
											value={formData.cardExpiry}
											onChange={handleInputChange}
											placeholder="MM / YY"
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
									<div className="sm:col-span-2">
										<label
											htmlFor="cardCvc"
											className="block text-sm font-medium text-slate-600 mb-1"
										>
											CVC / CVV
										</label>
										<input
											required
											type="text"
											id="cardCvc"
											name="cardCvc"
											value={formData.cardCvc}
											onChange={handleInputChange}
											placeholder="•••"
											className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
										/>
									</div>
								</div>
							</section>
						</div>
						{/* RIGHT: Order Summary  */}
						<div className="lg:col-span-5">
							<div className="bg-white p-6 rounded-xl border border-slate-200 shadown-xs lg:sticky lg:top-16 space-y-6">
								<h2 className="text-xl font-semibold border-b border-slate-200 pb-4">Order Summary</h2>
								{/* Cart Items List */}
								<ul className="divide-y divide-slate-100 max-h-96 overflow-y-auto pr-2">
									{cart.map((item) => (
										<li key={item.product.id} className="flex py-4 first:pt-0 last:pb-0">
											<img
												src={`${BASE_URL}${item.product.images[0]}`}
												alt={item.product.name}
												className="h-16 w-16 object-cover rounded-lg bg-slate-100 border border-slate-200"
											/>
											<div className="ml-4 flex-1 flex flex-col justify-between">
												<div>
													<h3 className="text-sm font-medium text-slate-900 line-clamp-1">
														{item.product.name}
													</h3>
													{/* <p className="text-xs text-slate-500 mt-0.5">{item.variant}</p> */}
												</div>
												<div className="flex justify-between items-end text-sm">
													<p className="text-slate-500">Qty {item.quantity}</p>
													<p className="font-medium text-slate-900">
														${(item.product.price * item.quantity).toFixed(2)}
													</p>
												</div>
											</div>
										</li>
									))}
								</ul>
								{/* Price Breakdown */}
								<div className="border-t border-slate-200 pt-4 space-y-3 text-sm ">
									<div className="flex justify-between text-slate-600">
										<span>Subtotal</span>
										<span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-slate-600">
										<span>Shipping</span>
										<span className="font-medium text-slate-900">${shippingEst.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-slate-600">
										<span>Tax</span>
										<span className="font-medium text-slate-900">${taxEst.toFixed(2)}</span>
									</div>
									<div className="flex justify-between text-base font-semibold border-t border-slate-200 pt-3 text-slate-900">
										<span>Total</span>
										<span>${totalCost.toFixed(2)}</span>
									</div>
								</div>
								{/* Submit Button */}
								<button
									type="submit"
									className="w-full bg-gray-800  text-white font-medium py-2 px-4 rounded cursor-pointer"
								>
									Place Order
								</button>
							</div>
						</div>
					</form>
				</>
			</div>
		</Container>
	);
};
