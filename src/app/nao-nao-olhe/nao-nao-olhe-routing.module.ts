import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoNaoOlhePage } from './nao-nao-olhe.page';

const routes: Routes = [
  {
    path: '',
    component: NaoNaoOlhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaoNaoOlhePageRoutingModule {}
