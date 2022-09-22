import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AFreiraPageRoutingModule } from './a-freira-routing.module';

import { AFreiraPage } from './a-freira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AFreiraPageRoutingModule
  ],
  declarations: [AFreiraPage]
})
export class AFreiraPageModule {}
