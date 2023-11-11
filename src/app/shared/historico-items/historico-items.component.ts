import { Component, Input, OnInit } from '@angular/core';
import { HistoricoItem } from 'src/app/core/types/type';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-historico-items',
  templateUrl: './historico-items.component.html',
  styleUrls: ['./historico-items.component.scss'],
})
export class HistoricoItemsComponent  implements OnInit {

  @Input()
  historicoItem: HistoricoItem[];

  index: number = 0;
  items: HistoricoItem[] = [];


  constructor() { }

  ngOnInit() :void {
    if(this.historicoItem.length) {
      this.atualizarItems(5);
    }
  }

  private atualizarItems(count: number) :void {
    for(let i = 0; i < count; i++){
        if(this.index < this.historicoItem.length){
          this.items.push(this.historicoItem[this.index]);
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
