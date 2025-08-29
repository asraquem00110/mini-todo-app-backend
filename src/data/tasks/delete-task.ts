import { BadRequestError } from '@/utils/errors';
import { taskDataManager } from './task-data-manager';

export type DeleteTaskArgs = {
  task_id: string;
};

export function deleteTask(args: DeleteTaskArgs): string {
  const res = taskDataManager.deleteTask(args.task_id);

  if (!res) {
    throw new BadRequestError('Task ID not found!');
  }
  return args.task_id;
}

export type DeleteTaskResponse = ReturnType<typeof deleteTask>;
