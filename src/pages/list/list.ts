import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { DatosPage } from '../datos/datos';

import {DoctorProvider} from '../../providers/doctor/doctor';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  Doctores

  constructor(public navCtrl: NavController, public proveedor:DoctorProvider) {
    this.Llenar_Pacientes();
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DatosPage, {
      item: item
    });
  }
/*
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  addPaciente(){
    this.navCtrl.push(AddPacientePage);
  }*/

  ionViewDidLoad(){
    this.Llenar_Pacientes();
  }


  //Suscribe
  Llenar_Pacientes(){
    this.proveedor.ObtenerDoctores().subscribe(
      data => {
        this.Doctores = data;
      });
  }
}
