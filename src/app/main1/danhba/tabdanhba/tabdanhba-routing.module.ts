import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabdanhbaPage } from './tabdanhba.page';

const routes: Routes = [
  {
    path: '',
    component: TabdanhbaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabdanhbaPageRoutingModule {}
