import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherService } from '../../services/weather-service.service';

@Component({
  selector: 'app-weather-five-day',
  templateUrl: './weather-five-day.component.html',
  styleUrls: ['./weather-five-day.component.scss'],
})
export class WeatherFiveDayComponent implements OnInit {
  temps: number[] = [];

  constructor(
    private weatherService: WeatherService,
    private geolocation: GeolocationService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.weatherService.get5DaysWeather().subscribe({
      next: (res) => {
        res.list.forEach((data) => {
          this.temps.push(data.main.temp - 273.15);
        });
      },
    });
  }
}
