import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContaPage } from './conta.page';

const routes: Routes = [
  {
    path: '',
    component: ContaPage
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar-conta/editar-conta.module').then( m => m.EditarContaPageModule)
  },
  {
    path: 'preferencia',
    loadChildren: () => import('./preferencia-conta/preferencia-conta.module').then( m => m.PreferenciaContaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContaPageRoutingModule {}
