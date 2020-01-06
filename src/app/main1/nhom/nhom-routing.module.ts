import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhomPage } from './nhom.page';

const routes: Routes = [
  {
    path: '',
    component: NhomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhomPageRoutingModule {}
