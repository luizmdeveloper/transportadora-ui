import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ToastyModule } from 'ng2-toasty';

import { TransportadorModule } from '../transportador/transportador.module';
import { TransportadorService } from '../transportador/transportador.service';
import { ErroHandlerService } from './errohandler.service';
import { ViaCepService } from './via-cep.service';
import { EstadoService } from './estado.service';
import { ModalTransporteService } from '../modal-transporte/moda-transporte.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,

    ToastyModule.forRoot(),

    TransportadorModule,
  ],
  exports: [
    ToastyModule
  ],
  providers: [
    Title,

    TransportadorService,
    ErroHandlerService,
    ViaCepService,
    EstadoService,
    ModalTransporteService
  ]
})
export class CoreModule { }
