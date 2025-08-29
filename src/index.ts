import express, { type Application } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import { createServer as createHttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import { envConfig, isHttps } from './env';
import fs from 'fs';
import { logger } from './utils/logger';
import { errorHandlerMiddleware } from './middlewares/error-handler';
import { routes, type AppRoutes } from './controllers/routes';
import { loggerHandlerMiddleware } from './middlewares/logger-middleware';

const app: Application = express();

app.use(cookieParser());
app.use(express.json());

// Set Security Headers
app.use(helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? true : false }));

// Prevent HTTP Param Pollution
app.use(hpp());

app.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

app.use(loggerHandlerMiddleware);

// define routes here
routes.forEach((route: AppRoutes) => {
  app.use(route.prefix, route.router);
});

// common error endpoint listener
app.use(errorHandlerMiddleware);

let server;
if (isHttps) {
  const options = {
    key: fs.readFileSync('../certs/private.key'),
    cert: fs.readFileSync('../certs/certificate.crt'),
  };
  server = createHttpsServer(options, app);
} else {
  server = createHttpServer(app);
}

server.listen(envConfig.NODE_PORT, () => {
  logger.info(
    `${envConfig.PROTOCOL} server running in ${envConfig.NODE_ENV} mode on port ${envConfig.NODE_PORT}`
  );
  return null;
});
