import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllcustomersPage } from './allcustomers';

@NgModule({
  declarations: [
    AllcustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(AllcustomersPage),
  ],
})
export class AllcustomersPageModule {}
