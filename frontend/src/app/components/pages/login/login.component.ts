import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/postService.service';
import { Login } from 'src/app/interfaces/modelos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!:FormGroup;

  submit: boolean = false;
  constructor(private router:Router,private fb:FormBuilder, private loggin: PostService) { }

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
          
          console.log('rol',res.alo[0])
        });
      }catch (error) {
        console.error('Error al parsear la respuesta JSON:', error);
      }  
      
    }
  }
  //aqui indicamos la funcion de navigate la cual recibe una ruta y nos direcciona
  navigate(ruta:any){ 
    this.router.navigateByUrl(ruta);
  }
}
