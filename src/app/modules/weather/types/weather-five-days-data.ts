import { WeatherFiveDaysDataItem } from './weather-five-day-data-item';

export interface WeatherFiveDaysData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherFiveDaysDataItem[];
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
