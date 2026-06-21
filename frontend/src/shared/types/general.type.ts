import type { TPagination } from '../schema';

export interface ICollectionResult<T> {
	items: T[];
	pagination?: TPagination;
}
