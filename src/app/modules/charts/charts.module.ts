import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './components/chart/chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ChartComponent, LineChartComponent],
  imports: [CommonModule, NgChartsModule, MatCardModule],
  providers: [],
  exports: [ChartComponent, LineChartComponent],
})
export class ChartsModule {}
