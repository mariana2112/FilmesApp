import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OHomemInvisivelPage } from './o-homem-invisivel.page';

const routes: Routes = [
  {
    path: '',
    component: OHomemInvisivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OHomemInvisivelPageRoutingModule {}
