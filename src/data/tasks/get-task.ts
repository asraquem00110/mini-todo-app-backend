import type { Task } from '@/types/Task';
import { taskDataManager } from './task-data-manager';

export function getTasks(): Task[] {
  const tasks = taskDataManager.getTasks();
  return tasks;
}

export type GetTaskResponse = ReturnType<typeof getTasks>;
