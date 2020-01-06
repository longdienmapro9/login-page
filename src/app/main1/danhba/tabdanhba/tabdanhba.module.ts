import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabdanhbaPageRoutingModule } from './tabdanhba-routing.module';

import { TabdanhbaPage } from './tabdanhba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabdanhbaPageRoutingModule
  ],
  declarations: [TabdanhbaPage]
})
export class TabdanhbaPageModule {}
