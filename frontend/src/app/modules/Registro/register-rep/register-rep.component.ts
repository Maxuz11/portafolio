
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RutService } from 'rut-chileno';
import { comuna } from 'src/app/interfaces/modelos';
import { PostService } from 'src/app/services/postService.service';
import { ComunaService } from 'src/app/services/servi.service';
import {JuntaVecinal} from 'src/app/interfaces/modelos';

@Component({
  selector: 'app-register-rep',
  templateUrl: './register-rep.component.html',
  styleUrls: ['./register-rep.component.scss']
})
export class RegisterRepComponent implements OnInit {
  parentForm!: FormGroup;
  //iniciacion del submit siempre falso 
  submitted = false;

  selectedAvatar!: string;
  comunaRazon!: string;
  //aqui entregamos los nombre de los archivos de los avatars 
  avatars: string[] = ['bear.png', 'cat.png', 'lion.png','meerkat.png','panda.png','polar-bear.png','sloth.png']; 
  // inicializar variables
  listcomunas: comuna[] = [];

  constructor(private fb: FormBuilder,private rutService: RutService,private comunaService: ComunaService, private junta:PostService ) { }

   //aqui se formatea el rut cuando se inserta
   formatearRut(event : Event): void {
    let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
    if (rut)
      this.parentForm.controls['rut_junta'].patchValue(rut, {emitEvent :false});    
    } 
    formatearRut2(event : Event): void {
      let rut = this.rutService.getRutChileForm(1, (event.target as HTMLInputElement).value)
      if (rut)
        this.parentForm.controls['run_rep'].patchValue(rut, {emitEvent :false});    
      } 

  ngOnInit(): void {

    // aqui iniciamos el form "formparent" e indicamos los validadores
    this.parentForm = this.fb.group({
      rut_junta: ["", [Validators.required, this.rutService.validaRutForm]], // <- Aqui es donde viene el validador la funcion validaRutForm la cual retorna un null o un objeto { [key: string]: boolean } 
      nomb_junta: ["", [Validators.required]],
      comuna_junta:[""],
      calle_junta: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      num_calle_junta: ["", [Validators.required, Validators.pattern("^[0-9]\\d*$")]],
      // run_rep: ["", [Validators.required, this.rutService.validaRutForm]],
      // p_nomb_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      // s_nomb_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      // ap_pat_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      // ap_mat_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      // comuna_rep:[""],
      // calle_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      // num_calle_rep: ["", [Validators.required, Validators.pattern("^[0-9]\\d*$")]],
      // contacto_Rep: ["", [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      // correo_rep: ["", [Validators.required,Validators.email]],
      // clave_rep: ["", [Validators.required]],
      // clave_rep_conf: ["", [Validators.required]],
      // selectedAvatar: new FormControl(null)
    });

    //consumir el servicio listar comunas
    this.comunaService.getComunas().subscribe(
      (data: { listComunas: comuna[] }) => {
        this.listcomunas = data.listComunas;
        console.log(this.listcomunas);
      },
      error => {
        console.log(error); // Mostrar el error en la consola
      }
    );
   
  }

  onChangeAvatar() {
    this.selectedAvatar = this.parentForm.controls['selectedAvatar'].value;
  console.log(this.selectedAvatar);
  }

  onSubmit(){
    this.submitted = true;
    // stop here if form is invalid
    if (this.parentForm.invalid) {
        return;
    }
    else {
      //capturamos los valores de los formularios y se los entregamos a la variable pertienente
      const rut_junta = this.parentForm.controls['rut_junta'].value;
      const comuna_junta = this.parentForm.controls['comuna_junta'].value;
      const nombre_j = this.parentForm.controls['nomb_junta'].value;
      const calle_junta = this.parentForm.controls['calle_junta'].value;
      const numero_calle = this.parentForm.controls['num_calle_junta'].value;

      const junta: JuntaVecinal = {
        id_comuna: comuna_junta,
        razon_social: nombre_j,
        direccion: calle_junta,
        numero_calle: numero_calle,
        rut_junta: rut_junta
      }
      console.log(junta);
      
      this.junta.insertJuntaVecinal(junta)
      .subscribe(response => {
        // Maneja la respuesta de la solicitud aquí
        console.log(response);
        if(response == 'ok'){

        }
        
      }, error => {
        // Maneja el error en caso de que ocurra
        console.error(error);
      });

    }
  }

}
