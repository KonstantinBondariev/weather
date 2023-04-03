import { Component, OnChanges, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherService } from '../../services/weather-service.service';

@Component({
  selector: 'app-weather-five-day',
  templateUrl: './weather-five-day.component.html',
  styleUrls: ['./weather-five-day.component.scss'],
})
export class WeatherFiveDayComponent implements OnInit {
  temps: number[] = [];
  labels: string[] = [];

  constructor(
    private weatherService: WeatherService,
    private geolocation: GeolocationService
  ) {}

  ngOnInit(): void {
    this.generateLabels();
    this.getData();
  }

  generateLabels(): void {
    let h = 0;
    for (let i = 0; i < 40; i++) {
      this.labels.push(h + 'h');
      h += 3;
    }
  }

  getData(): void {
    this.weatherService.get5DaysWeather().subscribe({
      next: (res) => {
        res.list.forEach((data) => {
          this.temps.push(Math.floor(data.main.temp - 273.15));
        });
      },
    });
  }
}
