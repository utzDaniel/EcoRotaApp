import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferenciaContaPage } from './preferencia-conta.page';

const routes: Routes = [
  {
    path: '',
    component: PreferenciaContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferenciaContaPageRoutingModule {}
