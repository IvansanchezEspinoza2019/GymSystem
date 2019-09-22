import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfClientePage } from './inf-cliente';

@NgModule({
  declarations: [
    InfClientePage,
  ],
  imports: [
    IonicPageModule.forChild(InfClientePage),
  ],
  exports: [
    InfClientePage
  ]
})
export class InfClientePageModule {}
