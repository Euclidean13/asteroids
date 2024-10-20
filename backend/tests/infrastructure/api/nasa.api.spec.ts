import 'reflect-metadata';

import { Err, Ok } from '@thames/monads';
import axios from 'axios';
import { NasaApiModel } from '../../../src/infrastructure/api/models/nasaApi.model.js';
import { NasaApi } from '../../../src/infrastructure/api/nasa.api.js';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('NasaApi', () => {
  let nasaApi: NasaApi;

  beforeEach(() => {
    nasaApi = new NasaApi();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return Ok with asteroids data on successful API call', async () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-02');

    const mockResponse: NasaApiModel = {
      near_earth_objects: {
        '2023-01-01': [
          {
            id: '1',
            name: 'Asteroid A',
            estimated_diameter: { kilometers: { estimated_diameter_min: 0.1, estimated_diameter_max: 0.2 } },
            is_potentially_hazardous_asteroid: false,
          },
        ],
        '2023-01-02': [
          {
            id: '2',
            name: 'Asteroid B',
            estimated_diameter: { kilometers: { estimated_diameter_min: 0.3, estimated_diameter_max: 0.4 } },
            is_potentially_hazardous_asteroid: true,
          },
        ],
      },
    };

    mockedAxios.get.mockResolvedValueOnce({ data: mockResponse });

    const result = await nasaApi.getAsteroids(startDate, endDate);

    expect(result).toEqual(
      Ok([
        {
          id: '1',
          name: 'Asteroid A',
          estimated_diameter: { kilometers: { estimated_diameter_min: 0.1, estimated_diameter_max: 0.2 } },
          is_potentially_hazardous_asteroid: false,
          date: new Date('2023-01-01'),
        },
        {
          id: '2',
          name: 'Asteroid B',
          estimated_diameter: { kilometers: { estimated_diameter_min: 0.3, estimated_diameter_max: 0.4 } },
          is_potentially_hazardous_asteroid: true,
          date: new Date('2023-01-02'),
        },
      ])
    );
  });

  it('should return Err on API error', async () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-02');

    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const result = await nasaApi.getAsteroids(startDate, endDate);

    expect(result).toEqual(Err(new Error('Unable to get asteroids data')));
  });
});
