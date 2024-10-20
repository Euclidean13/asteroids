import { CloseApproachDatumModel } from './closeApproachDatum.model.js';
import { EstimatedDiameterModel } from './estimatedDiameter.model.js';
import { NearEarthObjectLinksModel } from './nearEarthObjectLinks.model.js';

export class AsteroidModel {
  id?: string;
  date?: Date;
  links?: NearEarthObjectLinksModel;
  neo_reference_id?: string;
  name?: string;
  nasa_jpl_url?: string;
  absolute_magnitude_h?: number;
  estimated_diameter?: EstimatedDiameterModel;
  is_potentially_hazardous_asteroid?: boolean;
  close_approach_data?: CloseApproachDatumModel[];
  is_sentry_object?: boolean;

  public constructor(init?: Partial<AsteroidModel>) {
    Object.assign(this, init);
  }
}
