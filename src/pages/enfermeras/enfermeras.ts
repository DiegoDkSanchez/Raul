import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import {EnfermeraProvider} from '../../providers/enfermera/enfermera';

import { ConsultasPage } from '../consultas/consultas';
import { AddPacientePage } from '../add-paciente/add-paciente';


/**
 * Generated class for the EnfermerasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enfermeras',
  templateUrl: 'enfermeras.html',
})

export class EnfermerasPage {
  selectedItem: any;
  Pacientes

  //provider

  constructor(public navCtrl: NavController,public proveedor:EnfermeraProvider) {
    this.Llenar_Pacientes()
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ConsultasPage, {
      item: item
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  addPaciente(){
    this.navCtrl.push(AddPacientePage);
  }

  ionViewDidLoad(){
    this.Llenar_Pacientes();
  }


  //Suscribe
  Llenar_Pacientes(){
    this.proveedor.ObtenerEnfermeras().subscribe(
      data => {
        this.Pacientes = data;
      });
  }
}
