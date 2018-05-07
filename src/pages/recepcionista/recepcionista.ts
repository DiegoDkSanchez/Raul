import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosPage } from '../datos/datos';
import {RecepcionistaProvider} from '../../providers/recepcionista/recepcionista';



import { ConsultasPage } from '../consultas/consultas';
import { AddPacientePage } from '../add-paciente/add-paciente';



/**
 * Generated class for the RecepcionistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recepcionista',
  templateUrl: 'recepcionista.html',
})
export class RecepcionistaPage {
  selectedItem: any;
  Pacientes

  //provider

  constructor(public navCtrl: NavController,public proveedor:RecepcionistaProvider) {
    this.Llenar_Pacientes()
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ConsultasPage, {
      item: item
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  addPaciente(){
    this.navCtrl.push(AddPacientePage);
  }

  ionViewDidLoad(){
    this.Llenar_Pacientes();
  }


  //Suscribe
  Llenar_Pacientes(){
    this.proveedor.ObtenerRecepcionista().subscribe(
      data => {
        this.Pacientes = data;
      });
  }
  getItems(ev){
    var val = ev.target.value;
    if(val&&val.trim()!=""){
      this.Pacientes=this.Pacientes.filter((item)=>{
        return(item.nombre.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }else{
      this.Llenar_Pacientes();
    }
  }

}
