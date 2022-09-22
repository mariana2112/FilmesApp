import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OHomemInvisivelPageRoutingModule } from './o-homem-invisivel-routing.module';

import { OHomemInvisivelPage } from './o-homem-invisivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OHomemInvisivelPageRoutingModule
  ],
  declarations: [OHomemInvisivelPage]
})
export class OHomemInvisivelPageModule {}
