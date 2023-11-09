import { Component, OnInit } from '@angular/core';
import { Viagens } from 'src/app/core/types/type';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  index: number = 0;
  viagens: Viagens[];
  items: Viagens[] = [];

  constructor() { }

  ngOnInit() {
    this.viagens = [
      {data: '2023-01-01 19:30:00', partida: 'MG-005, 70 - Rosario II, Sabará - MG, 34700-190', destino: 'MG-005, 70 - Rosario II, Sabará - MG, 34700-190', distancia: 10, tempo: 5, carbono: 12, dinheiro: 5.80},
      {data: '2023-01-02 19:00:00', partida: 'A', destino: 'C', distancia: 12, tempo: 9, carbono: 15, dinheiro: 5.50},
      {data: '2023-01-03 20:30:21', partida: 'A', destino: 'D', distancia: 14, tempo: 12, carbono: 19, dinheiro: 6.0},
      {data: '2023-01-04 17:30:00', partida: 'A', destino: 'E', distancia: 15, tempo: 15, carbono: 22, dinheiro: 8.80},
      {data: '2023-01-05 12:30:40', partida: 'A', destino: 'F', distancia: 18, tempo: 5, carbono: 12, dinheiro: 7.80},
      {data: '2023-02-01 14:30:05', partida: 'C', destino: 'A', distancia: 11, tempo: 7, carbono: 22, dinheiro: 15.80},
      {data: '2023-02-01 15:30:03', partida: 'C', destino: 'B', distancia: 13, tempo: 9, carbono: 13, dinheiro: 22.80},
      {data: '2023-02-02 20:30:00', partida: 'C', destino: 'D', distancia: 19, tempo: 11, carbono: 18, dinheiro: 12.80},
      {data: '2023-02-03 08:30:10', partida: 'C', destino: 'E', distancia: 20, tempo: 7, carbono: 21, dinheiro: 7.80},
      {data: '2023-03-05 22:30:20', partida: 'C', destino: 'F', distancia: 9, tempo: 20, carbono: 27, dinheiro: 3.80},
      {data: '2023-02-02 20:30:00', partida: 'D', destino: 'A', distancia: 19, tempo: 11, carbono: 18, dinheiro: 12.80},
      {data: '2023-02-03 08:30:10', partida: 'D', destino: 'E', distancia: 20, tempo: 7, carbono: 21, dinheiro: 7.80},
      {data: '2023-03-05 22:30:20', partida: 'D', destino: 'F', distancia: 9, tempo: 20, carbono: 27, dinheiro: 3.80},
    ]
  }

}
