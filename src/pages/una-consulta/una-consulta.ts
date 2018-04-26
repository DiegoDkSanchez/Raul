import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosPage } from '../datos/datos';

/**
 * Generated class for the UnaConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-una-consulta',
  templateUrl: 'una-consulta.html',
})
export class UnaConsultaPage {

  itemImportado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemImportado = navParams.get('item');

  }

  itemTapped(event, item) {
    item.title = this.itemImportado.nombre;
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DatosPage, {
      item: item
    });
  }
}
