import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherService } from '../../services/weather-service.service';
import { WeatherNowData } from '../../types/weather-now-data';

@Component({
  selector: 'app-weather-now',
  templateUrl: './weather-now.component.html',
  styleUrls: ['./weather-now.component.scss'],
})
export class WeatherNowComponent implements OnInit {
  data!: WeatherNowData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.weatherService.getNowWeather().subscribe({
      next: (res) => (this.data = res),
    });
  }
}
