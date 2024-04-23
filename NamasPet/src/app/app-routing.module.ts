import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './veterinario/landing-page/landing-page.component';
import { ListaMascotasComponent } from './veterinario/mascotas/lista-mascotas/lista-mascotas.component';
import { ListaClientesComponent } from './veterinario/clientes/lista-clientes/lista-clientes.component';
import { ErrorPageComponent } from './veterinario/error-page/error-page.component';
import { LoginComponent } from './veterinario/clientes/log-in/log-in.component';
import { AgregarMascotasComponent } from './veterinario/mascotas/agregar-mascotas/agregar-mascotas.component';
import { EditarMascotasComponent } from './veterinario/mascotas/editar-mascotas/editar-mascotas.component';
import { AgregarClientesComponent } from './veterinario/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './veterinario/clientes/editar-clientes/editar-clientes.component';
import { TarjetonesComponent } from './veterinario/mascotas/tarjetones/tarjetones.component';
import { VerMascotasClienteComponent } from './veterinario/clientes/ver-mascotas-cliente/ver-mascotas-cliente.component';
import { VerMascotaComponent } from './veterinario/mascotas/ver-mascota/ver-mascota.component';
import { ListaDrogasComponent } from './veterinario/drogas/lista-drogas/lista-drogas.component';
import { AdministradorLandingPageComponent } from './administrador/administrador-landing-page/administrador-landing-page.component';
import { AdministradorLogInComponent } from './administrador/administrador-log-in/administrador-log-in.component';
import { AgregarVeterinariosComponent } from './administrador/veterinarios/agregar-veterinarios/agregar-veterinarios.component';
import { EditarVeterinariosComponent } from './administrador/veterinarios/editar-veterinarios/editar-veterinarios.component';
import { ListaVeterinariosComponent } from './administrador/veterinarios/lista-veterinarios/lista-veterinarios.component';
import { AdministradorDashboardComponent } from './administrador/administrador-dashboard/administrador-dashboard.component';
import { ListaTratamientosComponent } from './administrador/tratamientos/lista-tratamientos/lista-tratamientos.component';
import { DrogasTratamientoComponent } from './administrador/tratamientos/drogas-tratamiento/drogas-tratamiento.component';
import { AsignarDrogasTratamientoComponent } from './administrador/tratamientos/asignar-drogas-tratamiento/asignar-drogas-tratamiento.component';
import { HistorialMascotaComponent } from './veterinario/mascotas/historial-mascota/historial-mascota.component';

const routes: Routes = [
  {path: '', pathMatch: "full", component: LandingPageComponent},
  {path: '', pathMatch: 'full', redirectTo: '' },
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
  {path: 'drogas/all', component: ListaDrogasComponent},
  {path: 'admin/home/:id', component: AdministradorLandingPageComponent},
  {path: 'admin/login', component: AdministradorLogInComponent},
  {path: 'admin/dashboard', component: AdministradorDashboardComponent},
  {path: 'admin/mascotas/:id/historial', component: HistorialMascotaComponent},
  {path: 'tratamientos/all', component: ListaTratamientosComponent},
  {path: 'tratamientos/:id/drogas' , component: DrogasTratamientoComponent},
  {path: 'tratamientos/:id/asignar-drogas', component: AsignarDrogasTratamientoComponent},
  {path: 'veterinarios/all', component: ListaVeterinariosComponent},
  {path: 'veterinarios/add', component: AgregarVeterinariosComponent},
  {path: 'veterinarios/edit/:id', component: EditarVeterinariosComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
