import * as express from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';
import { TYPES } from '../_di/types.js';
import { AsteroidsInterfaceIncoming } from '../core/ports/incoming/asteroids.interface.incoming.js';
import { logger } from '../utils/logsHelper.js';

@controller('/asteroids')
export class AsteroidsController {
  @inject(TYPES.asteroidsInterfaceIncoming) private readonly asteroidsInterfaceIncoming: AsteroidsInterfaceIncoming;

  @httpGet('/date')
  public async getAsteroidsByDate(req: express.Request, res: express.Response) {
    try {
      const { startDate, endDate } = req.query as { startDate: string; endDate: string };
      const results = await this.asteroidsInterfaceIncoming.getAsteroids(new Date(startDate), new Date(endDate));
      if (results.isOk()) {
        return res.status(200).send(results.ok().unwrap());
      } else {
        return res.status(500).send({ message: results.err().unwrap().message });
      }
    } catch (error) {
      logger.error(error);
      return res.status(500).send({ message: 'Error' });
    }
  }
}
