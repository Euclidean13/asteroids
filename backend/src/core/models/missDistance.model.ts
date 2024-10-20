export class MissDistanceModel {
  astronomical?: string;
  lunar?: string;
  kilometers?: string;
  miles?: string;

  public constructor(init?: Partial<MissDistanceModel>) {
    Object.assign(this, init);
  }
}
