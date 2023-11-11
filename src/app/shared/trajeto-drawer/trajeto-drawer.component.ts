import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Trajeto } from 'src/app/core/types/type';
import { HistoricoItem } from 'src/app/core/types/type';

@Component({
  selector: 'app-trajeto-drawer',
  templateUrl: './trajeto-drawer.component.html',
  styleUrls: ['./trajeto-drawer.component.scss'],
})
export class TrajetoDrawerComponent  implements OnInit {

  @Output() 
  selecionado = new EventEmitter<number>();

  open: boolean;
  itens: Trajeto[];
  lista: number[];
  viagens: HistoricoItem;
  trajetoSecionado: number;

  dataAtual: Date;

  constructor() { }

  ngOnInit() {
    this.lista = [0,1,2];
    this.open = true;
    this.trajetoSecionado = -1;
    this.itens = [{
      nome: 'Caminhada', numero: 0, tempo: 4
    },{
      nome: 'Ônibus', numero: 7449, tempo: 20
    },{
      nome: 'Bicicleta', numero: 0, tempo: 5
    },{
      nome: 'Caminhada', numero: 0, tempo: 9
    }
  ];
  this.viagens = {data: '2023-01-01 19:30:00', partida: 'MG-005, 70 - Rosario II, Sabará - MG, 34700-190', destino: 'MG-005, 70 - Rosario II, Sabará - MG, 34700-190', distancia: 10, tempo: 70, carbono: 12, dinheiro: 5.80}
  this.dataAtual = new Date(new Date().getTime() + this.viagens.tempo * 60000);
  }

  openOrClossed() :void {
    this.trajetoSecionado = -1;
    this.open = !this.open;
    this.selecionado.emit(this.trajetoSecionado);
  }

  formatarTempo(minutos: number): string {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
  
    if (horas > 0 && minutosRestantes > 0) {
      return `${horas}H ${minutosRestantes} min`;
    } else if (horas > 0) {
      return `${horas}H`;
    } else {
      return `${minutosRestantes} min`;
    }
  }

  itemSecionado(item: number) :void {
    this.trajetoSecionado = item;
    this.open = false;
    this.selecionado.emit(this.trajetoSecionado);
  }

  isSelecionado() :boolean {
    return this.trajetoSecionado >= 0;
  }

}
