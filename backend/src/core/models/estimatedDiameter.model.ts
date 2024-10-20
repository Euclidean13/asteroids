import { FeetModel } from './feet.model.js';

export class EstimatedDiameterModel {
  kilometers?: FeetModel;
  meters?: FeetModel;
  miles?: FeetModel;
  feet?: FeetModel;

  public constructor(init?: Partial<EstimatedDiameterModel>) {
    Object.assign(this, init);
  }
}
