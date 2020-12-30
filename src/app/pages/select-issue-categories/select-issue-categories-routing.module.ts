import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectIssueCategoriesPage } from './select-issue-categories.page';

const routes: Routes = [
  {
    path: '',
    component: SelectIssueCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectIssueCategoriesPageRoutingModule {}
