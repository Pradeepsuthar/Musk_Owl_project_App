import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrolledPage } from './enrolled.page';

const routes: Routes = [
  {
    path: '',
    component: EnrolledPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrolledPageRoutingModule {}
