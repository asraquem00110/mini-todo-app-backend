import type { Request, Response } from 'express';
import { getTasks } from '@/data/tasks/get-task';

export function getTaskHandler(req: Request, res: Response) {
  const tasks = getTasks();
  res.status(200).json({ tasks });
}

export type GetTaskHandlerResponseType = typeof getTaskHandler;
