import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPackPage } from './list-pack';

@NgModule({
  declarations: [
    ListPackPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPackPage),
  ],
})
export class ListPackPageModule {}
