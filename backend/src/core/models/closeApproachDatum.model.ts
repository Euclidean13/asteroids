import { MissDistanceModel } from './missDistance.model.js';
import { RelativeVelocityModel } from './relativeVelocity.model.js';

export class CloseApproachDatumModel {
  close_approach_date?: string;
  close_approach_date_full?: string;
  epoch_date_close_approach?: number;
  relative_velocity?: RelativeVelocityModel;
  miss_distance?: MissDistanceModel;
  orbiting_body?: string;

  public constructor(init?: Partial<CloseApproachDatumModel>) {
    Object.assign(this, init);
  }
}
