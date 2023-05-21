import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PostService } from 'src/app/services/postService.service';
import { Login } from 'src/app/interfaces/modelos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:FormGroup;

  

  submit: boolean = false;
  constructor(private router:Router,private fb:FormBuilder, private loggin: PostService
   , ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
      rememberMe: false
    });
    
  }
  onSubmit(){
    this.submit = true;
    if(this.login.invalid){
      return;
    }
    else{
      const a = this.login.controls['username'].value;
      const b = this.login.controls['password'].value;
      const c = this.login.controls['rememberMe'].value;
      const datos: Login ={
        rut_representante: a,
        contrasenia: b
      }

      console.log('lo q enviamos',datos)
      try {
          this.loggin.login(datos).subscribe( res =>{
            if(res.alo[0] === 'representante'){
              //Set.localStorage
              //this.router.navigate(['inicio']);
            }
          
        });
      }catch (error) {
        console.error('Error al parsear la respuesta JSON:', error);
      }  
      
    }
  }
   showAlert() {
    Swal.fire('Hello!', 'This is a SweetAlert2 alert.');
  }
  //aqui indicamos la funcion de navigate la cual recibe una ruta y nos direcciona
  navigate(ruta:any){ 
    this.router.navigateByUrl(ruta);
  }
}
