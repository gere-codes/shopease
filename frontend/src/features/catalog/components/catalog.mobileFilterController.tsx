import { FilterControls } from './catalog.filterControls';
import { FiSliders, FiX } from 'react-icons/fi';
import type { TProductQuery } from '@/shared/schema';
interface Props {
	clearAllFilters: () => void;
	onCategories: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>) => void;
	localFilters: TProductQuery;
	isMobileFilterOpen: boolean;
	handleMobileFilterOpen: (isOpen: boolean) => void;
}
export const MobileFilter = ({
	clearAllFilters,
	onCategories,
	localFilters,
	isMobileFilterOpen,
	handleMobileFilterOpen,
}: Props) => {
	return (
		<>
			{isMobileFilterOpen && (
				<div className="fixed inset-0 z-50 md:hidden flex justify-end">
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/40 transition-opacity"
						onClick={() => handleMobileFilterOpen(false)}
					/>

					{/* Drawer Content */}
					<div className="relative w-full max-w-xs bg-white h-full p-6 shadow-xl flex flex-col overflow-y-auto animate-slide-in">
						<div className="flex items-center justify-between border-b pb-4 mb-6">
							<h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
								<FiSliders /> Filters
							</h2>
							<button onClick={() => handleMobileFilterOpen(false)} className="text-gray-500 p-1">
								<FiX size={24} />
							</button>
						</div>
						<FilterControls
							filters={localFilters}
							handleChanges={onCategories}
							clearAllFilters={clearAllFilters}
						/>
					</div>
				</div>
			)}
		</>
	);
};
