import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

/*
  Generated class for the PacienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PacienteProvider {

  public url:string;

  constructor(public http: HttpClient) {
    this.url = 'https://gist.githubusercontent.com/DiegoDkSanchez/780637b08265186e5e6e936b238f5500/raw/124aead76ff2773a1a3a56d94a7628f5a3135bc5/Prueba%2520Raul'
  }

  ObtenerPacientes(){
    interface pacientesResponse{
      lista_pacientes : any[];
      consulta : any[];
      id : string;
      nombre : string;
    }
    return this.http.get<pacientesResponse>(this.url);
  }

}
