import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAparatosPage } from './add-aparatos';

@NgModule({
  declarations: [
    AddAparatosPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAparatosPage),
  ],
})
export class AddAparatosPageModule {}
