import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyIssuesPageRoutingModule } from './my-issues-routing.module';

import { MyIssuesPage } from './my-issues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyIssuesPageRoutingModule
  ],
  declarations: [MyIssuesPage]
})
export class MyIssuesPageModule {}
