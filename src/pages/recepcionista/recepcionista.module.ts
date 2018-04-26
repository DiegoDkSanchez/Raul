import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecepcionistaPage } from './recepcionista';

@NgModule({
  declarations: [
    RecepcionistaPage,
  ],
  imports: [
    IonicPageModule.forChild(RecepcionistaPage),
  ],
})
export class RecepcionistaPageModule {}
