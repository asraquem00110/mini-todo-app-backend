import { describe, expect, it } from 'vitest';
import { addTask } from './add-task';

describe('addTask()', () => {
  it('should add a new task and return it', () => {
    // Mock the task data
    const taskData = {
      title: 'Test Task',
      description: 'This is a test task',
    };

    const task = addTask(taskData);
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('description');
    expect(task.title).toBe(taskData.title);
    expect(task.description).toBe(taskData.description);
  });
});
