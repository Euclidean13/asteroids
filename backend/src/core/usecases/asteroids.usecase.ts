import { Result } from '@thames/monads';
import { inject, injectable } from 'inversify';
import { TYPES } from '../../_di/types.js';
import { AsteroidModel } from '../models/asteroid.model.js';
import { NasaInterfaceOutgoing } from '../ports/outgoing/nasa.interface.outgoing.js';
import { AsteroidsInterfaceUsecase } from './asteroids.interface.usecase.js';

@injectable()
export class AsteroidsUsecase implements AsteroidsInterfaceUsecase {
  @inject(TYPES.nasaInterfaceOutgoing) private readonly nasaInterfaceOutgoing: NasaInterfaceOutgoing;

  public async getAsteroids(startDate: Date, endDate: Date): Promise<Result<AsteroidModel[], Error>> {
    return this.nasaInterfaceOutgoing.getAsteroids(startDate, endDate);
  }
}
