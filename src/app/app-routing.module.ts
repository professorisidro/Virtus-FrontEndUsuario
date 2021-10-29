import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheparoquiaComponent } from './componentes/detalheparoquia/detalheparoquia.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaparoquiasComponent } from './componentes/listaparoquias/listaparoquias.component';
import { TelabuscaComponent } from './componentes/telabusca/telabusca.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'busca', component: TelabuscaComponent },
  { path: 'listaparoquias/:id', component: ListaparoquiasComponent},
  { path: 'detalhe/:id', component: DetalheparoquiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
