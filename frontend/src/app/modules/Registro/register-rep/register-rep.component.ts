import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RutService } from 'rut-chileno';
import { comuna } from 'src/app/interfaces/modelos';
import { ComunaService } from 'src/app/services/servi.service';

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

  constructor(private fb: FormBuilder,private rutService: RutService,private comunaService: ComunaService) { }

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
      run_rep: ["", [Validators.required, this.rutService.validaRutForm]],
      p_nomb_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      s_nomb_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      ap_pat_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      ap_mat_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      calle_rep: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]],
      num_calle_rep: ["", [Validators.required, Validators.pattern("^[0-9]\\d*$")]],
      contacto_Rep: ["", [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      correo_rep: ["", [Validators.required,Validators.email]],
      clave_rep: ["", [Validators.required]],
      clave_rep_conf: ["", [Validators.required]],
      selectedAvatar: new FormControl(null)
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
      const a = this.parentForm.controls['comuna_junta'].value;
      console.log('q viene en comuna rep',a)
      return;
    }
    else {
      const rut = this.parentForm.get('rut_junta')?.value;
      

      console.log('que rut de razon ingresamos ',rut);
    }
  }

}
