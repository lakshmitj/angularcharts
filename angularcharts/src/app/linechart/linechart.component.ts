import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';



@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit, AfterViewInit {

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
      backgroundColor: "black",
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
      backgroundColor: "black",
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
  
  data:any = {
    labels: [],
    datasets: [
      {
        label: "A",
        fill: false,
        borderColor: "Green",
        data: [644.3472,619.2361,643.993,653.493,645.6667,647.8958,641.9305,638.4236,635.7778,632.2639
          ,628.5347,625.118,623.9722,620.5764,616.8264,614.9305,611.8125,608.507,606.3611,
          602.5764,597.6945,598.8889,596.757,594.1945,591.625,873.6042,870.5903,867.0764,862.6458,
          859.6528,854.0139,856.9722,852.0972,852.4097,847.3195,842.9097,717.1597,696.2014,693.6875,
          703.507,705.6805,702.5903,697.6458,692.9861,690.368,687.1945,684.4514,680.1042,676.6042,
          675.1042,669.8055,667.5764,663.3611,661.632,655.993,652.8958,650.4167,649.2361,646.9236,
          641.8195,640.3333,939.3611,936.0695,929.4028,925.9861,923.6528,922.2083,921.618
          ,916.6875,912.9861,909.8403,907.4097]
      
      },
      // {
      //   label: "My Second dataset",
      //   fill: false,
      //   borderColor: "#ffcc00",
      //   data: [28, 48, 40, 19, 86, 27, 90]
      // }
    ],
    options: {
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          display: true,
          position: "bottom",
          scaleLabel: {
            display: true,
            labelString: 'Cycle',
            fontFamily: "Montserrat",
            fontColor: "black",
          },
          ticks: {
            min: 0,
            max: 74,
            fontFamily: "Montserrat",
        }

        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Intensity'
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 1033.297,
            max: 1033.297,
            min: 0,
            stepSize: 100
          }
        }]

        
      }
    }
  };
  
  constructor() {
    const min : number = 0;
    const max : number = 74
    this.labels =  _.range(min,max,10);
   }

  ngOnInit() {
  }

  ngAfterViewInit(){

    let canvasContext = this.chartCanvas.nativeElement.getContext('2d');
    // this.data.labels = this.labels;
    this.chartCanvas = new Chart(canvasContext , {  type: 'line',
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
