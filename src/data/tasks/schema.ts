import type { Task } from '@/types/Task';
import { z } from 'zod';

export const taskSchemaObject = {
  id: z.string().uuid(),
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
};

export const taskSchema = z.object(taskSchemaObject) satisfies z.ZodType<Task>;
