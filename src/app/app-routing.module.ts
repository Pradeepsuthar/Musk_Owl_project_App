import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./pages/description/description.module').then( m => m.DescriptionPageModule)
  },
  {
    path: 'givers',
    loadChildren: () => import('./pages/givers/givers.module').then( m => m.GiversPageModule)
  },
  {
    path: 'enrolled',
    loadChildren: () => import('./pages/enrolled/enrolled.module').then( m => m.EnrolledPageModule)
  },
  {
    path: 'approved',
    loadChildren: () => import('./pages/approved/approved.module').then( m => m.ApprovedPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'issues',
    loadChildren: () => import('./pages/issues/issues.module').then( m => m.IssuesPageModule)
  },
  {
    path: 'my-issues',
    loadChildren: () => import('./pages/my-issues/my-issues.module').then( m => m.MyIssuesPageModule)
  },
  {
    path: 'new-issues',
    loadChildren: () => import('./pages/new-issues/new-issues.module').then( m => m.NewIssuesPageModule)
  },
  {
    path: 'in-progress',
    loadChildren: () => import('./pages/in-progress/in-progress.module').then( m => m.InProgressPageModule)
  },
  {
    path: 'completed',
    loadChildren: () => import('./pages/completed/completed.module').then( m => m.CompletedPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },  {
    path: 'select-issue-categories',
    loadChildren: () => import('./pages/select-issue-categories/select-issue-categories.module').then( m => m.SelectIssueCategoriesPageModule)
  },
  {
    path: 'distance',
    loadChildren: () => import('./pages/distance/distance.module').then( m => m.DistancePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
