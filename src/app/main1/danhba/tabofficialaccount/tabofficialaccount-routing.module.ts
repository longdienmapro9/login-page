import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabofficialaccountPage } from './tabofficialaccount.page';

const routes: Routes = [
  {
    path: '',
    component: TabofficialaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabofficialaccountPageRoutingModule {}
