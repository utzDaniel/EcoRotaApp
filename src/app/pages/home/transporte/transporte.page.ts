import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage implements OnInit {

  dataLocalPartida: String[];
  dataLocalDestino: String[];
  localPartida: string | undefined;
  localDestino: string | undefined;

  constructor() { }

  ngOnInit() {
    this.dataLocalPartida = [
      'Amsterdam',
      'Buenos Aires',
      'Cairo',
      'Geneva',
      'Hong Kong',
      'Istanbul',
      'London',
      'Madrid',
      'New York',
      'Panama City',
    ];

  }

  retornoLocalPartida(dados: any) :void {
    this.localPartida = dados;
    this.dataLocalDestino = [...this.dataLocalPartida.filter((d) => d !== this.localPartida)];
  }

  retornoLocalDestino(dados: any) :void {
    this.localDestino = dados;
  }

}
