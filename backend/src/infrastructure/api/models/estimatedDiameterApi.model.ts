import { FeetApiModel } from './feetApi.model.js';

export class EstimatedDiameterApiModel {
  kilometers?: FeetApiModel;
  meters?: FeetApiModel;
  miles?: FeetApiModel;
  feet?: FeetApiModel;

  public constructor(init?: Partial<EstimatedDiameterApiModel>) {
    Object.assign(this, init);
  }
}
