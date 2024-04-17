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
import { VerTratamientosComponent } from './veterinario/tratamientos/ver-tratamientos/ver-tratamientos.component';
import { InformacionTratamientosComponent } from './veterinario/tratamientos/informacion-tratamientos/informacion-tratamientos.component';
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
    VerTratamientosComponent,
    InformacionTratamientosComponent,
    ListaDrogasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
