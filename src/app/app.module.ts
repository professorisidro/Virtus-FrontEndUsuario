import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TelabuscaComponent } from './componentes/telabusca/telabusca.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormulariobuscaComponent } from './componentes/formulariobusca/formulariobusca.component';
import { ListaparoquiasComponent } from './componentes/listaparoquias/listaparoquias.component';
import { DetalheparoquiaComponent } from './componentes/detalheparoquia/detalheparoquia.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TelabuscaComponent,
    NavbarComponent,
    FormulariobuscaComponent,
    ListaparoquiasComponent,
    DetalheparoquiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,     // aqui serve para manipularmos formulários
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
