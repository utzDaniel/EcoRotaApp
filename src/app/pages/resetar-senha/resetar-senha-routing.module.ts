import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetarSenhaPage } from './resetar-senha.page';

const routes: Routes = [
  {
    path: '',
    component: ResetarSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetarSenhaPageRoutingModule {}
