import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoDetailsPage } from './producto-details';

@NgModule({
  declarations: [
    ProductoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoDetailsPage),
  ],
})
export class ProductoDetailsPageModule {}
