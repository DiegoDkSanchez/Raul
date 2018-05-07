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
    this.url = 'http://ec2-18-236-137-210.us-west-2.compute.amazonaws.com:2403/pacientes/'
  }

  ObtenerPacientes(){
    interface pacientesResponse{
      consulta : any[];
      id : string;
      nombre : string;
    }
    return this.http.get<pacientesResponse>(this.url);
  }

  agregarPaciente(paciente:any){
    
    return this.http.post(this.url,JSON.stringify,{})
  }

}
