import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Comuna} from '../interfaces/modelos';

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
  }
    //metodo para traer los comentarios y este deja listar con ngFor
    getComunas(): Observable<{ listcomunas: Comuna[] }> {
      return this.http.get<{ listcomunas: Comuna[] }>(`${this.myAppUrl}${this.myApiUrl}`);
    }
    
}



