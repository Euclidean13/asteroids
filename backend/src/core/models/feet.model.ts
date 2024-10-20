export class FeetModel {
  estimated_diameter_min?: number;
  estimated_diameter_max?: number;

  public constructor(init?: Partial<FeetModel>) {
    Object.assign(this, init);
  }
}
