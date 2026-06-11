import { createBaseThunks } from '@/shared/base/base.thunk';
import { categoryService } from './category.service';

export const categoryThunks = createBaseThunks('category', categoryService);
