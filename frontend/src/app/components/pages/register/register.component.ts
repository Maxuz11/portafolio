import { Component, OnInit } from '@angular/core';
import { comuna } from '../../../interfaces/modelos';
import {ComunaService} from '../../../services/servi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // inicializar variables
  listcomunas: comuna[] = [];

  constructor(
    private comunaService: ComunaService,
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

}
