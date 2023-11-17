import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import Chart from 'chart.js/auto';
import { Point } from 'src/app/core/types/type';

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss'],
})
export class ChartLineComponent  implements OnInit, AfterViewInit  {

  @ViewChild('lineChart') lineCanvas: any;
  lineChart: any;

  chart: Chart;

  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit(){
    this.lineChart = this.getLineCanvasChart();
  }

  getChart(context:any, chartType:any, data:any, options?:any) {
    this.chart = new Chart(context, {
      data,
      options,
      type: chartType
    });
    return this.chart;
  }

  generateRange(n: number){
    return Array.from({length: n}, (_, i) => i + 1);
}

  getLineCanvasChart(){
    const labels = this.generateRange(813);
    const data = {
      labels: labels,
      datasets: [{
        label: 'Ponto',
        data: [],
        backgroundColor: 'rgb(82,131,240)',
        fill: false,
        borderColor: 'rgb(82,131,240)',
        tension: 0.1,
        borderWidth: 0,
        pointBorderWidth: 1,
        pointHitRadius: 1
      }]
    };
    
    const options = {
      scales: {
        y: {
          axis: "y",
          beginAtZero: false,
          border: {
            color: 'rgba(255,255,255)',
            display: false,
            dash: [],
            dashOffset: 0,
            width: 0
          },
          bounds: "ticks",
          clip: false,
          display: false,
          grace: 0,
          grid: {
            color: 'rgba(255,255,255)',
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            lineWidth: 0,
            offset: false,
            tickColor: 'rgba(255,255,255)',
            tickLength: 0,
            tickWidth: 0
          },
          id:"y",
          offset: false, 
          position: "left", 
          reverse: true,
          ticks: {
            align: "center",
            autoSkip: false,
            autoSkipPadding: 0,
            backdropColor: "rgba(255,255,255)",
            backdropPadding: 0,
            color: "rgba(255,255,255)",
            crossAlign: "near",
            display: false,
            labelOffset: 0,
            major: {},
            maxRotation: 50,
            minRotation: 0,
            minor: {},
            mirror: false,
            padding: 0,
            showLabelBackdrop: false,
            textStrokeColor: "",
            textStrokeWidth: 0
          },
          title: {
            color: 'rgba(255,255,255)',
            display: false,
            padding: {
              bottom: 0,
              top: 0,
            }
          },
          type: "linear", 
          backgroundColor: 'rgb(0,0,0)',
          min: 0,
          max: 834,
        },
        x: {
          axis: "x",
          beginAtZero: false,
          border: {
            color: 'rgba(255,255,255)',
            display: false,
            dash: [],
            dashOffset: 0,
            width: 0
          },
          bounds: "ticks",
          clip: true,
          display: false,
          grace: 0,
          grid: {
            color: 'rgba(255,255,255)',
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            lineWidth: 0,
            offset: false,
            tickColor: 'rgba(255,255,255)',
            tickLength: 0,
            tickWidth: 0
          },
          id:"x",
          offset: false, 
          position: "bottom", 
          reverse: false,
          ticks: {
            align: "center",
            autoSkip: false,
            autoSkipPadding: 0,
            backdropColor: "rgba(255,255,255)",
            backdropPadding: 0,
            color: "rgba(255,255,255)",
            crossAlign: "near",
            display: false,
            labelOffset: 0,
            major: {},
            maxRotation: 50,
            minRotation: 0,
            minor: {},
            mirror: false,
            padding: 0,
            showLabelBackdrop: false,
            textStrokeColor: "",
            textStrokeWidth: 0
          },
          title: {
            color: 'rgba(255,255,255)',
            display: false,
            padding: {
              bottom: 0,
              top: 0,
            }
          },
          type: "category",
          backgroundColor: 'rgb(0,0,0)'
        }
      },
      plugins: {
        legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)',
              display: false
          },
          title:{
            color: 'rgb(255, 99, 132)',
            display: false,
            text: "total"
          }
        }
      }
    }
    
    return this.getChart(this.lineCanvas.nativeElement, 'line', data, options);
  }

  sizeData() :number {
    return this.chart.data.datasets[0].data.length;
  }

  addData(data: Point):void {
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    this.chart.update();
  }

  newData(data: Point[]) :void {
    this.chart.data.datasets[0].data = data;
    this.chart.update();
  }

  removeUltimoData() :void {
    this.chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    this.chart.update();
  }

}
