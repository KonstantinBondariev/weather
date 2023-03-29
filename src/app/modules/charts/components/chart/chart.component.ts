import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() data: number[] = [];

  @ViewChild('chart', { static: true })
  lineChartCanvas!: ElementRef;

  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D | null;
  width!: number;
  height!: number;

  xValues: number[] = [];
  yValues: number[] = [];

  constructor() {}

  setCanvas(): void {
    this.canvas = this.lineChartCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  ngAfterViewInit() {
    this.setCanvas();
    this.drawChart();
  }

  defineAxisValues(margin = 20): void {
    this.xValues = this.data.map(
      (value, index) =>
        index * ((this.width - margin * 2) / (this.data.length - 1)) + margin
    );
    this.yValues = this.data.map(
      (value, index) =>
        this.height -
        (value / Math.max(...this.data)) * (this.height - margin) -
        0.5 * margin
    );
  }

  setChartProperties(
    lineColor: string = 'green',
    lineWidth: number = 1,
    fontFamily: string = 'Arial',
    fontSize: string = '14px'
  ): void {
    if (this.ctx) {
      this.ctx.strokeStyle = lineColor;
      this.ctx.lineWidth = lineWidth;
      this.ctx.font = `${fontSize} ${fontFamily}`;
    }
  }

  drawChart(): void {
    if (this.ctx) {
      this.defineAxisValues(50);
      this.setChartProperties();

      this.ctx.beginPath();
      this.ctx.moveTo(this.xValues[0], this.yValues[0]);
      // Draw circle at each point
      this.ctx.arc(this.xValues[0], this.yValues[0], 2, 0, 2 * Math.PI);
      this.ctx.fillText(
        `${this.data[0].toFixed(1)}`,
        this.xValues[0] + 5,
        this.yValues[0] - 10
      );

      for (let i = 1; i < this.xValues.length; i++) {
        this.ctx.lineTo(this.xValues[i], this.yValues[i]);

        // Draw circle at each point
        this.ctx.arc(this.xValues[i], this.yValues[i], 2, 0, 2 * Math.PI);

        // Add label to each point
        this.ctx.fillText(
          `${this.data[i].toFixed(1)}`,
          this.xValues[i] + 5,
          this.yValues[i] - 10
        );
      }

      this.ctx.stroke();
    }
  }
}
