import { FaMinus, FaPlus } from 'react-icons/fa';

export const Quantity = ({
	decrement,
	increment,
	quantity,
}: {
	decrement: () => void;
	increment: () => void;
	quantity: number;
}) => {
	return (
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
	);
};
