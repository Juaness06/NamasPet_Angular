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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
