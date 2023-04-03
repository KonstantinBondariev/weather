import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartComponent } from './components/chart/chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ChartComponent, LineChartComponent],
  imports: [CommonModule, NgChartsModule],
  providers: [],
  exports: [ChartComponent, LineChartComponent],
})
export class ChartsModule {}
