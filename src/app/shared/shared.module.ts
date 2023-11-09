import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BuscarBarComponent } from 'src/app/shared/buscar-bar/buscar-bar.component';
import { HistoricoItemsComponent } from 'src/app/shared/historico-items/historico-items.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[BuscarBarComponent, HistoricoItemsComponent],
  imports: [IonicModule, CommonModule],
  exports: [BuscarBarComponent, HistoricoItemsComponent],
})
export class SharedModule {}
