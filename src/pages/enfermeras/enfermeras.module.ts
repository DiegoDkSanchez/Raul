import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnfermerasPage } from './enfermeras';

@NgModule({
  declarations: [
    EnfermerasPage,
  ],
  imports: [
    IonicPageModule.forChild(EnfermerasPage),
  ],
})
export class EnfermerasPageModule {}
