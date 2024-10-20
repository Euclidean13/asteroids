import { Result } from '@thames/monads';
import { AsteroidModel } from '../models/asteroid.model.js';

export interface AsteroidsInterfaceUsecase {
  getAsteroids(startDate: Date, endDate: Date): Promise<Result<AsteroidModel[], Error>>;
}
