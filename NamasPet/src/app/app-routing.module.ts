import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './clientes/log-in/log-in.component';
import { AgregarMascotasComponent } from './mascotas/agregar-mascotas/agregar-mascotas.component';
import { EditarMascotasComponent } from './mascotas/editar-mascotas/editar-mascotas.component';
import { AgregarClientesComponent } from './clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { TarjetonesComponent } from './mascotas/tarjetones/tarjetones.component';
import { VerMascotasClienteComponent } from './clientes/ver-mascotas-cliente/ver-mascotas-cliente.component';
import { VerMascotaComponent } from './mascotas/ver-mascota/ver-mascota.component';
import {VerTratamientosComponent} from './tratamientos/ver-tratamientos/ver-tratamientos.component';
import{InformacionTratamientosComponent} from './tratamientos/informacion-tratamientos/informacion-tratamientos.component';
import { ListaDrogasComponent } from './drogas/lista-drogas/lista-drogas.component';

const routes: Routes = [
 //manera de ingresar directamente a localhost:4200
  {path: 'mascotas/all', component: ListaMascotasComponent},
  {path: 'mascotas/tarjetones', component: TarjetonesComponent},
  {path: 'mascotas/add', component: AgregarMascotasComponent},
  {path: 'mascotas/:id', component: VerMascotaComponent},
  {path: 'mascotas/edit/:id', component: EditarMascotasComponent},
  {path: 'clientes/all', component: ListaClientesComponent},
  {path: 'clientes/add', component: AgregarClientesComponent},
  {path: 'cliente/edit/:cedula', component: EditarClientesComponent},
  {path: 'cliente/:cedula/mascotas', component: VerMascotasClienteComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tratamiento/all', component: VerTratamientosComponent},
  {path: 'tratamiento/:id', component: InformacionTratamientosComponent},
  {path: 'drogas/all', component: ListaDrogasComponent},
  {path: '**', component: ErrorPageComponent},
  {path: '', pathMatch: "full", component: LandingPageComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
