import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewIssuesPage } from './new-issues.page';

const routes: Routes = [
  {
    path: '',
    component: NewIssuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewIssuesPageRoutingModule {}
