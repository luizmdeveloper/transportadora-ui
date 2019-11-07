import { ToastyService } from 'ng2-toasty';
import { ErroHandlerService } from './../../core/errohandler.service';
import { Component, OnInit } from '@angular/core';

import { TransportadorFiltro } from './../../core/filtro';
import { TransportadorService } from './../transportador.service';
import { EstadoService } from './../../core/estado.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pesquisa-transportador',
  templateUrl: './pesquisa-transportador.component.html',
  styleUrls: ['./pesquisa-transportador.component.css']
})
export class PesquisaTransportadorComponent implements OnInit {

  filtro = new TransportadorFiltro();
  estados = [{sigla: '', descricao: 'Selecione um estado' }]
  transportadores = [];

  constructor(private estadoService: EstadoService,
              private transportadorService: TransportadorService,
              private erroHandlerService: ErroHandlerService,
              private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de transportador');
    this.buscarTodosEstados();
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

}
