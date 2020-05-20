import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinechartComponent } from './linechart/linechart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { MixChartComponent } from './mix-chart/mix-chart.component';
import { CyclePlotComponent } from './cycle-plot/cycle-plot.component';
import { HistogramChartComponent } from './histogram-chart/histogram-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LinechartComponent,
    BarChartComponent,
    MixChartComponent,
    CyclePlotComponent,
    HistogramChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
