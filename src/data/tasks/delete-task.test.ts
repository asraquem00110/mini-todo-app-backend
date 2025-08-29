import { describe, expect, it, vi } from 'vitest';
import { deleteTask } from './delete-task';

const mocks = vi.hoisted(() => {
  return {
    taskDataManager: {
      deleteTask: vi.fn(),
    },
  };
});

vi.mock('@/data/tasks/task-data-manager', () => ({
  taskDataManager: mocks.taskDataManager,
}));

describe('deleteTask()', () => {
  it('should delete task and return its id', () => {
    mocks.taskDataManager.deleteTask.mockReturnValue(true);

    const taskId = crypto.randomUUID();
    const result = deleteTask({ task_id: taskId });

    expect(mocks.taskDataManager.deleteTask).toHaveBeenCalledWith(taskId);
    expect(result).toBe(taskId);
  });

  it('should throw an error if task id not found', () => {
    mocks.taskDataManager.deleteTask.mockReturnValue(false);
    const taskId = crypto.randomUUID();

    expect(() => deleteTask({ task_id: taskId })).toThrow('Task ID not found!');
    expect(mocks.taskDataManager.deleteTask).toHaveBeenCalledWith(taskId);
  });
});
