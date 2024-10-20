import { Result } from '@thames/monads';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../_di/types.js';
import { AsteroidModel } from '../models/asteroid.model.js';
import { AsteroidsInterfaceIncoming } from '../ports/incoming/asteroids.interface.incoming.js';
import { AsteroidsInterfaceUsecase } from '../usecases/asteroids.interface.usecase.js';

@injectable()
export class AsteroidOrchestrator implements AsteroidsInterfaceIncoming {
  @inject(TYPES.asteroidsInterfaceUsecase) private readonly asteroidsInterfaceUsecase: AsteroidsInterfaceUsecase;

  public async getAsteroids(startDate: Date, endDate: Date): Promise<Result<AsteroidModel[], Error>> {
    return this.asteroidsInterfaceUsecase.getAsteroids(startDate, endDate);
  }
}
