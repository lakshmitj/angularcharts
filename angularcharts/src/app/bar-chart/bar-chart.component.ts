import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas', { static: false })
  private chartCanvas: ElementRef<HTMLCanvasElement>;

  public chart: Chart;
  public labels: string[] = ["250", "500", "750", "1000", "1500", "2000", "3000", "4000", "6000", "8000", "10000"];
  public dataOne = [35, 50, 50, 55, 60, 65, 55, 80, 70, 65, 55];
  public dataTwo = [35, 55, 50, 50, 55, 60, 65, 70, 75, 60, 55];

  public chartData = {
    labels: this.labels,
    datasets: [{
      label: "One",
      fill: false,
      backgroundColor: "purple",
      borderColor: "red",
      pointBorderColor: "purple",
      pointBackgroundColor: "purple",
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "purple",
      pointHoverBorderColor: "purple",
      pointHoverBorderWidth: 2,
      tension: 0,
      data: this.dataOne,
    }, {
      label: "Two",
      fill: false,
      backgroundColor: "blueç",
      borderColor: "blue",
      pointBorderColor: "purple",
      pointBackgroundColor: "purple",
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "purple",
      pointHoverBorderColor: "purple",
      pointHoverBorderWidth: 2,
      tension: 0,
      data: this.dataTwo,
    }]
  };
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    let canvasContext = this.chartCanvas.nativeElement.getContext('2d');
    this.chartCanvas = new Chart(canvasContext , {  type: 'bar',
    data: this.chartData,  options: {
      scales: {
        xAxes: [{
          position: "bottom",
          scaleLabel: {
            display: true,
            labelString: "Frequency (Hz)",
            fontFamily: "Montserrat",
            fontColor: "black",
          },
          ticks: {
            fontFamily: "Montserrat",
          }
        }],
        yAxes: [{
          position: "left",
          scaleLabel: {
            display: true,
            labelString: "dB",
            fontFamily: "Montserrat",
            fontColor: "black",
          },
          ticks: {
            min: -10,
            max: 110,
            stepSize: 10,
            reverse: false,
          },
        }],
      },
    }});
  
  }

}
