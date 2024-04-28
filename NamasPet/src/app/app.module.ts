import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './veterinario/header/header.component';
import { FooterComponent } from './veterinario/footer/footer.component';
import { LandingPageComponent } from './veterinario/landing-page/landing-page.component';
import { ListaMascotasComponent } from './veterinario/mascotas/lista-mascotas/lista-mascotas.component';
import { VerMascotaComponent } from './veterinario/mascotas/ver-mascota/ver-mascota.component';
import { ListaClientesComponent } from './veterinario/clientes/lista-clientes/lista-clientes.component';
import { ErrorPageComponent } from './veterinario/error-page/error-page.component';
import { LoginComponent } from './veterinario/clientes/log-in/log-in.component';
import { TarjetonesComponent } from './veterinario/mascotas/tarjetones/tarjetones.component';
import { AgregarMascotasComponent } from './veterinario/mascotas/agregar-mascotas/agregar-mascotas.component';
import { EditarMascotasComponent } from './veterinario/mascotas/editar-mascotas/editar-mascotas.component';
import { AgregarClientesComponent } from './veterinario/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './veterinario/clientes/editar-clientes/editar-clientes.component';
import { VerMascotasClienteComponent } from './veterinario/clientes/ver-mascotas-cliente/ver-mascotas-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { HttpClientModule } from '@angular/common/http';
import { ListaDrogasComponent } from './veterinario/drogas/lista-drogas/lista-drogas.component';
import { AdministradorLandingPageComponent } from './administrador/administrador-landing-page/administrador-landing-page.component';
import { AdministradorDashboardComponent } from './administrador/administrador-dashboard/administrador-dashboard.component';
import { AdministradorLogInComponent } from './administrador/administrador-log-in/administrador-log-in.component';
import { ListaVeterinariosComponent } from './administrador/veterinarios/lista-veterinarios/lista-veterinarios.component';
import { AgregarVeterinariosComponent } from './administrador/veterinarios/agregar-veterinarios/agregar-veterinarios.component';
import { EditarVeterinariosComponent } from './administrador/veterinarios/editar-veterinarios/editar-veterinarios.component';
import { AdministradorHeaderComponent } from './administrador/administrador-header/administrador-header.component';
import { ListaTratamientosComponent } from './administrador/tratamientos/lista-tratamientos/lista-tratamientos.component';
import { DrogasTratamientoComponent } from './administrador/tratamientos/drogas-tratamiento/drogas-tratamiento.component';
import { AsignarDrogasTratamientoComponent } from './administrador/tratamientos/asignar-drogas-tratamiento/asignar-drogas-tratamiento.component';
import { AgregarTratamientosComponent } from './administrador/tratamientos/agregar-tratamientos/agregar-tratamientos.component';
import { HistorialMascotaComponent } from './veterinario/mascotas/historial-mascota/historial-mascota.component';
import { LogInComponent } from './administrador/veterinarios/log-in/log-in.component';
import { VerMascotaClienteComponent } from './veterinario/clientes/ver-mascota-cliente/ver-mascota-cliente.component';
import { AdministradorListaMascotasComponent } from './administrador/mascotas/administrador-lista-mascotas/administrador-lista-mascotas.component';
import { AdministradorEditarMascotaComponent } from './administrador/mascotas/administrador-editar-mascota/administrador-editar-mascota.component';
import { AdministradorTarjetonesComponent } from './administrador/mascotas/administrador-tarjetones/administrador-tarjetones.component';
import { AdministradorVerMascotaComponent } from './administrador/mascotas/administrador-ver-mascota/administrador-ver-mascota.component';
import { AdministradorAgregarMascotaComponent } from './administrador/mascotas/administrador-agregar-mascota/administrador-agregar-mascota.component';
import { AdministradorListaClientesComponent } from './administrador/clientes/administrador-lista-clientes/administrador-lista-clientes.component';
import { AdministradorAgregarClienteComponent } from './administrador/clientes/administrador-agregar-cliente/administrador-agregar-cliente.component';
import { AdministradorEditarClienteComponent } from './administrador/clientes/administrador-editar-cliente/administrador-editar-cliente.component';
import { AdministradorVerMascotasClienteComponent } from './administrador/clientes/administrador-ver-mascotas-cliente/administrador-ver-mascotas-cliente.component';
import { AdministradorVerMascotaClienteComponent } from './administrador/clientes/administrador-ver-mascota-cliente/administrador-ver-mascota-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    ListaMascotasComponent,
    VerMascotaComponent,
    ListaClientesComponent,
    ErrorPageComponent,
    LoginComponent,
    TarjetonesComponent,
    AgregarMascotasComponent,
    AgregarMascotasComponent,
    EditarMascotasComponent,
    AgregarClientesComponent,
    EditarClientesComponent,
    VerMascotasClienteComponent,
    ListaDrogasComponent,
    HistorialMascotaComponent,
    AdministradorLandingPageComponent,
    AdministradorDashboardComponent,
    AdministradorLogInComponent,
    ListaVeterinariosComponent,
    AgregarVeterinariosComponent,
    EditarVeterinariosComponent,
    AdministradorHeaderComponent,
    ListaTratamientosComponent,
    DrogasTratamientoComponent,
    AsignarDrogasTratamientoComponent,
    AgregarTratamientosComponent,
    LogInComponent,
    VerMascotaClienteComponent,
    AdministradorListaMascotasComponent,
    AdministradorEditarMascotaComponent,
    AdministradorTarjetonesComponent,
    AdministradorVerMascotaComponent,
    AdministradorAgregarMascotaComponent,
    AdministradorListaClientesComponent,
    AdministradorAgregarClienteComponent,
    AdministradorEditarClienteComponent,
    AdministradorVerMascotasClienteComponent,
    AdministradorVerMascotaClienteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,ReactiveFormsModule  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
