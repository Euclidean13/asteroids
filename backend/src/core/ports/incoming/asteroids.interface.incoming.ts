import { Result } from '@thames/monads';
import { AsteroidModel } from '../../models/asteroid.model.js';

export interface AsteroidsInterfaceIncoming {
  getAsteroids(startDate: Date, endDate: Date): Promise<Result<AsteroidModel[], Error>>;
}
