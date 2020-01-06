import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinnhanPage } from './tinnhan.page';

const routes: Routes = [
  {
    path: '',
    component: TinnhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinnhanPageRoutingModule {}
