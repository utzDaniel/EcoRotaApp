import { Component, Input, OnInit } from '@angular/core';
import { Deslocamento } from 'src/app/core/types/type';

@Component({
  selector: 'app-trajeto-card',
  templateUrl: './trajeto-card.component.html',
  styleUrls: ['./trajeto-card.component.scss'],
})
export class TrajetoCardComponent  implements OnInit {

  @Input()
  deslocamentos: Deslocamento[];

  constructor() { }

  ngOnInit() {}

  isBus(nome: string) :boolean  {
    return nome == 'Ônibus';
  }

  selectIcon(nome: string) :string  {
    if(nome == 'Ônibus') return 'bus'
    else if(nome == 'Caminhada') return 'walk'
    else if(nome == 'Bicicleta') return 'bicycle'
    else return 'subway';
  }

  selectText(deslocamento: Deslocamento) :number  {
    if(deslocamento.nome == 'Ônibus') return deslocamento.numero;
    else return deslocamento.recurso.tempo;
  }

}
