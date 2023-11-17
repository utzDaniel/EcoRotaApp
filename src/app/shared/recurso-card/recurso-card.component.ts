import { Component, OnInit, Input } from '@angular/core';
import { Recurso } from 'src/app/core/types/type';

@Component({
  selector: 'app-recurso-card',
  templateUrl: './recurso-card.component.html',
  styleUrls: ['./recurso-card.component.scss'],
})
export class RecursoCardComponent  implements OnInit {

  @Input()
  recurso: Recurso;

  constructor() { }

  ngOnInit() {}

}
