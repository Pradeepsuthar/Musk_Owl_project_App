import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiversPageRoutingModule } from './givers-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GiversPage } from './givers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    GiversPageRoutingModule
  ],
  declarations: [GiversPage]
})
export class GiversPageModule {}
