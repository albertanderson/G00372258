import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeakyPageRoutingModule } from './peaky-routing.module';

import { PeakyPage } from './peaky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeakyPageRoutingModule
  ],
  declarations: [PeakyPage]
})
export class PeakyPageModule {}
