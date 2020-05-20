import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-mix-chart',
  templateUrl: './mix-chart.component.html',
  styleUrls: ['./mix-chart.component.scss']
})
export class MixChartComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas', { static: false })
  private chartCanvas: ElementRef<HTMLCanvasElement>;

  public chart: Chart;

  public labels = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
];
public revenues = [
    20000,
    14000,
    12000,
    15000,
    18000,
    19000,
    22000
];
public clients = [
    201,
    140,
    80,
    150,
    190,
    170,
    202
];

public chartData = {
  labels: this.labels,
  datasets: [
      {
          type: 'line',
          label: "Revenues",
          data: this.revenues,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          yAxisID: 'revenues',
      },
      {
          label: "Clients",
          data: this.clients,
          borderColor: 'rgba(0, 0, 0, 0)',
          backgroundColor: 'rgba(192, 75, 192, 0.5)',
          yAxisID: 'clients',
      }
  ]
}

public options: {
  scales: {
    yAxes: [
      {
        id: "revenues",
        ticks: {
            beginAtZero: true,
        },
        scaleLabel: {
            display: true,
            labelString: 'Revenues (U$)'
          }
    },
    {
        id: "clients",
        position: 'right',
        ticks: {
            beginAtZero: true,
        },
        scaleLabel: {
            display: true,
            labelString: 'Clients'
          }
    }
    ]
  }
}

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    let canvasContext = this.chartCanvas.nativeElement.getContext('2d');
    this.chartCanvas = new Chart(canvasContext , {  
    type: 'bar',
    data: this.chartData,  
    options: {
      scales: {
        yAxes: [
          {
            id: "revenues",
            ticks: {
                beginAtZero: true,
            },
            scaleLabel: {
                display: true,
                labelString: 'Revenues (U$)'
              }
        },
        {
            id: "clients",
            position: 'right',
            ticks: {
                beginAtZero: true,
            },
            scaleLabel: {
                display: true,
                labelString: 'Clients'
              }
        }
        ]
      }
    }}
    );
      
  
  }

}
