import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

/*
  Generated class for the DoctorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {

  public url:string;

  constructor(public http: HttpClient) {
    this.url = 'http://ec2-18-236-137-210.us-west-2.compute.amazonaws.com:2403/doctores/'
  }

  ObtenerDoctores(){
    interface doctoresResponse{
      id : string;
      nombre : string;
      subtitulo : string;
      direccion : string;
      telefono : string;
    }
    return this.http.get<doctoresResponse>(this.url);
  }

}
