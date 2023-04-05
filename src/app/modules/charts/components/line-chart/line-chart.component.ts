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
    scales: {
      y: {
        grace: '5%',
      },
    },
  };
  public lineChartLegend = true;

  constructor() {}

  calculateAverage(data: number[]): number {
    let sum = 0;
    data.forEach((item) => (sum += item));
    return sum / data.length;
  }

  setColor(data: number[]): string {
    if (this.calculateAverage(data) < -15) {
      return 'rgba(145, 21, 194,0.3)';
    } else if (this.calculateAverage(data) < -10) {
      return 'rgba(59, 21, 194,0.3)';
    } else if (this.calculateAverage(data) < 0) {
      return 'rgba(48, 147, 240,0.3)';
    } else if (this.calculateAverage(data) < 8) {
      return 'rgba(48, 240, 214,0.3)';
    } else if (this.calculateAverage(data) < 18) {
      return 'rgba(48, 240, 51,0.3)';
    } else if (this.calculateAverage(data) < 25) {
      return 'rgba(240, 237, 48,0.3)';
    } else return 'rgba(247, 97, 22,0.3)';
  }

  ngOnInit() {
    setTimeout(() => {
      this.showComponent = true;
    }, 2000);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.lineChartData.labels = this.labels;
    this.lineChartData.datasets[0].data = this.data;
    this.lineChartData.datasets[0].label = this.label;
    this.lineChartData.datasets[0].backgroundColor = this.setColor(this.data);
  }
}
