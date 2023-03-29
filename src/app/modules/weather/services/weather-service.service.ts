import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeolocationService } from 'src/app/services/geolocation-service.service';
import { WeatherFiveDaysData } from 'src/app/types/weather-five-days-data';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = 'f6acab3f423695d2ef2b75d5d265f9c0';
  private NOW_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
  private FIVE_DAYS_API_URL =
    'https://api.openweathermap.org/data/2.5/forecast';
  private lat!: number;
  private lon!: number;

  constructor(
    private geolocationService: GeolocationService,
    private http: HttpClient
  ) {}

  getNowWeather(): Observable<any> {
    return new Observable((observer) => {
      this.geolocationService
        .getLocation()
        .then((res) => {
          const url = `${this.NOW_API_URL}?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=${this.API_KEY}`;
          this.http.get<any>(url).subscribe(
            (data) => {
              observer.next(data);
              observer.complete();
            },
            (error) => observer.error(error)
          );
        })
        .catch((error) => observer.error(error));
    });
  }
  get5DaysWeather(): Observable<WeatherFiveDaysData> {
    return new Observable((observer) => {
      this.geolocationService
        .getLocation()
        .then((res) => {
          const url = `${this.FIVE_DAYS_API_URL}?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=${this.API_KEY}`;
          this.http.get<WeatherFiveDaysData>(url).subscribe(
            (data) => {
              observer.next(data);
              observer.complete();
            },
            (error) => observer.error(error)
          );
        })
        .catch((error) => observer.error(error));
    });
  }
}
