import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifProductPage } from './modif-product';

@NgModule({
  declarations: [
    ModifProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifProductPage),
  ],
})
export class ModifProductPageModule {}
