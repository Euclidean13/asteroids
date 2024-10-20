import { NasaLinksApiModel } from './nasaLinksApi.model.js';
import { NearEarthObjectApiModel } from './nearEarthObjectApi.model.js';

export class NasaApiModel {
  links?: NasaLinksApiModel;
  element_count?: number;
  near_earth_objects?: { [date: string]: NearEarthObjectApiModel[] };

  public constructor(init?: Partial<NasaApiModel>) {
    Object.assign(this, init);
  }
}
