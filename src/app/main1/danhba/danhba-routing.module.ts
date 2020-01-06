import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhbaPage } from './danhba.page';

const routes: Routes = [
  {
    path: '',
    component: DanhbaPage
  },
  {
    path: 'tabdanhba',
    loadChildren: () => import('./tabdanhba/tabdanhba.module').then( m => m.TabdanhbaPageModule)
  },
  {
    path: 'tabofficialaccount',
    loadChildren: () => import('./tabofficialaccount/tabofficialaccount.module').then( m => m.TabofficialaccountPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DanhbaPageRoutingModule {}
