import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Main1Page } from './main1.page';

const routes: Routes = [
  {
    path: '',
    component: Main1Page
  },
  {
    path: 'tinnhan',
    loadChildren: () => import('./tinnhan/tinnhan.module').then( m => m.TinnhanPageModule)
  },
  {
    path: 'danhba',
    loadChildren: () => import('./danhba/danhba.module').then( m => m.DanhbaPageModule)
  },
  {
    path: 'nhom',
    loadChildren: () => import('./nhom/nhom.module').then( m => m.NhomPageModule)
  },
  {
    path: 'nhatky',
    loadChildren: () => import('./nhatky/nhatky.module').then( m => m.NhatkyPageModule)
  },
  {
    path: 'them',
    loadChildren: () => import('./them/them.module').then( m => m.ThemPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Main1PageRoutingModule {}
