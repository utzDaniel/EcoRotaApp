import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [authGuard]
  },
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'recuperar-conta',
    loadChildren: () => import('./pages/recuperar-conta/recuperar-conta.module').then( m => m.RecuperarContaPageModule)
  },
  {
    path: 'confirmacao',
    loadChildren: () => import('./pages/confirmacao/confirmacao.module').then( m => m.ConfirmacaoPageModule)
  },
  {
    path: 'verificacao',
    loadChildren: () => import('./pages/verificacao/verificacao.module').then( m => m.VerificacaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
