import { JuntaVecinal, RepresentanteVecinal, Vecino } from './../interfaces/modelos';
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
    this.myApiUrl = 'api';
  }

    //metodo de insercion de la junta vecinal
    insertJuntaVecinal(junta :JuntaVecinal): Observable <any>{
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}/juntavecinal`, junta);
    }

    inserRep( Rep:RepresentanteVecinal): Observable <any>{
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}/juntavecinal/insercion`, Rep);
    }

    insertvecino(Vecino: Vecino): Observable<any> {
      return this.http.post(`${this.myAppUrl}${this.myApiUrl}/insertvecino`, Vecino);
    }
    
}



