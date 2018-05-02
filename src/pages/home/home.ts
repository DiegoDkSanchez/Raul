import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConsultasPage } from '../consultas/consultas';

import {PacienteProvider} from '../../providers/paciente/paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  nombres: string[];
  items: Array<{title: string}>;

  Pacientes

  //provider
  public informacion: {url: string, idelement: number}[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public proveedor:PacienteProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.nombres = [
      'Joel Alexander Ramirez Argueta',
      'Manuel Figueroa Gonzales Basques', 
      'Samuel Bonilla Ortega Serrano',
      'Saul Alexander Torres Guevara'
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
    this.navCtrl.push(ConsultasPage, {
      item: item
    });
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

        for(let paciente of this.Pacientes){
          todos = paciente;

          url = todos.lista_pacientes;
          //elementos = JSON.stringify(url).split("/");
          i = 0;

          /*
          for(let x of elementos){
            if(i == 6){
              id = x;
            }
            i++;
          }*/
          this.informacion.push({url:'',idelement:id});
        }
      });
  }

}
