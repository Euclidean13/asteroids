import { Err, Ok, Result } from '@thames/monads';
import axios from 'axios';
import { injectable } from 'inversify';
import { AsteroidModel } from '../../core/models/asteroid.model.js';
import { NasaInterfaceOutgoing } from '../../core/ports/outgoing/nasa.interface.outgoing.js';
import { NasaApiModel } from './models/nasaApi.model.js';

@injectable()
export class NasaApi implements NasaInterfaceOutgoing {
  public async getAsteroids(startDate: Date, endDate: Date): Promise<Result<AsteroidModel[], Error>> {
    try {
      const response = await axios.get(process.env.API_URL || '', {
        params: {
          start_date: startDate,
          end_date: endDate,
          api_key: process.env.API_KEY,
        },
      });
      const nasa: NasaApiModel = response.data;
      return Ok(this.extractAsteroidsByDates(nasa));
    } catch (error) {
      return Err(new Error('Unable to get asteroids data'));
    }
  }

  private extractAsteroidsByDates(nasa: NasaApiModel) {
    const asteroids: AsteroidModel[] = [];

    for (const date in nasa.near_earth_objects) {
      const objects = nasa.near_earth_objects[date];
      objects.forEach((obj) => {
        asteroids.push({ ...obj, date: new Date(date) });
      });
    }

    return asteroids;
  }
}
