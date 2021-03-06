import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DatosPage } from '../datos/datos';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  nombres: string[];
  items: Array<{title: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.nombres = [
      'Dr. Orellana Argueta',
      'Dr. Ramirez Alfaro', 
      'Dr. Josefa Rodriguez',
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
