import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as _ from 'lodash';

@Component({
  selector: 'app-cycle-plot',
  templateUrl: './cycle-plot.component.html',
  styleUrls: ['./cycle-plot.component.scss']
})
export class CyclePlotComponent implements OnInit {

  @ViewChild('chartCanvas', { static: false })
  private chartCanvas: ElementRef<HTMLCanvasElement>;

  public chart: Chart;
  public labels: string[]=[];
  constructor() { 

    const min : number = 0;
    const max : number = 74
    this.labels =  _.range(min,max,10);
  }

  ngOnInit() {
  }

  ngAfterViewInit(){

    let canvasContext = this.chartCanvas.nativeElement.getContext('2d');
    this.chartCanvas = new Chart(canvasContext , {type: "line",
     data: {
              label: this.labels,
              datasets: [{
                  type: "line", 
                  label:"Cycle",        
                  data: [
                      {x:1,y:644.3472},{x:2,y:619.2361},{x:3,y:643.993},{x:4,y:653.493},{x:5,y:645.6667},{x:6,y:647.8958},{x:7,y:641.9305},{x:8,y:638.4236},{x:9,y:635.7778},
                      {x:10,y:632.2639},{x:11,y:628.5347},{x:12,y:625.118},{x:13,y:623.9722},{x:14,y:620.5764},{x:15,y:616.8264},{x:16,y:614.9305},{x:17,y:611.8125},{x:18,y:608.507},{x:19,y:606.3611},
                      {x:20,y:602.5764},{x:21,y:597.6945},{x:22,y:598.8889},{x:23,y:596.757},{x:24,y:594.1945},{x:25,y:591.625},{x:26,y:873.6042},{x:27,y:870.5903},{x:28,y:867.0764},{x:29,y:862.6458},
                      {x:30,y:859.6528},{x:31,y:854.0139},{x:32,y:856.9722},{x:33,y:852.0972},{x:34,y:852.4097},{x:35,y:847.3195},{x:36,y:842.9097},{x:37,y:717.1597},{x:38,y:696.2014},{x:39,y:693.6875},
                      {x:40,y:703.507},{x:41,y:705.6805},{x:42,y:702.5903},{x:43,y:697.6458},{x:44,y:692.9861},{x:45,y:690.368},{x:46,y:687.1945},{x:47,y:684.4514},{x:48,y:680.1042},{x:49,y:676.6042},
                      {x:50,y:675.1042},{x:51,y:669.8055},{x:52,y:667.5764},{x:53,y:663.3611},{x:54,y:661.632},{x:55,y:655.993},{x:56,y:652.8958},{x:57,y:650.4167},{x:58,y:649.2361},{x:59,y:646.9236},
                      {x:60,y:641.8195},{x:61,y:640.3333},{x:62,y:939.3611},{x:63,y:936.0695},{x:64,y:929.4028},{x:65,y:925.9861},{x:66,y:923.6528},{x:67,y:922.2083},{x:68,y:921.618},{x:69,y:916.6875},
                      {x:70,y:912.9861},{x:71,y:909.8403},{x:72,y:907.4097}
                    ],
                    fill: false,
                    backgroundColor: "black",
                    borderColor: "green",
                    pointBorderColor: "purple",
                    pointBackgroundColor: "purple",
                    pointBorderWidth: 1,
                    pointHoverRadius: 4,
                    pointHoverBackgroundColor: "purple",
                    pointHoverBorderColor: "purple",
                    pointHoverBorderWidth: 2,
                    tension: 0,
                    borderWidth: 1
                },
                {
                  type: "line", 
                  label:"Intensity",        
                  data: [
                      {x:1,y:185.4167},{x:2,y:202.1597},{x:3,y:208.0556},{x:4,y:209.0069},{x:5,y:198.8542},{x:6,y:201.2361},{x:7,y:199.6319},{x:8,y:199.9514},{x:9,y:198.8958},
                      {x:10,y:197.7153},{x:11,y:197.0417},{x:12,y:196.8056},{x:13,y:195.7361},{x:14,y:194.1528},{x:15,y:192.8333},{x:16,y:192.8542},{x:17,y:190.6111},{x:18,y:191.3194},{x:19,y:189.8958},
                      {x:20,y:189.3819},{x:21,y:187.2361},{x:22,y:187.1319},{x:23,y:187.0764},{x:24,y:187.2569},{x:25,y:185.8403},{x:26,y:271.257},{x:27,y:271.75},{x:28,y:269.5625},{x:29,y:267.0625},
                      {x:30,y:267.7361},{x:31,y:264.6945},{x:32,y:265.868},{x:33,y:263.7708},{x:34,y:264.0625},{x:35,y:262.6111},{x:36,y:262.9375},{x:37,y:204.9514},{x:38,y:220.6597},{x:39,y:218.7361},
                      {x:40,y:219.8333},{x:41,y:211.6042},{x:42,y:212.3819},{x:43,y:211.7153},{x:44,y:210.875},{x:45,y:210.6944},{x:46,y:210.6806},{x:47,y:209.5833},{x:48,y:208.875},{x:49,y:207.1944},
                      {x:50,y:206.625},{x:51,y:205.2986},{x:52,y:204.3403},{x:53,y:203.5694},{x:54,y:202.875},{x:55,y:201.8403},{x:56,y:200.9931},{x:57,y:200.3819},{x:58,y:198.875},{x:59,y:198.0486},
                      {x:60,y:197.6181},{x:61,y:196.9236},{x:62,y:284.9028},{x:63,y:283.8472},{x:64,y:282.3055},{x:65,y:280.7292},{x:66,y:280.6597},{x:67,y:280.4514},{x:68,y:283.2014},{x:69,y:279.7222},
                      {x:70,y:277.5486},{x:71,y:276.7708},{x:72,y:277.132}
                    ],
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
                    borderWidth: 1
                }
              ]

          },
          options: {
              scales: {
            xAxes: [{
              position: "bottom",
              type:"linear",
              scaleLabel: {
                display: true,
                labelString: "Cycle",
                // fontFamily: "Montserrat",
                fontColor: "black",
              },
              ticks: {
                fontFamily: "Montserrat",
                min:0,
                max:74
              },
              gridLines: {
                show: true,
              }
            }],
            yAxes: [{
              position: "left",
              scaleLabel: {
                display: true,
                labelString: "Intensity",
                // fontFamily: "Montserrat",
                fontColor: "black",
              },
              ticks: {
                // fontFamily: "Montserrat",
                min:0,
                max:1033.297
              },
              gridLines: {
                show: true,
              }
            }]
          }
      }});
  }
  
}
