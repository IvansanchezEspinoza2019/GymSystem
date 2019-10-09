import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifEmpleadoPage } from './modif-empleado';

@NgModule({
  declarations: [
    ModifEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifEmpleadoPage),
  ],
})
export class ModifEmpleadoPageModule {}
