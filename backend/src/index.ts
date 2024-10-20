import 'reflect-metadata';

import cors from 'cors';
import * as dotenv from 'dotenv';
import http from 'http';

import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './_di/inversify.config.js';
import { logger } from './utils/logsHelper.js';

import './application/asteroids.controller.js';

(async () => {
  dotenv.config();

  // Create server
  const server = new InversifyExpressServer(container);

  server.setConfig((app) => {
    app.use(cors());
  });

  const app = server.build();
  // const options = {
  //   key: fs.readFileSync('./certs/key.pem'),
  //   cert: fs.readFileSync('./certs/fullchain.crt'),
  // };
  http.createServer({}, app).listen(process.env.PORT ?? 3030, async function () {
    logger.info(`[Server] Application running on: ${process.env.HOSTNAME}:${process.env.PORT}`);
  });

  process.on('unhandledRejection', (error) => {
    logger.info(`[Server] unhandledRejectionError : ${error}`);
  });
})();
