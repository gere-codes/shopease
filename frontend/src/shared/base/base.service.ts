import z from 'zod';
import { apiResponseSchema, paginationSchema, type TBaseQuery } from '../schema';
import type { ICollectionResult } from '@sharedTypes';
import { publicInstance } from '@api';

export interface IBaseService<T, TQuery extends TBaseQuery = TBaseQuery> {
	getCollection(params: TQuery): Promise<ICollectionResult<T>>;
}
export abstract class BaseService<T, TQuery extends TBaseQuery = TBaseQuery> implements IBaseService<T, TQuery> {
	constructor(
		protected schema: z.ZodType<T>,
		protected querySchema: z.ZodType<TQuery>,
		protected resource: string,
	) {}

	protected transform(data: unknown): unknown {
		return data;
	}

	async getCollection(params: TQuery): Promise<ICollectionResult<T>> {
		const query = this.querySchema.parse(params);

		const response = await publicInstance.get(`/public/${this.resource}`, { params: query });
		const { data, pagination } = response.data;
		// const validated = apiResponseSchema.parse(response.data.data);

		return {
			data: z.array(this.schema).parse(data.map((d: unknown) => this.transform(d))),
			pagination: paginationSchema.parse(pagination),
		};
	}
}
