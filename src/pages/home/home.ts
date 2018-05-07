import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConsultasPage } from '../consultas/consultas';
import { AddPacientePage } from '../add-paciente/add-paciente';

import {PacienteProvider} from '../../providers/paciente/paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  Pacientes

  //provider

  constructor(public navCtrl: NavController,public proveedor:PacienteProvider) {
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
    this.proveedor.ObtenerPacientes().subscribe(
      data => {
        this.Pacientes = data;
      });
  }

}
