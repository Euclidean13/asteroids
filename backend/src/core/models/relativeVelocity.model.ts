export class RelativeVelocityModel {
  kilometers_per_second?: string;
  kilometers_per_hour?: string;
  miles_per_hour?: string;

  public constructor(init?: Partial<RelativeVelocityModel>) {
    Object.assign(this, init);
  }
}
