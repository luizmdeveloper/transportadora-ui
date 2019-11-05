import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputMaskModule } from 'racoon-mask-raw';

import { PesquisaTransportadorComponent } from './pesquisa-transportador/pesquisa-transportador.component';
import { CadastraTransportadorComponent } from './cadastra-transportador/cadastra-transportador.component';
import { TransportadorRoutingModule } from './transportador.routing.module';

@NgModule({
  declarations: [
    PesquisaTransportadorComponent,
    CadastraTransportadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    InputMaskModule,

    TransportadorRoutingModule
  ]
})
export class TransportadorModule { }
