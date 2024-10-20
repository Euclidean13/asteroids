export interface MissDistanceModel {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string;
}

export interface RelativeVelocityModel {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string;
}

export interface CloseApproachDatumModel {
  close_approach_date: Date;
  close_approach_date_full: string;
  epoch_date_close_approach?: number;
  relative_velocity?: RelativeVelocityModel;
  miss_distance?: MissDistanceModel;
  orbiting_body: string;
}

export interface FeetModel {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

export interface EstimatedDiameterModel {
  kilometers: FeetModel;
  meters: FeetModel;
  miles: FeetModel;
  feet: FeetModel;
}

export interface NearEarthObjectLinksModel {
  self: string;
}

export interface DataType {
  id: string;
  date: string;
  links: NearEarthObjectLinksModel;
  neo_reference_id?: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameterModel;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachDatumModel[];
  is_sentry_object: boolean;
}

export interface ListComponentProps {
  startDate: string;
  endDate: string;
}
