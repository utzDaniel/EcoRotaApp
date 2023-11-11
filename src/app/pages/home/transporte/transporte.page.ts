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
  openDrawer: boolean;
  classOpenDrawer: boolean;

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
    this.openDrawer = false;
    this.classOpenDrawer = true;
  }

  retornoLocalPartida(dados: any) :void {
    this.openDrawer = false;
    this.classOpenDrawer = true;
    this.localPartida = dados;
    this.dataLocalDestino = [...this.dataLocalPartida.filter((d) => d !== this.localPartida)];
  }

  retornoLocalDestino(dados: any) :void {
    this.localDestino = dados;
    if(dados) this.openDrawer = true;
    else this.openDrawer = false;
    this.classOpenDrawer = true;
  }

  selecionadoTrajeto(informacao: string) {
    console.log("pai" + informacao);
    this.classOpenDrawer = !this.classOpenDrawer;
  }

}
