import { Component, OnInit, Input } from '@angular/core';
import { HistoricoItem } from 'src/app/core/types/type';

@Component({
  selector: 'app-recurso-card',
  templateUrl: './recurso-card.component.html',
  styleUrls: ['./recurso-card.component.scss'],
})
export class RecursoCardComponent  implements OnInit {

  @Input()
  viagens: HistoricoItem;

  constructor() { }

  ngOnInit() {}

}
