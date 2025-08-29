import { makeError } from '@/utils/errors';
import { logger } from '@/utils/logger';
import type { Request, Response, NextFunction } from 'express';

export async function errorHandlerMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction // <- include this parameter even if unused
) {
  const { error, statusCode } = makeError(err);
  logger.error(error.message, error);
  res.status(Number(statusCode)).json({ error });
}
