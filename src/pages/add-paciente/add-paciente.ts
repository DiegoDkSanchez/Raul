import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { HttpClient } from '@angular/common/http';

import {HttpClientModule} from '@angular/common/http';

import {HomePage} from '../../pages/home/home';

import { App } from 'ionic-angular';

/**
 * Generated class for the AddPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-paciente',
  templateUrl: 'add-paciente.html',
})
export class AddPacientePage {

  nombre: String;
  direccion: String;
  telefono: String;
  nacimiento: String;

  constructor(public navCtrl: NavController, public http: HttpClient, public appCtrl: App) {
  }

  ionViewDidLoad() {
  }

  agregarPaciente(){
    var url = "http://ec2-18-236-137-210.us-west-2.compute.amazonaws.com:2403/pacientes/";

    let postParams = {
      nombre: this.nombre,
      direccion: this.direccion,
      nacimiento: this.nacimiento,
      telefono: this.telefono
    }
if(this.nombre != null && this.nacimiento != null){
    this.http.post(url, postParams).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }
  this.appCtrl.getRootNav().setRoot(HomePage);
   // this.navCtrl.push(HomePage);

  }

}
