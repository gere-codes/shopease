export interface IPagination {
	page: number;
	limit: number;
	totalPages: number;
	totalItems: number;
}

export interface ICollectionResult<T> {
	data: T[];
	pagination?: IPagination;
}
