import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'venom',
    loadChildren: () => import('./venom/venom.module').then( m => m.VenomPageModule)
  },
  {
    path: 'nao-nao-olhe',
    loadChildren: () => import('./nao-nao-olhe/nao-nao-olhe.module').then( m => m.NaoNaoOlhePageModule)
  },
  {
    path: 'thor-amor-e-trovao',
    loadChildren: () => import('./thor-amor-e-trovao/thor-amor-e-trovao.module').then( m => m.ThorAmorETrovaoPageModule)
  },
  {
    path: 'a-freira',
    loadChildren: () => import('./a-freira/a-freira.module').then( m => m.AFreiraPageModule)
  },
  {
    path: 'rogai-por-nos',
    loadChildren: () => import('./rogai-por-nos/rogai-por-nos.module').then( m => m.RogaiPorNosPageModule)
  },
  {
    path: 'o-homem-invisivel',
    loadChildren: () => import('./o-homem-invisivel/o-homem-invisivel.module').then( m => m.OHomemInvisivelPageModule)
  },  {
    path: 'nos',
    loadChildren: () => import('./nos/nos.module').then( m => m.NosPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
