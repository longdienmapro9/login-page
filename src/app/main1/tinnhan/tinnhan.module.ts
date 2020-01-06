import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinnhanPageRoutingModule } from './tinnhan-routing.module';

import { TinnhanPage } from './tinnhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinnhanPageRoutingModule
  ],
  declarations: [TinnhanPage]
})
export class TinnhanPageModule {}
