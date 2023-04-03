import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherTabsComponent } from './components/weather-tabs/weather-tabs.component';
import { ChartsModule } from '../charts/charts.module';
import { HttpClientModule } from '@angular/common/http';
import { WeatherFiveDayComponent } from './components/weather-five-day/weather-five-day.component';
import { WeatherNowComponent } from './components/weather-now/weather-now.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherTabsComponent,
    WeatherFiveDayComponent,
    WeatherNowComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MatTabsModule,
    ChartsModule,
    HttpClientModule,
    MatCardModule,
  ],
  exports: [],
})
export class WeatherModule {}
