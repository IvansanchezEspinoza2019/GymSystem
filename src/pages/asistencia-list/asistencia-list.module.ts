import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AsistenciaListPage } from './asistencia-list';

@NgModule({
  declarations: [
    AsistenciaListPage,
  ],
  imports: [
    IonicPageModule.forChild(AsistenciaListPage),
  ],
})
export class AsistenciaListPageModule {}
