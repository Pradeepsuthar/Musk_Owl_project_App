import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewIssuesPageRoutingModule } from './new-issues-routing.module';

import { NewIssuesPage } from './new-issues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewIssuesPageRoutingModule
  ],
  declarations: [NewIssuesPage]
})
export class NewIssuesPageModule {}
