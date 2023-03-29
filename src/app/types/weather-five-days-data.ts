import { WeatherDataItem } from './weather-data-item';

export interface WeatherFiveDaysData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDataItem[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
