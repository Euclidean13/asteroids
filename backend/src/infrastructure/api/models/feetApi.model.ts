export class FeetApiModel {
  estimated_diameter_min?: number;
  estimated_diameter_max?: number;

  public constructor(init?: Partial<FeetApiModel>) {
    Object.assign(this, init);
  }
}
