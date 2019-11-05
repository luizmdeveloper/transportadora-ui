import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaTransportadorComponent } from './pesquisa-transportador/pesquisa-transportador.component';
import { CadastraTransportadorComponent } from './cadastra-transportador/cadastra-transportador.component';

const routes: Routes = [
  {
    path: 'transportadores',
    component: PesquisaTransportadorComponent
  },
  {
    path: 'transportadores/novo',
    component: CadastraTransportadorComponent
  },
  {
    path: 'transportadores/:codigo',
    component: CadastraTransportadorComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class TransportadorRoutingModule { }
