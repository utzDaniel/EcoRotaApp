import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
    {
      path: 'transporte',
      loadChildren: () => import('./transporte/transporte.module').then( m => m.TransportePageModule)
    },
    {
      path: 'conta',
      loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
    },
    {
      path: 'historico',
      loadChildren: () => import('./historico/historico.module').then( m => m.HistoricoPageModule)
    },
    {
      path: '',
      redirectTo: 'transporte',
      pathMatch: 'full'
    }
  ]
}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class HomePageRoutingModule {}
