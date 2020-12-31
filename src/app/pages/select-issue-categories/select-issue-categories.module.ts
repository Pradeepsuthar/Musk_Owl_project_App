import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectIssueCategoriesPageRoutingModule } from './select-issue-categories-routing.module';

import { SelectIssueCategoriesPage } from './select-issue-categories.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    SelectIssueCategoriesPageRoutingModule
  ],
  declarations: [SelectIssueCategoriesPage]
})
export class SelectIssueCategoriesPageModule {}
