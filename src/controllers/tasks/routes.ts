import express, { type Router } from 'express';
import { addTaskHandler } from './add-task';
import { deleteTaskHandler } from './delete-task';
import { getTaskHandler } from './get-tasks';

const router: Router = express.Router();

router.get('/get-tasks', getTaskHandler);
router.post('/add-task', addTaskHandler);
router.delete('/delete-task/:task_id', deleteTaskHandler);

export default router;
