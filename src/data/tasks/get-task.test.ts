import { describe, expect, it, vi } from 'vitest';
import { getTasks } from './get-task';
import type { Task } from '@/types/Task';
import * as taskDataManagerModule from './task-data-manager';

describe('getTasks()', () => {
  it('should retrieve all tasks', () => {
    const mockTasks: Task[] = [
      { id: crypto.randomUUID(), title: 'Task 1', description: 'Description 1' },
      { id: crypto.randomUUID(), title: 'Task 2', description: 'Description 2' },
      { id: crypto.randomUUID(), title: 'Task 3', description: 'Description 3' },
    ];

    const taskDataManager = vi.spyOn(taskDataManagerModule.taskDataManager, 'getTasks');
    taskDataManager.mockReturnValue(mockTasks);

    const tasks = getTasks();
    expect(tasks).toEqual(mockTasks);
    expect(taskDataManager).toHaveBeenCalled();
  });
});
