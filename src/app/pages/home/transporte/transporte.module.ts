import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TransportePageRoutingModule } from './transporte-routing.module';
import { TransportePage } from './transporte.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportePageRoutingModule,
    SharedModule
  ],
  declarations: [TransportePage]
})
export class TransportePageModule {}
