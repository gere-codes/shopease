import type { TPagination } from '../schema';

export interface ICollectionResult<T> {
	data: T[];
	pagination?: TPagination;
}
