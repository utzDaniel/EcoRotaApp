import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BuscarBarComponent } from 'src/app/shared/buscar-bar/buscar-bar.component';
import { HistoricoItemsComponent } from 'src/app/shared/historico-items/historico-items.component';
import { CommonModule } from '@angular/common';
import { ChartBarComponent } from 'src/app/shared/chart-bar/chart-bar.component';
import { TrajetoDrawerComponent } from 'src/app/shared/trajeto-drawer/trajeto-drawer.component';
import { TrajetoCardComponent } from 'src/app/shared/trajeto-card/trajeto-card.component';
import { RecursoCardComponent } from 'src/app/shared/recurso-card/recurso-card.component';

@NgModule({
  declarations:[BuscarBarComponent, 
    HistoricoItemsComponent, 
    ChartBarComponent, 
    TrajetoDrawerComponent,
    TrajetoCardComponent,
    RecursoCardComponent],
  imports: [IonicModule, CommonModule],
  exports: [BuscarBarComponent,
     HistoricoItemsComponent, 
     ChartBarComponent, 
     TrajetoDrawerComponent, 
     TrajetoCardComponent,
     RecursoCardComponent],
})
export class SharedModule {}
