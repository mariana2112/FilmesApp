import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosPage } from './nos.page';

const routes: Routes = [
  {
    path: '',
    component: NosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosPageRoutingModule {}
