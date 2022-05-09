import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { CaracteristicasCarreraComponent } from './caracteristicas-carrera/caracteristicas-carrera.component';
import { DocentesTiempoCompletoComponent } from './docentes-tiempo-completo/docentes-tiempo-completo.component';
import { DondeTrabajarComponent } from './donde-trabajar/donde-trabajar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BeneficiosComponent,
    CaracteristicasCarreraComponent,
    DocentesTiempoCompletoComponent,
    DondeTrabajarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
