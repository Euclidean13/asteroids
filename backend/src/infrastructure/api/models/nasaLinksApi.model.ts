export class NasaLinksApiModel {
  next?: string;
  previous?: string;
  self?: string;

  public constructor(init?: Partial<NasaLinksApiModel>) {
    Object.assign(this, init);
  }
}
