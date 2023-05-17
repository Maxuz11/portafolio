import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../app/components/pages/login/login.component";
import {RegisterComponent} from "../app/components/pages/register/register.component";
import {CertificadoComponent} from "../app/components/pages/certificado/certificado.component";
import {PagesError404Component} from "../app/components/pages/pages-error404/pages-error404.component";
import {PerfilComponent} from "../app/components/pages/perfil/perfil.component";
import {ProyectosComponent} from "../app/components/pages/proyectos/proyectos.component";
import{SolicitudesComponent}  from "../app/components/pages/solicitudes/solicitudes.component";
import {NuevasolicitudComponent} from "../app/components/pages/solicitudes/nuevasolicitud/nuevasolicitud.component";
import {ValoracionComponent} from "../app/components/pages/valoracion/valoracion.component";
import {InicioComponent} from "../app/components/pages/inicio/inicio.component";
import {AddmiembroComponent} from "../app/components/admin/addmiembro/addmiembro.component";
import {EditiniComponent} from "../app/components/admin/editini/editini.component";
import {EditmiembroComponent} from "../app/components/admin/editmiembro/editmiembro.component";
import {EditproyecComponent} from "../app/components/admin/editproyec/editproyec.component";
import {EditsolicitudComponent} from "../app/components/admin/editsolicitud/editsolicitud.component";
import {ReportsComponent} from "../app/components/admin/reports/reports.component";
import {ViewvalorComponent} from "../app/components/admin/viewvalor/viewvalor.component";
const routes: Routes = [
{
  path:'registro',
  loadChildren: () => import('./modules/Registro/registro.module').then(m => m.RegistroModule)
},
  {path: '', redirectTo: 'reg_rep', pathMatch: 'full'},// cambiar por el componente de inicio
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'certificado', component: CertificadoComponent},
  {path: 'pages-error404', component: PagesError404Component},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'nuevasolicitud', component: NuevasolicitudComponent},
  {path: 'valoracion', component: ValoracionComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'addmiembro', component: AddmiembroComponent},
  {path: 'editini', component: EditiniComponent},
  {path: 'editmiembro', component: EditmiembroComponent},
  {path: 'editproyec', component: EditproyecComponent},
  {path: 'editsolicitud', component: EditsolicitudComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'viewvalor', component: ViewvalorComponent},
  {path: '**', redirectTo: 'reg_rep', pathMatch: 'full'}// cambiar por el componente de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
