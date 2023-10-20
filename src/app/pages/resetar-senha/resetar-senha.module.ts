import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetarSenhaPageRoutingModule } from './resetar-senha-routing.module';

import { ResetarSenhaPage } from './resetar-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetarSenhaPageRoutingModule
  ],
  declarations: [ResetarSenhaPage]
})
export class ResetarSenhaPageModule {}
