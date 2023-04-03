import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() label: string = '';

  showComponent: boolean = false;

  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.labels,
    datasets: [
      {
        data: this.data,
        label: this.label,
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)',
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.showComponent = true;
    }, 2000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.lineChartData.labels = this.labels;
    this.lineChartData.datasets[0].data = this.data;
    this.lineChartData.datasets[0].label = this.label;
  }
}
