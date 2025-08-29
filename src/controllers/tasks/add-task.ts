import { taskSchema } from '@/data/tasks/schema';
import type { z } from 'zod';
import type { Request, Response } from 'express';
import { addTask } from '@/data/tasks/add-task';

const inputSchema = taskSchema.pick({ title: true, description: true });
type InputType = z.infer<typeof inputSchema>;

export function addTaskHandler(req: Request, res: Response) {
  const taskRequest = req.body as InputType;
  inputSchema.parse(taskRequest);
  const newTask = addTask(taskRequest);
  res.status(200).json({ message: 'Task added successfully', task: newTask });
}

export type AddTaskHandlerResponseType = typeof addTaskHandler;
