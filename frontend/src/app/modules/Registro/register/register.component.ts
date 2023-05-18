import { Component, OnInit } from '@angular/core';
import { comuna } from '../../../interfaces/modelos';
import {ComunaService} from '../../../services/servi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // inicializar variables
  listcomunas: comuna[] = [];

  constructor(
    private comunaService: ComunaService,private router:Router
  ) { }
   
  ngOnInit(): void {
    this.getComunas();
  }

  getComunas() {
    this.comunaService.getComunas().subscribe(
      (data: { listComunas: comuna[] }) => {
        this.listcomunas = data.listComunas;
        console.log(data);
      },
      error => {
        console.log(error); // Mostrar el error en la consola
      }
    );
  }
  navigate(ruta:any){
    console.log(ruta);    
    this.router.navigateByUrl(ruta);
  }
}
