import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoEmpleadoPage } from './info-empleado';

@NgModule({
  declarations: [
    InfoEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoEmpleadoPage),
  ],
})
export class InfoEmpleadoPageModule {}
