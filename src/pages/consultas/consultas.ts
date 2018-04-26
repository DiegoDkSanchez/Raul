import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnaConsultaPage } from '../una-consulta/una-consulta';

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

  itemImportado: any;
  fechas: string[];
  items: Array<{title: string, nombre: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemImportado = navParams.get('item');
    this.fechas=[
      '15/02/18',
      '03/02/18',
      '23/12/17',
      '10/11/17'
    ];

    this.items = [];
    for(let i = 0;i < this.fechas.length; i++){
      this.items.push({

        //El objeto importado solo tiene atributo Title
        //en el objeto actual asignamos title como fecha y el titulo del atributo anterior pasa a ser atributo nombre
        title: this.fechas[i],
        nombre: this.itemImportado.title
      });
    }
  }

  itemTapped(event, item) {
    
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(UnaConsultaPage, {
      item: item
    });
  }

}
