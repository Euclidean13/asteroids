export class RelativeVelocityApiModel {
  kilometers_per_second?: string;
  kilometers_per_hour?: string;
  miles_per_hour?: string;

  public constructor(init?: Partial<RelativeVelocityApiModel>) {
    Object.assign(this, init);
  }
}
