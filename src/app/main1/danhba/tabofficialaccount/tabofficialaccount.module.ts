import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabofficialaccountPageRoutingModule } from './tabofficialaccount-routing.module';

import { TabofficialaccountPage } from './tabofficialaccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabofficialaccountPageRoutingModule
  ],
  declarations: [TabofficialaccountPage]
})
export class TabofficialaccountPageModule {}
