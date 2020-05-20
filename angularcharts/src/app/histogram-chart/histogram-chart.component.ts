import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-histogram-chart',
  templateUrl: './histogram-chart.component.html',
  styleUrls: ['./histogram-chart.component.scss']
})
export class HistogramChartComponent implements OnInit {

  @ViewChild('chartCanvas', { static: false })
  private chartCanvas: ElementRef<HTMLCanvasElement>;

  public chart: Chart;
  public labels: string[] = [];

  private dataValues = [12, 19, 3, 5];
  private dataLabels = [0, 1, 2, 3, 4];

  constructor() { }

  ngOnInit() { }


  ngAfterViewInit(){

    let canvasContext = this.chartCanvas.nativeElement.getContext('2d');
    this.chartCanvas = new Chart(canvasContext , {  type: 'bar',
    data: {
      labels: this.dataLabels,
      datasets: [{
        label: 'Group A',
        data: this.dataValues,
        backgroundColor: 'purple',
      }]
    },  
    options: {
      legend: {
          display: true,
      },
      scales: {
        xAxes: [{
          display: false,
          barPercentage: 1.3,
          ticks: {
              max: 3,
          }
       }, {
          display: true,
          ticks: {
              autoSkip: false,
              max: 4,
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
    
    });
  
  }
}
