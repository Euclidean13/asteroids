import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { DataType } from '../interfaces/nasa';
import ListComponent from './ListComponent';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ListComponent', () => {
  const mockData: DataType[] = [
    {
      id: '1',
      date: '2024-10-20T00:00:00Z',
      links: {
        self: 'http://example.com/1',
      },
      neo_reference_id: 'NEO1',
      name: 'Asteroid 1',
      nasa_jpl_url: 'http://nasa.gov/1',
      absolute_magnitude_h: 22.5,
      estimated_diameter: {
        kilometers: { estimated_diameter_min: 0.5, estimated_diameter_max: 1.0 },
        meters: { estimated_diameter_min: 500, estimated_diameter_max: 1000 },
        miles: { estimated_diameter_min: 0.3, estimated_diameter_max: 0.6 },
        feet: { estimated_diameter_min: 1640, estimated_diameter_max: 3280 },
      },
      is_potentially_hazardous_asteroid: false,
      close_approach_data: [
        {
          close_approach_date: new Date('2024-10-20T00:00:00Z'),
          close_approach_date_full: '2024-10-20T00:00:00Z',
          relative_velocity: {
            kilometers_per_second: '10.0',
            kilometers_per_hour: '36000',
            miles_per_hour: '22369.0',
          },
          miss_distance: {
            astronomical: '0.002',
            lunar: '0.005',
            kilometers: '800',
            miles: '500',
          },
          orbiting_body: 'Earth',
        },
      ],
      is_sentry_object: false,
    },
    {
      id: '2',
      date: '2024-10-21T00:00:00Z',
      links: {
        self: 'http://example.com/2',
      },
      neo_reference_id: 'NEO2',
      name: 'Asteroid 2',
      nasa_jpl_url: 'http://nasa.gov/2',
      absolute_magnitude_h: 21.0,
      estimated_diameter: {
        kilometers: { estimated_diameter_min: 1.0, estimated_diameter_max: 2.0 },
        meters: { estimated_diameter_min: 1000, estimated_diameter_max: 2000 },
        miles: { estimated_diameter_min: 0.6, estimated_diameter_max: 1.2 },
        feet: { estimated_diameter_min: 3280, estimated_diameter_max: 6560 },
      },
      is_potentially_hazardous_asteroid: true,
      close_approach_data: [
        {
          close_approach_date: new Date('2024-10-21T00:00:00Z'),
          close_approach_date_full: '2024-10-21T00:00:00Z',
          relative_velocity: {
            kilometers_per_second: '15.0',
            kilometers_per_hour: '54000',
            miles_per_hour: '33550.0',
          },
          miss_distance: {
            astronomical: '0.003',
            lunar: '0.007',
            kilometers: '1200',
            miles: '750',
          },
          orbiting_body: 'Earth',
        },
      ],
      is_sentry_object: true,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    window.alert = jest.fn();
  });

  test('sorts items correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    render(<ListComponent startDate="2024-10-20" endDate="2024-10-27" />);

    await waitFor(() => {
      expect(screen.getByText('Asteroid 1')).toBeInTheDocument();
      expect(screen.getByText('Asteroid 2')).toBeInTheDocument();
    });

    const sortButton = screen.getByText(/sort by name/i);
    fireEvent.click(sortButton);
  });

  test('shows an alert on fetch error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    render(<ListComponent startDate="2024-10-20" endDate="2024-10-27" />);

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        expect.stringContaining('Error fetching data: Network error. Remember max range of 7 days')
      );
    });
  });
});
