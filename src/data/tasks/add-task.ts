import type { Task } from '@/types/Task';
import { taskDataManager } from './task-data-manager';

export type AddTaskArgs = {
  title: string;
  description?: string;
};

export function addTask(args: AddTaskArgs): Task {
  const newTask = {
    id: crypto.randomUUID(),
    title: args.title,
    description: args.description,
  };

  taskDataManager.addTask(newTask);

  return newTask;
}

export type AddTaskResponse = ReturnType<typeof addTask>;
