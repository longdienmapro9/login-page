import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemPageRoutingModule } from './them-routing.module';

import { ThemPage } from './them.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThemPageRoutingModule
  ],
  declarations: [ThemPage]
})
export class ThemPageModule {}
