import { z } from 'zod';
import type { Request, Response } from 'express';
import { deleteTask } from '@/data/tasks/delete-task';

const inputSchema = z.object({
  task_id: z.string().uuid(),
});
type InputType = z.infer<typeof inputSchema>;

export function deleteTaskHandler(req: Request, res: Response) {
  const task = req.params as InputType;
  inputSchema.parse(task);
  deleteTask({
    task_id: task.task_id,
  });
  res.status(200).json({ message: 'Task deleted successfully', task_id: task.task_id });
}

export type DeleteTaskHandlerResponseType = typeof deleteTaskHandler;
