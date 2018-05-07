import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnaConsultaPage } from '../una-consulta/una-consulta';
import { DatosPage } from '../datos/datos';
import { AddConsultaPage } from '../add-consulta/add-consulta';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import {HttpClientModule} from '@angular/common/http';

import { App } from 'ionic-angular';

/**
 * Generated class for the ConsultasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  itemImportado
  fechas
  id
  paciente

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private alertCtrl: AlertController,
       public http: HttpClient,
         public appCtrl: App)
         {
    this.itemImportado = navParams.get('item');
    this.id = this.itemImportado.id;
    this.paciente = this.itemImportado
    if(this.itemImportado != null){
      this.fechas = this.itemImportado.consulta;
    }
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UnaConsultaPage, {
      item: item
    });
  }

  addConsulta(){
    this.navCtrl.push(AddConsultaPage, {
      item: this.paciente
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar',
      message: 'Estas seguro de querer eliminar este registro de forma permanente?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Si, Eliminar',
          handler: () => {
            this.borrarPaciente();
            console.log('yes clicked');
          }
        }
      ]
    });
    alert.present();
  }

  borrarPaciente(){
    var url = "http://ec2-18-236-137-210.us-west-2.compute.amazonaws.com:2403/pacientes/"+this.id;

    this.http.delete(url).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

    this.appCtrl.getRootNav().setRoot(HomePage);

  }

}
