import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnaConsultaPage } from '../una-consulta/una-consulta';
import { DatosPage } from '../datos/datos';
import { AddConsultaPage } from '../add-consulta/add-consulta';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemImportado = navParams.get('item');
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
    this.navCtrl.push(AddConsultaPage);
  }

}
