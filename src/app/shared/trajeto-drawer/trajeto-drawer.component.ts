import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Mapa } from 'src/app/core/types/type';
import { Opcao } from 'src/app/core/types/type';

@Component({
  selector: 'app-trajeto-drawer',
  templateUrl: './trajeto-drawer.component.html',
  styleUrls: ['./trajeto-drawer.component.scss'],
})
export class TrajetoDrawerComponent  implements OnInit {

  @Input() 
  mapa: Mapa;

  @Output() 
  selecionado = new EventEmitter<number>();

  open: boolean;
  index: number;

  constructor() { }

  ngOnInit() {
    this.open = true;
    this.index = -1;
  }

  openOrClossed() :void {
    this.index = -1;
    this.open = !this.open;
    this.selecionado.emit(this.index);
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

  dataChegada(minutos: number): Date {
    return new Date(new Date().getTime() + minutos * 60000);
  }

  opcaoSelecionado(opcao: Opcao) :void {
    this.index = this.mapa.opcoes.indexOf(opcao);
    this.open = false;
    this.selecionado.emit(this.index);
  }

  isSelecionado() :boolean {
    return this.index >= 0;
  }

  buscarSelecionado() :Opcao {
    return this.mapa.opcoes[this.index];
  }

}
