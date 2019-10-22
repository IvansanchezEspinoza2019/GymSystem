import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerAsistPage } from './customer-asist';

@NgModule({
  declarations: [
    CustomerAsistPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerAsistPage),
  ],
})
export class CustomerAsistPageModule {}
