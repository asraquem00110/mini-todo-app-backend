import tasksRouter from './tasks/routes';

export const routes = [{ prefix: '/tasks', router: tasksRouter }];

export type AppRoutes = (typeof routes)[number];
