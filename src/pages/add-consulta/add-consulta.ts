import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DoctorProvider} from '../../providers/doctor/doctor';

import { HttpClient } from '@angular/common/http';

import {HttpClientModule} from '@angular/common/http';

import { ConsultasPage } from '../consultas/consultas';
/**
 * Generated class for the AddConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-consulta',
  templateUrl: 'add-consulta.html',
})
export class AddConsultaPage {

  itemTemportal
  Doctores
  idPaciente

  numConsulta
  fecha
  diagnostico
  receta
  
  nombre
  subtitulo
  direccion
  telefono

  SelDoctores

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public proveedor:DoctorProvider,
     public http: HttpClient) {
    this.itemTemportal = navParams.get('item');
    console.log("itemTemportal: "+ this.itemTemportal.id)
    this.idPaciente = this.itemTemportal.id;
    this.Llenar_Doctores();
/*    
this.numConsulta  
this.fecha
this.diagnostico
this.receta*/


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddConsultaPage');
  }

  Llenar_Doctores(){
    this.proveedor.ObtenerDoctores().subscribe(
      data => {
        this.Doctores = data;
      });
  }

  agregarConsulta(){

    this.nombre = this.SelDoctores.nombre;
this.subtitulo = this.SelDoctores.subtitulo;
this.direccion = this.SelDoctores.direccion;
this.telefono = this.SelDoctores.telefono;

    var url = "http://ec2-18-236-137-210.us-west-2.compute.amazonaws.com:2403/pacientes/"+this.idPaciente+"/";
    console.log(url);

    let postParams = {
      consulta:[{
      numConsulta: "0",
      diagnostico: this.diagnostico,
      receta: this.receta,
      doctor: {
        nombre: this.nombre,
        subtitulo: this.subtitulo,
        direccion: this.direccion,
        telefono: this.telefono
      }
    }],
    id : this.idPaciente
    }
    
if(this.nombre != null && this.subtitulo != null){
    this.http.put(url, postParams).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

  this.navCtrl.push(ConsultasPage,{
    item: this.itemTemportal
  });

  }

}
