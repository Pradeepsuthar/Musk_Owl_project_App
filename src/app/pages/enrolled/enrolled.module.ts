import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrolledPageRoutingModule } from './enrolled-routing.module';

import { EnrolledPage } from './enrolled.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    EnrolledPageRoutingModule
  ],
  declarations: [EnrolledPage]
})
export class EnrolledPageModule {}
