import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiversPage } from './givers.page';

const routes: Routes = [
  {
    path: '',
    component: GiversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiversPageRoutingModule {}
