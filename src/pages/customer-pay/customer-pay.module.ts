import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPayPage } from './customer-pay';

@NgModule({
  declarations: [
    CustomerPayPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerPayPage),
  ],
})
export class CustomerPayPageModule {}
