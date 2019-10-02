import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEmpleadoPage } from './add-empleado';

@NgModule({
  declarations: [
    AddEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddEmpleadoPage),
  ],
})
export class AddEmpleadoPageModule {}
