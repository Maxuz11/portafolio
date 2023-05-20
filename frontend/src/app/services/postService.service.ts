import { JuntaVecinal, RepresentanteVecinal } from './../interfaces/modelos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    //variables para la url del backend
    private myAppUrl: string;
    private myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/juntavecinal';
  }

    //metodo de insercion de la junta vecinal
    insertJuntaVecinal(junta :JuntaVecinal): Observable <any>{
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, junta);
    }

    inserRep( Rep:RepresentanteVecinal): Observable <any>{
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}/insercion`, Rep);
    }
}



