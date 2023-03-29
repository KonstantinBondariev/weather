import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherService } from './services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private geolocation: GeolocationService
  ) {}

  ngOnInit(): void {
    this.geolocation
      .getLocation()
      .then((res) => console.log(res.coords.latitude, res.coords.longitude));
    this.weatherService
      .getNowWeather()
      .subscribe({ next: (res) => console.log(res) });
    this.weatherService
      .get4DaysWeather()
      .subscribe({ next: (res) => console.log(res) });
  }
}
