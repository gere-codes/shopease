import { cartAction, CartEmpty, CartList, selectCartItems, type TCart } from '@/features/cart';
import { OrderSummary } from '@/features/cart/components/cart.order';
import { BASE_URL } from '@/shared/api';
import { Container } from '@/shared/components/common';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux.hook';

export const CartPage = () => {
	const cart = useAppSelector(selectCartItems);
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
					{/* Empty Cart */}
					{cart.length === 0 ? (
						<CartEmpty />
					) : (
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
							{/* Cart Items List */}
							<CartList
								baseUrl={BASE_URL}
								cart={cart}
								onRemove={removeItem}
								updateQuantity={updateQuantity}
							/>

							{/* Order Summary Sidebar */}
							<OrderSummary />
						</div>
					)}
				</>
			</div>
		</Container>
	);
};
