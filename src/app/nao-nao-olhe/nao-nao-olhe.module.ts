import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaoNaoOlhePageRoutingModule } from './nao-nao-olhe-routing.module';

import { NaoNaoOlhePage } from './nao-nao-olhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaoNaoOlhePageRoutingModule
  ],
  declarations: [NaoNaoOlhePage]
})
export class NaoNaoOlhePageModule {}
