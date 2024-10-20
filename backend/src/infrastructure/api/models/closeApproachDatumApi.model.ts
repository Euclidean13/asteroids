import { MissDistanceApiModel } from './missDistanceApi.model.js';
import { RelativeVelocityApiModel } from './relativeVelocityApi.model.js';

export class CloseApproachDatumApiModel {
  close_approach_date?: string;
  close_approach_date_full?: string;
  epoch_date_close_approach?: number;
  relative_velocity?: RelativeVelocityApiModel;
  miss_distance?: MissDistanceApiModel;
  orbiting_body?: string;

  public constructor(init?: Partial<CloseApproachDatumApiModel>) {
    Object.assign(this, init);
  }
}
