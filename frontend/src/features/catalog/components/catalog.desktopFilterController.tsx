import type { TProductQuery } from '@/shared/schema';
import { FilterControls } from './catalog.filterControls';
interface Props {
	localFilters: TProductQuery;
	onFilter: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>) => void;
	clearAllFilters: () => void;
}
export const DesktopFilter = ({ localFilters, onFilter, clearAllFilters }: Props) => {
	return (
		<aside className="hidden md:block w-64 shrink-0 border-r border-gray-100 pr-8">
			<FilterControls filters={localFilters} handleChanges={onFilter} clearAllFilters={clearAllFilters} />
		</aside>
	);
};
