import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherTabsComponent } from './components/weather-tabs/weather-tabs.component';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  declarations: [WeatherComponent, WeatherTabsComponent],
  imports: [CommonModule, WeatherRoutingModule, MatTabsModule, ChartsModule],
  exports: [],
})
export class WeatherModule {}
