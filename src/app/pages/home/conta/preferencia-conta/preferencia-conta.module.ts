import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferenciaContaPageRoutingModule } from './preferencia-conta-routing.module';

import { PreferenciaContaPage } from './preferencia-conta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferenciaContaPageRoutingModule
  ],
  declarations: [PreferenciaContaPage]
})
export class PreferenciaContaPageModule {}
