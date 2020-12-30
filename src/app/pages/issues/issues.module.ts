import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IssuesPageRoutingModule } from './issues-routing.module';

import { IssuesPage } from './issues.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    SuperTabsModule,
    IssuesPageRoutingModule
  ],
  declarations: [IssuesPage]
})
export class IssuesPageModule {}
