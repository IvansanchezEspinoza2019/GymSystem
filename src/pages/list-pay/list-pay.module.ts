import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPayPage } from './list-pay';

@NgModule({
  declarations: [
    ListPayPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPayPage),
  ],
})
export class ListPayPageModule {}
