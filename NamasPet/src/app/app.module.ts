import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListaMascotasComponent } from './mascotas/lista-mascotas/lista-mascotas.component';
import { VerMascotaComponent } from './mascotas/ver-mascota/ver-mascota.component';
import { VerTratamientosComponent } from './tratamientos/ver-tratamientos/ver-tratamientos.component';
import { InformacionTratamientosComponent } from './tratamientos/informacion-tratamientos/informacion-tratamientos.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './clientes/log-in/log-in.component';
import { TarjetonesComponent } from './mascotas/tarjetones/tarjetones.component';
import { AgregarMascotasComponent } from './mascotas/agregar-mascotas/agregar-mascotas.component';
import { EditarMascotasComponent } from './mascotas/editar-mascotas/editar-mascotas.component';
import { AgregarClientesComponent } from './clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './clientes/editar-clientes/editar-clientes.component';
import { VerMascotasClienteComponent } from './clientes/ver-mascotas-cliente/ver-mascotas-cliente.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaDrogasComponent } from './drogas/lista-drogas/lista-drogas.component';

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
