import { Component, Input, OnInit } from '@angular/core';
import { Viagens } from 'src/app/core/types/type';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-historico-items',
  templateUrl: './historico-items.component.html',
  styleUrls: ['./historico-items.component.scss'],
})
export class HistoricoItemsComponent  implements OnInit {

  @Input()
  viagens: Viagens[];

  index: number = 0;
  items: Viagens[] = [];


  constructor() { }

  ngOnInit() :void {
    this.atualizarItems(5);
  }

  private atualizarItems(count: number) :void {
    for(let i = 0; i < count; i++){
        if(this.index < this.viagens.length){
          this.items.push(this.viagens[this.index]);
          this.index++;
        }
    }
  }

  public onIonInfinite(event: any) :void {
    this.atualizarItems(3);
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
