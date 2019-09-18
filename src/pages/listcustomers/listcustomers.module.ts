import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListcustomersPage } from './listcustomers';

@NgModule({
  declarations: [
    ListcustomersPage,
  ],
  imports: [
    IonicPageModule.forChild(ListcustomersPage),
  ],
})
export class ListcustomersPageModule {}
