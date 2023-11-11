import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BuscarBarComponent } from 'src/app/shared/buscar-bar/buscar-bar.component';
import { HistoricoItemsComponent } from 'src/app/shared/historico-items/historico-items.component';
import { CommonModule } from '@angular/common';
import { ChartBarComponent } from 'src/app/shared/chart-bar/chart-bar.component';

@NgModule({
  declarations:[BuscarBarComponent, HistoricoItemsComponent, ChartBarComponent],
  imports: [IonicModule, CommonModule],
  exports: [BuscarBarComponent, HistoricoItemsComponent, ChartBarComponent],
})
export class SharedModule {}
