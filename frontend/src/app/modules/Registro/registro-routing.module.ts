import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterRepComponent } from "./register-rep/register-rep.component";


const routes: Routes = [
    {
        path:'vecinos',
        children:[
            { path: 'junta-vecinal', component: RegisterRepComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RegistroRoutingModule { }