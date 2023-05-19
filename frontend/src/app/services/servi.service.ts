
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {comuna} from '../interfaces/modelos';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {
    //variables para la url del backend
    private myAppUrl: string;
    private myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/comunas';
    //this.myApiUrl = 'api/juntavecinal';
  }
    //metodo para traer los comentarios y este deja listar con ngFor
    getComunas(): Observable<{ listComunas: comuna[] }> {
      return this.http.get<{ listComunas: comuna[] }>(`${this.myAppUrl}${this.myApiUrl}`);
    }
    // //metodo de insercion de la junta vecinal
    // insertJuntaVecinal(junta :JUNTA_VECINAL): Observable <any>{
    //   return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, junta);
    // }
}



