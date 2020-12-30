import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyIssuesPage } from './my-issues.page';

const routes: Routes = [
  {
    path: '',
    component: MyIssuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyIssuesPageRoutingModule {}
