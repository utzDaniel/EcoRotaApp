import { Component, Input, OnInit } from '@angular/core';
import { Trajeto } from 'src/app/core/types/type';

@Component({
  selector: 'app-trajeto-card',
  templateUrl: './trajeto-card.component.html',
  styleUrls: ['./trajeto-card.component.scss'],
})
export class TrajetoCardComponent  implements OnInit {

  @Input()
  itens: Trajeto[];

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

  selectText(trajeto: Trajeto) :number  {
    if(trajeto.nome == 'Ônibus') return trajeto.numero;
    else return trajeto.tempo;
  }

}
