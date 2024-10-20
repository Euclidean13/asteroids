export class MissDistanceApiModel {
  astronomical?: string;
  lunar?: string;
  kilometers?: string;
  miles?: string;

  public constructor(init?: Partial<MissDistanceApiModel>) {
    Object.assign(this, init);
  }
}
