import { logger } from '@/utils/logger';
import type { NextFunction, Request, Response } from 'express';

export async function loggerHandlerMiddleware(req: Request, res: Response, next: NextFunction) {
  res.on('finish', () => {
    logger.info(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  });

  next();
}
