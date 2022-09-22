import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AFreiraPage } from './a-freira.page';

const routes: Routes = [
  {
    path: '',
    component: AFreiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AFreiraPageRoutingModule {}
