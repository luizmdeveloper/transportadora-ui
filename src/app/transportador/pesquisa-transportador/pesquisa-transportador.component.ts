import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { TransportadorFiltro } from './../../core/filtro';
import { TransportadorService } from './../transportador.service';
import { EstadoService } from './../../core/estado.service';
import { ErroHandlerService } from './../../core/errohandler.service';
import { ModalTransporteService } from '../../modal-transporte/modal-transporte.service'

@Component({
  selector: 'app-pesquisa-transportador',
  templateUrl: './pesquisa-transportador.component.html',
  styleUrls: ['./pesquisa-transportador.component.css']
})
export class PesquisaTransportadorComponent implements OnInit {

  filtro = new TransportadorFiltro();
  estados = [{sigla: '', descricao: 'Selecione um estado' }];
  modais = [{codigo: 0, nome: 'Selecione um modal'}];
  transportadores = [];

  constructor(private estadoService: EstadoService,
              private transportadorService: TransportadorService,
              private modalTransporteService: ModalTransporteService,
              private erroHandlerService: ErroHandlerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de transportador');
    this.buscarTodosEstados();
    this.buscarTodosModais();
    this.buscar();
  }

  buscar() {
    this.transportadorService.buscarTodos(this.filtro)
      .then(resultado => {
        this.transportadores = resultado;
      })
      .catch(erro => this.erroHandlerService.handler(erro));
  }

  buscarTodosEstados() {
    this.estadoService.buscarTodos()
      .then(resultado => {
        resultado.forEach(estado => {
          this.estados.push(estado);
        });
      })
      .catch(erro => this.erroHandlerService.handler(erro));
  }

  buscarTodosModais() {
    this.modalTransporteService.buscarTodos()
        .then(resultado => {
          resultado.forEach(modal => {
            this.modais.push(modal);
          });
        })
        .catch(erro => this.erroHandlerService.handler(erro));
  }

}
