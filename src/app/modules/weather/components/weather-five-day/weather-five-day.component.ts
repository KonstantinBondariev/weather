import { Component, OnChanges, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherService } from '../../services/weather-service.service';
import { Temperature } from '../../types/temperature';
import { WeatherFiveDaysData } from '../../types/weather-five-days-data';
@Component({
  selector: 'app-weather-five-day',
  templateUrl: './weather-five-day.component.html',
  styleUrls: ['./weather-five-day.component.scss'],
})
export class WeatherFiveDayComponent implements OnInit {
  temperature: Temperature = {
    temp: [],
    feelsLike: [],
    tempMax: [],
    tempMin: [],
  };
  dateLabels: string[] = [];
  data!: WeatherFiveDaysData;

  constructor(
    private weatherService: WeatherService,
    private geolocation: GeolocationService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.weatherService.get5DaysWeather().subscribe({
      next: (data) => {
        this.data = data;
        this.setTemperature(data);
        this.setDateLabels(data);
      },
    });
  }
  setTemperature(data: WeatherFiveDaysData): void {
    data.list.forEach((res) => {
      this.temperature.temp.push(+(res.main.temp - 273.15).toFixed(1));
      this.temperature.feelsLike.push(
        +(res.main.feels_like - 273.15).toFixed(1)
      );
      this.temperature.tempMax.push(+(res.main.temp_max - 273.15).toFixed(1));
      this.temperature.tempMin.push(+(res.main.temp_min - 273.15).toFixed(1));
    });
  }

  setDateLabels(data: WeatherFiveDaysData): void {
    data.list.forEach((res) => {
      const date = new Date(res.dt_txt);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');

      const dateString = `${day}-${month} ${hours}:${minutes}`;
      this.dateLabels.push(dateString);
    });
  }
}
