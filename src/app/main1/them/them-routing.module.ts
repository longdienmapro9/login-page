import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemPage } from './them.page';

const routes: Routes = [
  {
    path: '',
    component: ThemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemPageRoutingModule {}
