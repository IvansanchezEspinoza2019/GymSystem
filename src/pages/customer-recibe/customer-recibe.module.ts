import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerRecibePage } from './customer-recibe';

@NgModule({
  declarations: [
    CustomerRecibePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerRecibePage),
  ],
})
export class CustomerRecibePageModule {}
