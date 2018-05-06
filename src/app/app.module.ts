import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnfermerasPage } from '../pages/enfermeras/enfermeras';
import { RecepcionistaPage } from '../pages/recepcionista/recepcionista';
import { ConsultasPage } from '../pages/consultas/consultas';
import { DatosPage } from '../pages/datos/datos';
import { UnaConsultaPage } from '../pages/una-consulta/una-consulta';
import { AddPacientePage } from '../pages/add-paciente/add-paciente';
import { AddConsultaPage } from '../pages/add-consulta/add-consulta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PacienteProvider } from '../providers/paciente/paciente';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EnfermerasPage,
    RecepcionistaPage,
    ConsultasPage,
    DatosPage,
    UnaConsultaPage,
    AddConsultaPage,
    AddPacientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EnfermerasPage,
    RecepcionistaPage,
    ConsultasPage,
    DatosPage,
    UnaConsultaPage,
    AddPacientePage,
    AddConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PacienteProvider
  ]
})
export class AppModule {}
