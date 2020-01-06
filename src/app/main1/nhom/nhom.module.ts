import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhomPageRoutingModule } from './nhom-routing.module';

import { NhomPage } from './nhom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhomPageRoutingModule
  ],
  declarations: [NhomPage]
})
export class NhomPageModule {}
