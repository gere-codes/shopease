import { useState } from 'react';
import type { TProduct } from '@product';
import { FaChevronDown, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';

export const ProductDetails = ({ product }: { product: TProduct }) => {
	const [quantity, setQuantity] = useState<number>(1);

	const [isDescOpen, setIsDescOpen] = useState<boolean>(true);
	const [isShippingOpen, setIsShippingOpen] = useState<boolean>(false);

	const increment = () => setQuantity((prev) => (prev < product.quantity ? prev + 1 : product.quantity));
	const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

	const handleAddToCart = () => {
		console.log(`Adding ${quantity} of ${product?.name} to cart.`);
	};

	return (
		<section className="w-full md:w-1/2 flex flex-col gap-6 p-2">
			{/* Header: Title & Price */}
			<header className="border-b border-gray-100 pb-4">
				<h1 className="text-3xl font-bold text-gray-900 tracking-tight">{product?.name}</h1>
				<p className="text-2xl font-semibold text-gray-800 mt-2">${product?.price?.toFixed(2)}</p>
			</header>

			{/* Actions: Quantity Selector & Add to Cart */}
			<section className="flex gap-4 items-center border-b border-gray-100 pb-6">
				{/* Quantity Input Field */}
				<div className="flex items-center rounded-sm h-12  overflow-hidden bg-white ">
					<button
						onClick={decrement}
						className="px-4 h-full text-gray-600 bg-gray-100/70 active:bg-gray-100 transition-colors"
						aria-label="Decrease quantity"
					>
						<FaMinus size={16} />
					</button>
					<input
						type="number"
						value={quantity}
						readOnly
						className="w-12 text-center font-medium text-gray-900 focus:outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					/>
					<button
						onClick={increment}
						className="px-4 h-full text-gray-600 bg-gray-100/70 active:bg-gray-100 transition-colors"
						aria-label="Increase quantity"
					>
						<FaPlus size={16} />
					</button>
				</div>

				{/* Add to Cart Button */}
				<button
					onClick={handleAddToCart}
					className="flex-1 w-full h-12 bg-black text-white font-medium rounded-sm flex items-center justify-center gap-2 hover:bg-gray-900 active:bg-black transition-all duration-150 "
				>
					<FaShoppingBag size={18} />
					<span>Add to Cart</span>
				</button>
			</section>

			{/* Expandable Accordions */}
			<section className="flex flex-col border-t border-gray-100">
				{/* Description  */}
				<div className="border-b border-gray-100 py-3">
					<button
						onClick={() => setIsDescOpen(!isDescOpen)}
						className="flex justify-between items-center w-full text-left font-medium text-gray-900 group"
					>
						<span className="text-base">Description</span>
						<FaChevronDown
							size={18}
							className={`text-gray-500 transition-transform duration-200 group-hover:text-gray-800 ${
								isDescOpen ? 'rotate-180' : ''
							}`}
						/>
					</button>
					<div
						className={`grid transition-all duration-200 ease-in-out ${
							isDescOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
						}`}
					>
						<div className="overflow-hidden">
							<p className="text-gray-600 text-sm leading-relaxed pb-2">{product?.description}</p>
						</div>
					</div>
				</div>

				{/* Shipping */}
				<div className="border-b border-gray-100 py-3">
					<button
						onClick={() => setIsShippingOpen(!isShippingOpen)}
						className="flex justify-between items-center w-full text-left font-medium text-gray-900 group"
					>
						<span className="text-base">Shipping & Returns</span>
						<FaChevronDown
							size={18}
							className={`text-gray-500 transition-transform duration-200 group-hover:text-gray-800 ${
								isShippingOpen ? 'rotate-180' : ''
							}`}
						/>
					</button>
					<div
						className={`grid transition-all duration-200 ease-in-out ${
							isShippingOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
						}`}
					>
						<div className="overflow-hidden">
							<p className="text-gray-600 text-sm leading-relaxed pb-2">
								Free standard shipping on all domestic orders over $100. Enjoy 30-day hassle-free
								returns. Shipping and returning of any order are free for all premium members.
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};
