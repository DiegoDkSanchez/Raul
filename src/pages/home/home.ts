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
  public informacion: {url: string, idelement: number}[]=[];

  constructor(public navCtrl: NavController,public proveedor:PacienteProvider) {
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ConsultasPage, {
      item: item
    });
  }

  addPaciente(){
    this.navCtrl.push(AddPacientePage);
  }

  ionViewDidLoad(){
    this.Llenar_Pacientes();
  }


  //Suscribe
  Llenar_Pacientes(){
    let todos, url, id, elementos, i;
    this.proveedor.ObtenerPacientes().subscribe(
      data => {
        this.Pacientes = data.lista_pacientes;
      });
  }

}
