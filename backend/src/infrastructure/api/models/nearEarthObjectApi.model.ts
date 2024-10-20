import { CloseApproachDatumApiModel } from './closeApproachDatumApi.model.js';
import { EstimatedDiameterApiModel } from './estimatedDiameterApi.model.js';
import { NearEarthObjectLinksApiModel } from './nearEarthObjectLinksApi.model.js';

export class NearEarthObjectApiModel {
  links?: NearEarthObjectLinksApiModel;
  id?: string;
  neo_reference_id?: string;
  name?: string;
  nasa_jpl_url?: string;
  absolute_magnitude_h?: number;
  estimated_diameter?: EstimatedDiameterApiModel;
  is_potentially_hazardous_asteroid?: boolean;
  close_approach_data?: CloseApproachDatumApiModel[];
  is_sentry_object?: boolean;

  public constructor(init?: Partial<NearEarthObjectApiModel>) {
    Object.assign(this, init);
  }
}
