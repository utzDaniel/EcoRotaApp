import { Component, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss'],
})
export class ChartBarComponent  implements OnInit {

  @ViewChild('barCanvas') barCanvas: any;
  barChart: any;
 

  constructor() { }


  ngOnInit() {
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.barChart = this.getBarChart();
    }, 150);
  }

  getChart(context:any, chartType:any, data:any, options?:any) {
    const a = new Chart(context, {
      data,
      options,
      type: chartType
    });
    console.log(a);
    return a;
  }

  getBarChart(){
    const data = {
      labels: ['Distancia', 'Tempo', 'Carbono', 'Dinheiro'],
      datasets: [{
        label: 'Porcentagem',
        data: [10, 15, 10, 80],
        backgroundColor: ['#4F94FF', '#FFD534', '#ff4961','#2FDF75'],
        borderColor: 'rgba(255,255,255)',
        borderWidth: 0,
        borderRadius: 0,
        hoverBorderWidth: 2
    }]
    };
    const options = {
      scales: {
        y: {
          axis: "y",
          beginAtZero: true,
          border: {
            color: 'rgba(255,255,255)',
            display: false,
            dash: [],
            dashOffset: 0,
            width: 1
          },
          bounds: "ticks",
          clip: false,
          display: 'auto',
          grace: 0,
          grid: {
            color: 'rgba(255,255,255)',
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            lineWidth: 1,
            offset: false,
            tickColor: 'rgba(255,255,255)',
            tickLength: 0,
            tickWidth: 10
          },
          id:"y",
          min: 0,
          max: 100,
          offset: false, 
          position: "left", 
          reverse: false,
          ticks: {
            align: "center",
            autoSkip: true,
            autoSkipPadding: 1,
            backdropColor: "rgba(255,255,255)",
            backdropPadding: 2,
            color: "rgba(255,255,255)",
            crossAlign: "near",
            display: true,
            labelOffset: 0,
            major: {},
            maxRotation: 50,
            minRotation: 0,
            minor: {},
            mirror: false,
            padding: 3,
            showLabelBackdrop: false,
            textStrokeColor: "",
            textStrokeWidth: 0,
            maxTicksLimit: 5,
            count: 5
          },
          title: {
            color: 'rgba(255,255,255)',
            display: false,
            padding: {
              bottom: 4,
              top: 4,
            }
          },
          type: "linear", 
          backgroundColor: '#28BA62'
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
          display: true,
          grace: 0,
          grid: {
            color: 'rgba(255,255,255)',
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
            lineWidth: 1,
            offset: false,
            tickColor: 'rgba(255,255,255)',
            tickLength: 3,
            tickWidth: 0
          },
          id:"x",
          offset: true, 
          position: "bottom", 
          reverse: false,
          ticks: {
            align: "center",
            autoSkip: true,
            autoSkipPadding: 3,
            backdropColor: "rgba(255,255,255)",
            backdropPadding: 2,
            color: "rgba(255,255,255)",
            crossAlign: "near",
            display: true,
            labelOffset: 0,
            major: {},
            maxRotation: 50,
            minRotation: 0,
            minor: {},
            mirror: false,
            padding: 3,
            showLabelBackdrop: false,
            textStrokeColor: "",
            textStrokeWidth: 0,
            stepSize: 0.5
          },
          title: {
            color: 'rgba(255,255,255)',
            display: true,
            padding: {
              bottom: 4,
              top: 4,
            }
          },
          type: "category",
          weight: 10,
          suggestedMin: 50
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
            display: true,
            text: "total"
          }
          
        }
      }
    }

    return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
  }
}
