import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddConsultaPage } from './add-consulta';

@NgModule({
  declarations: [
    AddConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddConsultaPage),
  ],
})
export class AddConsultaPageModule {}
