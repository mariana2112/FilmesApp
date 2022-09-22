import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NosPageRoutingModule } from './nos-routing.module';

import { NosPage } from './nos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NosPageRoutingModule
  ],
  declarations: [NosPage]
})
export class NosPageModule {}
