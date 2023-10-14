import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmartionPageRoutingModule } from './confirmartion-routing.module';

import { ConfirmartionPage } from './confirmartion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmartionPageRoutingModule
  ],
  declarations: [ConfirmartionPage]
})
export class ConfirmartionPageModule {}
