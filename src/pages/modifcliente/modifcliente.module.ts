import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifclientePage } from './modifcliente';

@NgModule({
  declarations: [
    ModifclientePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifclientePage),
  ],
})
export class ModifclientePageModule {}
