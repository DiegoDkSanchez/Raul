import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosPage } from '../datos/datos';

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
  nombres: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.nombres = [
      'Miguel Serbante Santana',
      'Joel Castro Moliner', 
      'Roberto Alfredo Rodriguez',
      'Raquel Valladarez Serano',
      'Jose Roidriguez Elevado'
    ];

    this.items = [];
    for (let i = 0; i < this.nombres.length; i++) {
      this.items.push({
        title: this.nombres[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DatosPage, {
      item: item
    });
  }

}
