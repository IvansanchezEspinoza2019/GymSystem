import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackDetailsPage } from './pack-details';

@NgModule({
  declarations: [
    PackDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PackDetailsPage),
  ],
})
export class PackDetailsPageModule {}
