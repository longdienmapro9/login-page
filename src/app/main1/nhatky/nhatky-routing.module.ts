import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhatkyPage } from './nhatky.page';

const routes: Routes = [
  {
    path: '',
    component: NhatkyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhatkyPageRoutingModule {}
